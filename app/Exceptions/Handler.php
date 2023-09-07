<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });



        $this->renderable(function (HttpException $e, Request $request) {
            //if ($request->is('api/*'))
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getStatusCode());

        });

        $this->renderable(function (ValidationException $e, Request $request) {
           // if ($request->is('api/*'))
            return response()->json([
                'message' => $e->getMessage()
            ], 400);

        });

      /*  $this->renderable(function (\Exception $e, Request $request) {
            //if ($request->is('api/*'))
            return response()->json([
                'message' => $e->getMessage()
            ]);

        });*/
    }
}
