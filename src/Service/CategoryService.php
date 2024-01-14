<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Service;

use Ibexa\Contracts\Core\Repository\SearchService;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Contracts\Core\Repository\Values\Content\LocationQuery;
use Ibexa\Contracts\Core\Repository\Values\Content\Query\Criterion;

class CategoryService implements CategoryServiceInterface
{
    private const CATEGORY_CONTENT_TYPE_IDENTIFIER = 'category';

    public function __construct(
        private readonly SearchService $searchService
    ) {
    }

    public function getRandomCategory(): Content
    {
        $query = new LocationQuery();
        $query->filter = new Criterion\ContentTypeIdentifier(self::CATEGORY_CONTENT_TYPE_IDENTIFIER);
        $result = $this->searchService->findContent($query);

        $randomCategory = rand(0, count($result->searchHits) - 1);

        return $result->searchHits[$randomCategory]->valueObject;
    }

    public function getAll(): array
    {
        $query = new LocationQuery();
        $query->filter = new Criterion\ContentTypeIdentifier(self::CATEGORY_CONTENT_TYPE_IDENTIFIER);
        $result = $this->searchService->findContent($query);

        $categories = [];
        foreach ($result->searchHits as $searchHit) {
            $categories[] = $searchHit->valueObject;
        }

        return $categories;
    }
}
