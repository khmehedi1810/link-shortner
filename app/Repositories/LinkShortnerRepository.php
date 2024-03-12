<?php

namespace App\Repositories;

use App\Interfaces\ShortnerRepositoryInterface;
use App\Models\LinkShorter;

class LinkShortnerRepository implements ShortnerRepositoryInterface
{
    public function getLink(string $id)
    {
        return LinkShorter::select('long_url')->where('short_url', '%LIKE%', $id)->first();
    }

    public function createLink(array $link)
    {
        return LinkShorter::create($link);
    }
}
