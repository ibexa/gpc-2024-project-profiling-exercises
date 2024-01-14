<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Command;

use Faker\Factory;
use Faker\Generator;
use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\ContentTypeService;
use Ibexa\Contracts\Core\Repository\LocationService;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Contracts\Core\Repository\Values\Content\Location;
use Ibexa\Core\Repository\Repository;
use Ibexa\Core\Repository\Values\ContentType\ContentType;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class GenerateCategoryCommand extends BaseGeneratorCommand
{
    protected static $defaultName = 'app:generate-categories';

    public function __construct(
        private readonly ContentService $contentService,
        private readonly ContentTypeService $contentTypeService,
        private readonly LocationService $locationService,
        private readonly Repository $repository,
        private readonly int $categoryFolderLocationId,
        string $name = null
    ) {
        parent::__construct($name);
    }

    protected function configure(): void
    {
        $this->setHelp('This Command generates fake BB categories. It will randomly create subcategories. You can profile this as well :)');
        $this->addArgument('amount', InputArgument::REQUIRED, 'How many categories should be generated?');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Mallorca Bulletin Board: Generate categories');

        try {
            $amount = $this->getAmount($input);
        } catch (\InvalidArgumentException $e) {
            $io->error($e->getMessage());

            return Command::INVALID;
        }

        $io->createProgressBar($amount);
        $io->progressStart($amount);
        $faker = Factory::create();
        $this->repository->sudo(function () use ($faker, $amount, $io) {
            $categoryContentType = $this->contentTypeService->loadContentTypeByIdentifier('category');
            $categoryFolderLocation = $this->locationService->loadLocation($this->categoryFolderLocationId);

            for ($i = 1; $i <= $amount; ++$i) {
                $categoryContent = $this->generateCategory($categoryFolderLocation, $categoryContentType, $faker);
                if (rand(1, 2) === 1) {
                    $randomNumberOfSubCategories = rand(2, 6);
                    for ($ir = 1; $ir <= $randomNumberOfSubCategories; ++$ir) {
                        $this->generateCategory(
                            $categoryContent->contentInfo->getMainLocation(),
                            $categoryContentType,
                            $faker
                        );
                    }
                }

                $io->progressAdvance();
            }
        });

        $io->progressFinish();

        $io->success(sprintf(
            'All (%d) requested categories were generated (with potential subcategories).',
            $amount
        ));

        return Command::SUCCESS;
    }

    private function generateCategory(Location $parentLocation, ContentType $contentType, Generator $faker): Content
    {
        $categoryCreateStruct = $this->contentService->newContentCreateStruct($contentType, 'eng-GB');
        $categoryCreateStruct->setField('name', ucfirst($faker->word()), 'eng-GB');
        $categoryCreateStruct->setField('color', $faker->hexColor(), 'eng-GB');
        $locationCreateStruct = $this->locationService->newLocationCreateStruct($parentLocation->id);
        $content = $this->contentService->createContent($categoryCreateStruct, [$locationCreateStruct]);

        return $this->contentService->publishVersion($content->getVersionInfo());
    }
}
