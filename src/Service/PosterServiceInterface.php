<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Service;

use Ibexa\Contracts\Core\Repository\Values\User\User;

interface PosterServiceInterface
{
    public function getRandomPoster(): User;
}
