<?php

namespace App\Classes;

use App\Facades\BotManager;
use App\Facades\InlineQueryService;
use App\Models\InlineQueryItem;
use App\Models\InlineQuerySlug;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpKernel\Exception\HttpException;

class InlineQueryCore
{
    use InlineQueryMethodsTrait;

    protected $controller = null;

    protected $routes = [];

    protected $bot;

    public function __construct()
    {
        $this->bot = null;

    }

    public function setBot($bot): InlineQueryCore
    {
        if (is_null($bot))
            throw new HttpException(400, "Бот не задан!");

        $this->bot = $bot;
        return $this;
    }

    public function inline(): static
    {
        return $this;
    }

    public function controller($controller): InlineQueryCore
    {
        $this->controller = $controller;

        return $this;
    }

    /**
     * @throws \Exception
     */
    public function handler($data): InlineQueryCore
    {
        if (is_null($data))
            return $this;


        $id = $data["id"] ?? null;
        $query = $data["query"] ?? "";
        $offset = $data["offset"] ?? null;

        include_once base_path('routes/inline-queries.php');

        $inlineSlug = InlineQuerySlug::query()
            ->with(["items"])
            ->where("bot_id", $this->bot->id)
            ->whereHas("items")
            ->where("command", $query)
            ->first();


        if (!is_null($inlineSlug)) {

            $max = InlineQueryItem::query()
                ->where("inline_query_slug_id", $inlineSlug->id)
                ->count();

            $step = 10;

            $items = InlineQueryItem::query()
                ->where("inline_query_slug_id", $inlineSlug->id)
                ->take($step)
                ->skip($offset ?? 0)
                ->get();

            $button_list = [];

            foreach ($items as $item) {
                $data = InlineQueryService::inline()
                    ->getInlineQueryItem($item) ?? null;

                if (!is_null($data))
                    $button_list[] = $data;
            }


            if (count($button_list) > 0) {


                \App\Facades\BotMethods::bot()
                    ->whereBot($this->bot)
                    ->sendAnswerInlineQuery($id, $button_list, $offset + $step < $max ? $offset + $step : null);

                return $this;
            }

        }

        $find = false;

        foreach ($this->routes as $item) {

            if (is_null($item["path"]))
                continue;

            if ($item["path"] == $query) {
                $find = $this->tryCall($item, ...$data);
                break;
            }

        }

        if (!$find) {
            $button_list[] = [
                'type' => 'article',
                'id' => uniqid(),
                'title' => "УПС!",
                'input_message_content' => [
                    'message_text' => "По вашему запросу ничего не найдено....",
                ],

                'thumb_url' => env("APP_URL")
                    . "/images/error.png",
                //'url' => env("APP_URL"),
                'description' => "Сожалеем, но на текущий момент по вашему запросу нет никакой информации! Возможно, она появится позже...",
                'hide_url' => true
            ];


            \App\Facades\BotMethods::bot()
                ->whereBot($this->bot)
                ->sendAnswerInlineQuery($id, $button_list);
        }

        return $this;

    }

    public function query(string $command, string $action): InlineQueryCore
    {

        $this->routes[] = [
            "path" => $command ?? "",
            "controller" => $this->controller ?? null,
            "function" => $action,
        ];


        return $this;
    }

    private function tryCall($item, ...$arguments): bool
    {
        $find = false;
        try {
            if (is_callable($item["function"])) {
                app()->call($item["function"], $arguments);
            } else {
                app()->call((!is_null($item["controller"]) ?
                    $item["controller"] . "@" . $item["function"] :
                    $item["function"]), $arguments);
            }

            $find = true;
        } catch (\Exception $e) {
            Log::info($e->getMessage() . " " . $e->getFile() . " " . $e->getLine());
        }

        return $find;
    }

}