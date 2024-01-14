<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Controller;

use Ibexa\Bundle\Core\Controller;
use Ibexa\Contracts\Core\Repository\LocationService;
use Ibexa\Core\MVC\Symfony\View\View;

class CategoryController extends Controller
{
    public function __construct(
        private readonly LocationService $locationService
    ) {
    }

    public function embed(LocationService $locationService, View $view, int $locationId)
    {
        $categoryLocation = $this->locationService->loadLocation($locationId);
        $parentLocation = $this->locationService->loadLocation($categoryLocation->parentLocationId);

        $parentCategoryLocation = null;
        if ('category' === $parentLocation->getContentInfo()->getContentType()->identifier) {
            $parentCategoryLocation = $parentLocation;
        }

        $view->addParameters([
            'parentCategoryLocation' => $parentCategoryLocation,
        ]);

        return $view;
    }
}
