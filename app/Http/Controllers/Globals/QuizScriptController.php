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

class QuizScriptController extends SlugController
{
    public function config(Bot $bot)
    {
        $model = BotMenuSlug::query()->updateOrCreate(
            [
                "slug" => "global_about_bot_main",
                'is_global' => true,
                'parent_slug_id' => null,
                'bot_id' => null,
            ],
            [
                'command' => ".*Начать квиз",
                'comment' => "Старт выбранного квиза",
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
