<?php

namespace Database\Seeders;

use App\Models\Bot;
use App\Models\BotMenuSlug;
use Illuminate\Database\Seeder;

class BotMenuSlugSeeder extends Seeder
{
    protected function handlerCashBackMenuSlugs($bot){
        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Наши заведения",
            'slug' => "slug_location_1",
            'comment'=>"Скрипт выводит информацию о заведении и список его дочерних заведений в виде кнопок"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Благотворительность",
            'slug' => "slug_charity_1",
            'comment'=>"Скрипт позволяет отобразить меню Благотоврительность"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Меню",
            'slug' => "slug_menu_1",
            'comment'=>"Скрипт отображает меню заведения в виде набора картинок или же информационных файлов"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*О нас",
            'slug' => "slug_about_us_1",
            'comment'=>"Скрипт выводит информацию о сервисе CashBack"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*О боте",
            'slug' => "slug_about_bot_1",
            'comment'=>"Скрипт выводит информацию о данном боте"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Анкета пользователя",
            'slug' => "slug_vip_form_1",
            'comment'=>"Скрипт выдает ссылку на анкету пользователя"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Главное меню",
            'slug' => "slug_main_menu_1",
            'comment'=>"Скрипт отображения главного меню системы"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => "/start",
            'slug' => "slug_main_menu_first_1",
            'comment'=>"Скрипт отображения главного меню системы"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Special CashBack System",
            'slug' => "slug_special_cashback_system_1",
            'comment'=>"Скрипты работы системы CashBack - управление бонусами"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Новости",
            'slug' => "slug_news_1",
            'comment'=>"Скрипт отображает меню новостей системы"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Позвать официанта",
            'slug' => "slug_call_the_waiter_1",
            'comment'=>"Скрипт работы с администратором. Вызов администратора"
        ]);




        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Мои друзья",
            'slug' => "slug_my_friends_1",
            'comment'=>"Скрипт отображения меню управления друзьями пользователя"
        ]);


        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Найти друзей!",
            'slug' => "slug_search_friends_1",
            'comment'=>"Скрипт поиска друзей между ботами в системе"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Мой бюджет",
            'slug' => "slug_my_budget_1",
            'comment'=>"Скрипт вызова меню с просмотром начислений и списаний"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Запросить CashBack",
            'slug' => "slug_request_cash_back_1",
            'comment'=>"Скрипт запроса CashBack у администратора системы"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Админ.меню",
            'slug' => "slug_admin_menu_1",
            'comment'=>"Скрипт вызова административного меню"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Моя сеть друзей",
            'slug' => "slug_network_of_friends_1",
            'comment'=>"Скрипт просмотра приглашенных друзей"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Пригласить друзей",
            'slug' => "slug_invite_friends_1",
            'comment'=>"Скрипт реферальной программы"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Наши заведения",
            'slug' => "slug_our_establishments_1",
            'comment'=>"Скрипт отображения списка локаций с подробной информацией о каждой локации"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Начисления",
            'slug' => "slug_charges_1",
            'comment'=>"Скрипт вывода начислений бонусов"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Списания",
            'slug' => "slug_write_offs_1",
            'comment'=>"Скрипт вывода списаний бонусов"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Забронировать столик",
            'slug' => "slug_book_a_table_1",
            'comment'=>"Скрипт обратной связи с администратром и бронирования столика"
        ]);
    }

    protected function handlerShopMenuSlugs($bot){


        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Магазин товаров",
            'slug' => "slug_view_products_1",
            'comment'=>"Скрипт отображает меню просмотра товаров и корзины"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Оформление заказа",
            'slug' => "slug_make_order_1",
            'comment'=>"Скрипт отображает окно оформления заказов, которые находятся в корзине"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Корзина товаров",
            'slug' => "slug_basket_1",
            'comment'=>"Скрипт отображает окно просмотра товаров в корзине"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Отслеживание заказа",
            'slug' => "slug_order_deliveryman_watcher_1",
            'comment'=>"Скрипт отображает окно отслеживания локации курьера, который занимается доставкой товаров"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Специальные предлжожения",
            'slug' => "slug_special_offers_1",
            'comment'=>"Скрипт отображает окно спец. предложения компании для клиентов"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Поддержка клиентов",
            'slug' => "slug_technical_support_1",
            'comment'=>"Скрипт отображает окно поддержки клиентов"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Просмотр состояния заказа",
            'slug' => "slug_order_status_watch_1",
            'comment'=>"Скрипт отображает окно просмотра информации о заказе с его стастусом"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Запросить локацию доставщика",
            'slug' => "slug_request_deliveryman_location_1",
            'comment'=>"Скрипт отображает окно просмотра информации о заказе с его стастусом"
        ]);

    }

    protected function handlerDeliveryServiceMenuSlugs($bot){

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Главное меню",
            'slug' => "slug_deliveryman_main_menu_1",
            'comment'=>"Скрипт отображения главного меню системы"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Профиль работника",
            'slug' => "slug_deliveryman_profile_1",
            'comment'=>"Скрипт отображения профиля доставщика"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => "/start",
            'slug' => "slug_deliveryman_main_menu_1",
            'comment'=>"Скрипт отображения главного меню системы"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Мои заказы",
            'slug' => "slug_deliveryman_orders_1",
            'comment'=>"Скрипт отображает окно списка информации о заказах"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Отчеты о работе",
            'slug' => "slug_deliveryman_statistics_1",
            'comment'=>"Скрипт отображает окно статистики работы доставщика"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Отчет о доставках",
            'slug' => "slug_deliveryman_statistics_delivery_1",
            'comment'=>"Скрипт отображает окно статистики работы доставщика"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Отчет о доходах",
            'slug' => "slug_deliveryman_statistics_money_1",
            'comment'=>"Скрипт отображает окно статистики дохода доставщика"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Поиск заказов",
            'slug' => "slug_deliveryman_search_orders_1",
            'comment'=>"Скрипт отображает окно списка ближайших к доставщику заказов"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Заказы в работе",
            'slug' => "slug_deliveryman_current_orders_1",
            'comment'=>"Скрипт отображает окно списка актуальных заказов"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Завершенные заказы",
            'slug' => "slug_deliveryman_finished_orders_1",
            'comment'=>"Скрипт отображает окно списка завершенных заказов"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Поддержка доставщиков",
            'slug' => "slug_deliveryman_support_1",
            'comment'=>"Скрипт отображает окно технической поддержки для доставщиков"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*Правила работы",
            'slug' => "slug_deliveryman_rules_1",
            'comment'=>"Скрипт отображает окно правил работы доставщиком"
        ]);

        BotMenuSlug::query()->create([
            'bot_id' => $bot->id,
            'command' => ".*О боте",
            'slug' => "slug_about_bot_1",
            'comment'=>"Скрипт выводит информацию о данном боте"
        ]);
    }
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $botCashBack = Bot::query()
            ->where("bot_domain", "obedy_go_bot")
            ->first();

        $this->handlerCashBackMenuSlugs($botCashBack);
        $this->handlerShopMenuSlugs($botCashBack);

        $botShop= Bot::query()
            ->where("bot_domain", "isushibot")
            ->first();

        $this->handlerCashBackMenuSlugs($botShop);
        $this->handlerShopMenuSlugs($botShop);

        $botDeliveryService= Bot::query()
            ->where("bot_domain", "deliveryrocketbot")
            ->first();

        $this->handlerDeliveryServiceMenuSlugs($botDeliveryService);
    }
}
