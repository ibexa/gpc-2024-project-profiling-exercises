<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Service;

use Ibexa\Contracts\Core\Repository\UserService;
use Ibexa\Contracts\Core\Repository\Values\User\User;

class PosterService implements PosterServiceInterface
{
    public function __construct(
        private readonly int $postersUserGroupId,
        private readonly UserService $userService
    ) {
    }

    public function getRandomPoster(): User
    {
        $postersUserGroup = $this->userService->loadUserGroup($this->postersUserGroupId);
        $posters = $this->userService->loadUsersOfUserGroup($postersUserGroup, 0, 1000);

        $randomPosterIndex = rand(0, count($posters) - 1);

        return $posters[$randomPosterIndex];
    }

    public function getAll(): array
    {
        // TODO: Implement getAll() method.
    }

    public function getComments(Location $postLocation): array
    {
        // TODO: Implement getComments() method.
    }
}
