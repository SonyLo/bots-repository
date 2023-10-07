<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('bots', function (Blueprint $table) {
            $table->string("callback_link")->nullable();
        });

        Schema::table('bot_pages', function (Blueprint $table) {
            $table->boolean('is_external')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bots', function (Blueprint $table) {
            $table->dropColumn("callback_link");
        });

        Schema::table('bot_pages', function (Blueprint $table) {
            $table->dropColumn('is_external');
        });
    }
};
