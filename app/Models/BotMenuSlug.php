<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class BotMenuSlug extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'bot_id',
        'command',
        'comment',
        'slug',
        'bot_dialog_command_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'bot_id' => 'integer',
    ];

    public function bot(): BelongsTo
    {
        return $this->belongsTo(Bot::class);
    }

    public function page(): HasOne
    {
        return $this->hasOne(BotPage::class,'bot_menu_slug_id','id');
    }

    public function botDialogCommand(): HasOne
    {
        return $this->hasOne(BotDialogCommand::class,'id','bot_dialog_command_id');
    }



}
