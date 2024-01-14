<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Controller;

use App\ValueObject\Weather;
use Ibexa\Bundle\Core\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class WeatherController extends Controller
{
    public function __construct(
        private readonly HttpClientInterface $httpClient
    ) {
    }

    public function widget(string $city): Response
    {
        // Simulation of slow, external API.
        try {
            $this->httpClient->request(
                'GET',
                'https://hub.dummyapis.com/delay?seconds=1'
            );
        } catch (\Exception $e) {
            // On some rare occasions we can get 503 here.
        }

        $condition = 'n/a';
        switch (rand(1, 3)) {
            case 1:
                $condition = 'sunny';
                break;
            case 2:
                $condition = 'cloudy';
                break;
            case 3:
                $condition = 'rainy';
                break;
        }
        // This is for the sake of profiling, normally those values would be taken from the API response
        $weather = new Weather($city, rand(10, 20), 'celsius', $condition);

        return $this->render('@ibexadesign/component/weather_widget.html.twig', ['weather' => $weather]);
    }
}
