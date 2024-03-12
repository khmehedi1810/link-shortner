<?php

namespace App\Interfaces;

interface ShortnerRepositoryInterface
{
    public function getLink(string $id);
    public function createLink(array $link);
}
