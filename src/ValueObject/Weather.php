<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\ValueObject;

final class Weather
{
    public function __construct(
        private readonly string $city,
        private readonly int $temeperature,
        private readonly string $unit,
        private readonly string $conditon
    ) {
    }

    public function getCity(): string
    {
        return $this->city;
    }

    public function getTemperature(): int
    {
        return $this->temeperature;
    }

    public function getUnit(): string
    {
        return $this->unit;
    }

    public function getCondition(): string
    {
        return $this->conditon;
    }
}
