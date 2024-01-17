<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'image' => $this->image,
            'description' => $this->description,
            'completed_at' => $this->completed_at,
            'start_at' => $this->start_at,
            'end_at' => $this->end_at,
            'display_type' => $this->display_type,
            'time_limit' => $this->time_limit,
            'show_answers' => $this->show_answers,
            'bot_id' => $this->bot_id,
            'questions' => QuizQuestionResource::collection($this->whenLoaded('questions')),
            'commands' => QuizCommandResource::collection($this->whenLoaded('commands')),
        ];
    }
}