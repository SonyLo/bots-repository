<?php

namespace App\Http\Controllers\Globals;

use App\Classes\SlugController;
use App\Facades\BotManager;
use App\Http\Controllers\Controller;
use App\Models\Bot;
use App\Models\BotMenuSlug;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Telegram\Bot\FileUpload\InputFile;

class AboutBotScriptController extends SlugController
{
    public function config(Bot $bot)
    {
        $hasMainScript = BotMenuSlug::query()
            ->where("slug", "global_about_bot_main")
            ->whereNull("parent_slug_id")
            ->whereNull("bot_id")
            ->first();

        if (is_null($hasMainScript))
            return;

        $model = BotMenuSlug::query()->updateOrCreate(
            [
                "slug" => "global_about_bot_main",
                'is_global' => true,
            ],
            [
                'command' => ".*О боте",
                'comment' => "Информация о текущем боте",
            ]);

        $params = [];
        if (count($model->config ?? []) != count($params)) {
            $model->config = $params;
            $model->save();
        }

    }

    public function callbackFormGet(Request $request, $botDomain)
    {
        Inertia::setRootView("bot");

        $bot = \App\Models\Bot::query()
            ->where("bot_domain", $botDomain)
            ->first();
        return Inertia::render('BotPages/CallBackForm', [
            'bot' => $bot,
        ]);
    }

    public function aboutBot(...$config)
    {
        $bot = BotManager::bot()->getSelf();
        BotManager::bot()
            ->replyPhoto("Хочешь такой же бот для своего бизнеса? ",
                InputFile::create(public_path() . "/images/cashman.jpg"),
                [
                    [
                        [
                            "text" => "🔥Перейти в нашего бота для заявок",
                            "url" => "https://t.me/cashman_dn_bot"
                        ]
                    ],
                    [
                        [
                            "text" => "\xF0\x9F\x8D\x80Написать в тех. поддержку",
                            "web_app" => [
                                "url" => env("APP_URL") . "/bot-client/$bot->bot_domain?slug=route#/about"
                            ]
                        ],
                    ],

                ]
            );

    }
}
