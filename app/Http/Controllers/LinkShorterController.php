<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Interfaces\ShortnerRepositoryInterface;
use Illuminate\Support\Str;

class LinkShorterController extends Controller
{
    private ShortnerRepositoryInterface $shortnerRepository;

    public function __construct(ShortnerRepositoryInterface $shortnerRepository)
    {
        $this->shortnerRepository = $shortnerRepository;
    }

    public function show(Request $request, string $id): JsonResponse
    {
        dd($this->shortnerRepository->getLink($id));
    }

    public function store(Request $request): JsonResponse
    {
        $details = $request->only([
            'long_url'
        ]);

        $generate_short_url = url('/'). "/ly/" . uniqid();

        $data = [
            'long_url' => $details['long_url'],
            'short_url' => $generate_short_url
        ];

        return response()->json(
            [
                'data' => $this->shortnerRepository->createLink($data)
            ],
            Response::HTTP_CREATED
        );
    }
}
