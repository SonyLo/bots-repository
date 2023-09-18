<?php

namespace App\Http\Controllers\Globals;

use App\Classes\SlugController;
use App\Facades\BotManager;
use App\Facades\BotMethods;
use App\Http\Controllers\Controller;
use App\Http\Resources\ActionStatusResource;
use App\Http\Resources\BotSecurityResource;
use App\Models\ActionStatus;
use App\Models\Basket;
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

            $basket = Basket::query()
                        ->where("product_id", $product->id)
                        ->where("bot_id", $bot->id)
                        ->where("bot_user_id", $botUser->id)
                        ->first();

            if (is_null($basket))

                $keyboard = [
                    [
                        ["text" => "🛒Добавить в корзину $product->current_price ₽", "callback_data" => "/add_to_basket $product->id"],
                    ],
                ];
            else
                $keyboard = [
                    [
                        ["text" => "🛒Добавить еще в корзину $product->current_price ₽", "callback_data" => "/add_to_basket $product->id"],
                    ],
                    [
                        ["text" => "👎Удалить из корзины", "callback_data" => "/remove_from_basket $product->id"],
                    ],
                ];

            BotManager::bot()
                ->sendPhoto(
                    $botUser->telegram_chat_id,
                    $product->title,
                    InputFile::create($product->images[0] ?? public_path() . "/images/cashman-save-up.png"),
                    $keyboard);

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
        $botUser = BotManager::bot()->currentBotUser();

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

                $image = !str_contains($image, "http") ? env("APP_URL") . "/images/" . $bot->company->slug . "/" . $image : $image;

                $media[] = [
                    "media" => $image,
                    "type" => "photo",
                    "caption" => $image
                ];
            }

            BotManager::bot()->replyMediaGroup($media);

        } else if (count($product->images) === 1) {

            $image = $product->images[0];

            $image = !str_contains($image, "http") ? env("APP_URL") . "/images/" . $bot->company->slug . "/" . $image : $image;

            BotManager::bot()->replyPhoto("Изображение к товару",
                InputFile::create($image));
        }

        $basket = Basket::query()
            ->where("product_id", $productId)
            ->where("bot_id", $bot->id)
            ->where("bot_user_id", $botUser->id)
            ->first();

        if (is_null($basket))

            $keyboard = [
                [
                    ["text" => "🛒Добавить в корзину $product->current_price ₽", "callback_data" => "/add_to_basket $product->id"],
                ],
            ];
        else
            $keyboard = [
                [
                    ["text" => "🛒Добавить еще в корзину $product->current_price ₽", "callback_data" => "/add_to_basket $product->id"],
                ],
                [
                    ["text" => "👎Удалить из корзины", "callback_data" => "/remove_from_basket $product->id"],
                ],
            ];


        BotManager::bot()
            ->replyInlineKeyboard("<b>$product->title</b>\n" .
                "$product->description\n" .
                "Старая цена: $product->old_price ₽\n" .
                "Цена товара: $product->current_price ₽",
                $keyboard
            );


    }

    public function orders(...$config)
    {
        $bot = BotManager::bot()->getSelf();

        BotManager::bot()->reply("История заказов");
    }

    public function removeFromBasket(...$data)
    {
        $productId = $data[3] ?? null;

        if (is_null($productId)) {
            BotManager::bot()->reply("Упс... что-то пошло не так...");
            return;
        }

        $bot = BotManager::bot()->getSelf();
        $botUser = BotManager::bot()->currentBotUser();

        $product = Product::query()
            ->where("bot_id", $bot->id)
            ->where("id", $productId)
            ->first();

        if (is_null($product)) {
            BotManager::bot()->reply("Упс... товар не наден...");
            return;
        }

        $productInBasket = Basket::query()
            ->where("product_id", $product->id)
            ->where("bot_user_id", $botUser->id)
            ->where("bot_id", $bot->id)
            ->whereNull("ordered_at")
            ->first();

        if (is_null($productInBasket)) {
            $title = $product->title;
            BotManager::bot()->reply("Товар $title уже удален из корзины");
            return;
        }

        if ($productInBasket->count - 1 > 0) {
            $productInBasket->count--;
            $productInBasket->save();

            $title = $productInBasket->product->title;
            $price = $productInBasket->count * $productInBasket->product->current_price;

            BotManager::bot()->reply("Товар $title убран из корзины. Осталось $productInBasket->count. Цена товара $price ₽");
            return;
        }

        $title = $productInBasket->product->title;
        $productInBasket->delete();
        BotManager::bot()->reply("Товар $title успешно удален из корзины.");

        $this->shopMenu();
    }

    public function addToBasket(...$data)
    {
        $productId = $data[3] ?? null;

        if (is_null($productId)) {
            BotManager::bot()->reply("Упс... что-то пошло не так...");
            return;
        }

        $bot = BotManager::bot()->getSelf();
        $botUser = BotManager::bot()->currentBotUser();

        $product = Product::query()
            ->where("bot_id", $bot->id)
            ->where("id", $productId)
            ->first();

        if (is_null($product)) {
            BotManager::bot()->reply("Упс... товар не наден...");
            return;
        }

        $productInBasket = Basket::query()
            ->where("product_id", $product->id)
            ->where("bot_user_id", $botUser->id)
            ->where("bot_id", $bot->id)
            ->whereNull("ordered_at")
            ->first();

        if (is_null($productInBasket)) {
            $productInBasket = Basket::query()->create([
                'product_id' => $product->id,
                'count' => 1,
                'bot_user_id' => $botUser->id,
                'bot_id' => $bot->id,
                'ordered_at' => null,
            ]);
            $title = $productInBasket->product->title;
            $price = $productInBasket->count * $productInBasket->product->current_price;
            BotManager::bot()->reply("Товар $title добавлен в корзину. Цена товара $price ₽");
        } else {
            $productInBasket->count++;
            $productInBasket->save();

            $price = $productInBasket->count * $productInBasket->product->current_price;

            $title = $productInBasket->product->title;
            BotManager::bot()->reply("Товар $title добавлен в корзину в колличестве $productInBasket->count. Цена товара $price ₽");
        }

        $this->shopMenu();
    }

    public function productsInCategory(...$data)
    {
        $categoryId = $data[3] ?? null;
        $pageId = $data[4] ?? null;
        $this->productsPage($pageId, 5, $categoryId);
    }

    private function shopMenu($title = "Меню магазина"){

        $bot = BotManager::bot()->getSelf();

        $botUser = BotManager::bot()->currentBotUser();

        $productInCart = Basket::query()
            ->where("bot_id", $bot->id)
            ->where("bot_user_id", $botUser->id)
            ->count() ?? 0;

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

    public function basket(...$config)
    {
        $bot = BotManager::bot()->getSelf();
        $botUser = BotManager::bot()->currentBotUser();

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


        $baskets = Basket::query()
            ->where("bot_id", $bot->id)
            ->where("bot_user_id", $botUser->id)
            ->get();

        $tmpSum = 0;
        $tmpCount = 0;

        foreach ($baskets as $basket) {
            $tmpSum += $basket->product->current_price * $basket->count;
            $tmpCount += $basket->count;
        }

        $baskets = Basket::query()
            ->where("bot_id", $bot->id)
            ->where("bot_user_id", $botUser->id)
            ->get();

        foreach ($baskets  as $basket) {

            $product =  $basket->product;

            $keyboard = [
                [
                    ["text" => "🛒Добавить $product->current_price еще в корзину ₽", "callback_data" => "/add_to_basket $product->id"],
                ],
                [
                    ["text" => "👎Удалить из корзины", "callback_data" => "/remove_from_basket $product->id"],
                ],
            ];

            BotManager::bot()
                ->sendPhoto(
                    $botUser->telegram_chat_id,
                    $product->title,
                    InputFile::create($product->images[0] ?? public_path() . "/images/cashman-save-up.png"),
                    $keyboard);
        }

        \App\Facades\BotManager::bot()
            ->replyKeyboard(
                "Корзина товаров. Товаров в корзине $tmpCount ед. на сумму $tmpSum руб.",
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
            ->first())["value"] ?? 5;

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

        $this->shopMenu($title);


    }
}
