<?php

namespace App\Providers;

use App\Interfaces\ShortnerRepositoryInterface;
use App\Repositories\LinkShortnerRepository;
use Illuminate\Support\ServiceProvider;

class ShortnerRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(ShortnerRepositoryInterface::class, LinkShortnerRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
