<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Controller;

use App\Service\CategoryServiceInterface;
use Ibexa\Bundle\Core\Controller;
use Ibexa\Contracts\Core\Repository\SearchService;
use Ibexa\Contracts\Core\Repository\Values\Content\LocationQuery;
use Ibexa\Contracts\Core\Repository\Values\Content\Query\Criterion;
use Ibexa\Core\Repository\Values\Content\Location;
use Pagerfanta\Adapter\ArrayAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller
{
    public function __construct(
        private readonly SearchService $searchService
    ) {
    }

    public function posts(Location $location, int $page = 1): Response
    {
        $query = new LocationQuery();
        $query->query = new Criterion\ContentTypeIdentifier('post');
        $query->limit = 1000;
        $results = $this->searchService->findLocations($query);

        $adapter = new ArrayAdapter($results->searchHits);
        $pagerfanta = new Pagerfanta($adapter);
        $pagerfanta->setMaxPerPage(20);
        $pagerfanta->setCurrentPage($page);

        return $this->render('@ibexadesign/component/posts.html.twig', ['pager' => $pagerfanta, 'location' => $location]);
    }

    public function menu(CategoryServiceInterface $categoryService): Response
    {
        return $this->render('@ibexadesign/component/menu.html.twig', ['categories' => $categoryService->getAll()]);
    }
}
