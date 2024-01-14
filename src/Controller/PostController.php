<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Controller;

use Ibexa\Bundle\Core\Controller;
use Ibexa\Contracts\Core\Repository\SearchService;
use Ibexa\Contracts\Core\Repository\Values\Content\LocationQuery;
use Ibexa\Contracts\Core\Repository\Values\Content\Query\Criterion;
use Ibexa\Core\MVC\Symfony\View\ContentView;

class PostController extends Controller
{
    public function __construct(
        private readonly SearchService $searchService
    ) {
    }

    public function withComments(ContentView $view)
    {
        $query = new LocationQuery();
        $query->query = new Criterion\LogicalAnd([
            new Criterion\ContentTypeIdentifier('comment'),
            new Criterion\ParentLocationId($view->getLocation()->id),
        ]);
        $query->limit = 1000;
        $results = $this->searchService->findLocations($query);
        $view->addParameters([
            'comments' => $results->searchHits,
        ]);

        return $view;
    }
}
