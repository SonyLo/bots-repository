<?php

namespace App\Http\Controllers\Globals;

use App\Classes\SlugController;
use App\Facades\BotManager;
use App\Facades\BotMethods;
use App\Http\Controllers\Controller;
use App\Http\Resources\ActionStatusResource;
use App\Http\Resources\BotSecurityResource;
use App\Models\ActionStatus;
use App\Models\Bot;
use App\Models\BotMenuSlug;
use App\Models\BotMenuTemplate;
use App\Models\BotUser;
use App\Models\Product;
use App\Models\ProductCategory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use ReflectionClass;
use Telegram\Bot\FileUpload\InputFile;

class SimpleShopScriptController extends SlugController
{
    public function config(Bot $bot)
    {
        $hasMainScript = BotMenuSlug::query()
            ->where("bot_id", $bot->id)
            ->where("slug", "global_simple_shop")
            ->first();


        if (is_null($hasMainScript))
            return;

        $model = BotMenuSlug::query()->updateOrCreate(
            [
                "slug" => "global_simple_shop",
                "bot_id" => $bot->id,
                'is_global' => true,
            ],
            [
                'command' => ".*Магазин товаров",
                'comment' => "Модуль вывода товаров в ТГ-бот, включая корзину и детали о товаре",
            ]);

        $params = [
            [
                "type" => "text",
                "key" => "products_per_page",
                "value" => 10,

            ],
            [
                "type" => "text",
                "key" => "shop_title",
                "value" => "Меню продукции",

            ],

            [
                "type" => "text",
                "key" => "shop_welcome_message",
                "value" => "Приветствуем вас, %s, в нашем магазине товаров!",

            ],

            [
                "type" => "channel",
                "key" => "callback_channel_id",
                "value" => $bot->order_channel ?? $bot->main_channel ?? env("BASE_ADMIN_CHANNEL"),
            ],

        ];


        if (count($model->config ?? []) < count($params)) {
            $model->config = $params;
            $model->save();
        }

        $model = BotMenuSlug::query()->updateOrCreate(
            [
                "slug" => "global_products_categories",
                "bot_id" => $bot->id,
                'is_global' => true,
            ],
            [
                'command' => ".*Категории товаров",
                'comment' => "Скрипт отображения категорий товаров",
            ]);


        $params = [
            [
                "type" => "text",
                "key" => "categories_per_page",
                "value" => 5,

            ],
        ];

        if (count($model->config ?? []) < count($params)) {
            $model->config = $params;
            $model->save();
        }

        $model = BotMenuSlug::query()->updateOrCreate(
            [
                "slug" => "global_products_menu",
                "bot_id" => $bot->id,
                'is_global' => true,
            ],
            [
                'command' => ".*Наши товары",
                'comment' => "Скрипт отображения списка товаров",
            ]);

        $model = BotMenuSlug::query()->updateOrCreate(
            [
                "slug" => "global_product_basket",
                "bot_id" => $bot->id,
                'is_global' => true,
            ],
            [
                'command' => ".*Корзина .([0-9]{1,3}).",
                'comment' => "Скрипт отображения корзины товаров",
            ]);

        $model = BotMenuSlug::query()->updateOrCreate(
            [
                "slug" => "global_order_history",
                "bot_id" => $bot->id,
                'is_global' => true,
            ],
            [
                'command' => ".*История покупок",
                'comment' => "Скрипт отображения истории покупок товаров",
            ]);


    }

    private function productsPage($page = 0, $count = 5, $categoryId = null)
    {

        $bot = BotManager::bot()->getSelf();

        $botUser = BotManager::bot()->currentBotUser();

        $request = Product::query()
            ->where("bot_id", $bot->id);
        //->where("in_stop_list_at", false);

        if (!is_null($categoryId))
            $request = $request->whereHas("productCategories", function ($q) use ($categoryId) {
                $q->where("product_category_id", $categoryId);
            });


        $products = $request
            ->skip($page * $count)
            ->take($count)
            ->get();


        if (count($products) == 0) {
            BotManager::bot()
                ->reply("Упс... Товара то нет:(");
            return;
        }

        foreach ($products as $product) {
            BotManager::bot()
                ->sendPhoto(
                    $botUser->telegram_chat_id,
                    $product->title,
                    InputFile::create($product->images[0] ?? public_path() . "/images/cashman-save-up.png"),
                    [
                        [
                            ["text" => "👍Детали товара", "callback_data" => "/detail_global_product $product->id"],
                        ],
                        [
                            ["text" => "🛒Добавить в корзину $product->current_price ₽", "callback_data" => "/add_to_basket $product->id"],
                        ],

                    ]);

        }

        if (count($products) >= $count)
            BotManager::bot()
                ->replyInlineKeyboard("Текущая страница <b>" . ($page + 1) . "</b>",
                    [
                        [
                            ["text" => "👉Загрузить еще", "callback_data" =>
                                is_null($categoryId) ? "/next_global_products " . ($page + 1) : "/category_products $categoryId " . ($page + 1)
                            ],
                        ],

                    ]);
    }

    private function categoriesPage($page = 0, $count = 5)
    {

        $bot = BotManager::bot()->getSelf();

        $botUser = BotManager::bot()->currentBotUser();

        $request = ProductCategory::query()
            ->where("bot_id", $bot->id)
            ->whereHas("products");


        $categories = $request
            ->skip($page * $count)
            ->take($count)
            ->get();

        if (count($categories) == 0) {
            BotManager::bot()
                ->reply("Упс... Категорий то нет:(");
            return;
        }


        $keyboard = [];
        foreach ($categories as $category) {
            $keyboard[] =
                [
                    ["text" => "$category->title ($category->count шт.)", "callback_data" => "/category_products $category->id 0"],
                ];
        }

        if (count($categories) >= $count)
            $keyboard[] = [
                ["text" => "👉Загрузить еще", "callback_data" => "/next_category_products " . ($page + 1)],
            ];

        BotManager::bot()
            ->sendPhoto(
                $botUser->telegram_chat_id,
                "Категории товаров, страница <b>" . ($page + 1) . "</b>",
                InputFile::create($product->images[0] ?? public_path() . "/images/cashman-save-up.png"),
                $keyboard
            );


    }

    public function nextProductPage(...$data)
    {
        $page = $data[3] ?? 0;
        $this->productsPage($page);
    }

    public function nextCategories(...$data)
    {
        $page = $data[3] ?? 0;
        $this->categoriesPage($page);
    }

    public function detailProduct(...$data)
    {
        $bot = BotManager::bot()->getSelf();

        $productId = $data[3] ?? null;

        $product = Product::query()
            ->where("id", $productId)
            ->first();

        if (is_null($product)) {
            BotManager::bot()->reply("Упс... Продукт не найден");
            return;
        }

        if (count($product->images) > 1) {
            $media = [];

            foreach ($product->images as $image) {

                $image = !strpos("http", $image) ? env("APP_URL") . "/images/" . $bot->company->slug . "/" . $image : $image;
                Log::info("step1=>".$image);
                $media[] = [
                    "media" => $image,
                    "type" => "photo",
                    "caption" => $image
                ];
            }

            BotManager::bot()->replyMediaGroup($media);

        } else if (count($product->images) === 1) {

            $image = $product->images[0];

            $image = !strpos("http", $image) ? env("APP_URL") . "/images/" . $bot->company->slug . "/" . $image : $image;
            Log::info("step2=>".$image);

            BotManager::bot()->replyPhoto("Изображение к товару",
                InputFile::create($image));
        }

        BotManager::bot()
            ->replyInlineKeyboard("<b>$product->title</b>\n" .
                "$product->description\n" .
                "Старая цена: $product->old_price ₽\n" .
                "Цена товара: $product->current_price ₽",
                [
                    [
                        ["text" => "🛒Добавить в корзину $product->current_price ₽", "callback_data" => "/add_to_basket $product->id"],
                    ],
                ]
            );


    }

    public function orders(...$config)
    {
        $bot = BotManager::bot()->getSelf();

        BotManager::bot()->reply("История заказов");
    }

    public function addToBasket(...$data)
    {
        BotManager::bot()->reply("Добавить в корзину");
    }

    public function productsInCategory(...$data)
    {
        $categoryId = $data[3] ?? null;
        $pageId = $data[4] ?? null;
        $this->productsPage($pageId, 5, $categoryId);
    }

    public function basket(...$config)
    {
        $bot = BotManager::bot()->getSelf();

        $menu = BotMenuTemplate::query()
            ->updateOrCreate(
                [
                    'bot_id' => $bot->id,
                    'type' => 'reply',
                    'slug' => "menu_basket",

                ],
                [
                    'menu' => [

                        [
                            ["text" => "📜Товары в корзине"],
                        ],
                        [
                            ["text" => "💶Оформление заказа"],
                        ],
                        [
                            ["text" => "🌟Магазин товаров"],
                        ],
                        [
                            ["text" => "🔥Главное меню"],
                        ],
                    ],
                ]);

        \App\Facades\BotManager::bot()
            ->replyKeyboard(
                "Корзина товаров",
                $menu->menu);
    }

    public function categories(...$config)
    {
        $this->categoriesPage(0, 5);
    }

    public function products(...$config)
    {

        $count = (Collection::make($config[1])
            ->where("key", "products_per_page")
            ->first())["value"] ?? 10;

        $this->productsPage(0, $count);
    }

    public function main(...$config)
    {

        $bot = BotManager::bot()->getSelf();

        $botUser = BotManager::bot()->currentBotUser();

        $name = BotMethods::prepareUserName($botUser);

        $count = (Collection::make($config[1])
            ->where("key", "products_per_page")
            ->first())["value"] ?? 10;

        $title = (Collection::make($config[1])
            ->where("key", "shop_title")
            ->first())["value"] ?? "Меню";

        $welcome = (Collection::make($config[1])
            ->where("key", "shop_welcome_message")
            ->first())["value"] ?? "%s";

        BotManager::bot()
            ->sendPhoto(
                $botUser->telegram_chat_id,
                sprintf($welcome, $name),
                InputFile::create(public_path() . "/images/shopify.png")
            );

        $productInCart = 0;
        $menu = BotMenuTemplate::query()
            ->updateOrCreate(
                [
                    'bot_id' => $bot->id,
                    'type' => 'reply',
                    'slug' => "menu_products",

                ],
                [
                    'menu' => [
                        [
                            ["text" => "🛒Корзина ($productInCart)"],
                        ],
                        [
                            ["text" => "🥂Категории товаров"],
                        ],
                        [
                            ["text" => "🌭Наши товары"],
                        ],
                        [
                            ["text" => "🕖История покупок"],
                        ],
                        [
                            ["text" => "🔥Главное меню"],
                        ],
                    ],
                ]);

        \App\Facades\BotManager::bot()
            ->replyKeyboard(
                $title,
                $menu->menu);


    }
}
