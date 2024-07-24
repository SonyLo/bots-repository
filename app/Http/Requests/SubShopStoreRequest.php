<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SubShopStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'bot_id' => ['nullable', 'integer', 'exists:bots,id'],
            'title' => ['nullable', 'string', 'max:255'],
            'keyword' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'string', 'max:255'],
            'schedule' => ['nullable', 'json'],
            'config' => ['nullable', 'json'],
            'is_active' => ['required'],
        ];
    }
}
