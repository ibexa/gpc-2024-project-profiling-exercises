<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Command;

use App\Service\CategoryService;
use App\Service\PosterService;
use Faker\Factory;
use Faker\Generator;
use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\ContentTypeService;
use Ibexa\Contracts\Core\Repository\LocationService;
use Ibexa\Contracts\Core\Repository\Values\Content\Location;
use Ibexa\Contracts\Core\Repository\Values\ContentType\ContentType;
use Ibexa\Core\FieldType\Author;
use Ibexa\Core\FieldType\RelationList;
use Ibexa\Core\Repository\Repository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class GeneratePostsCommand extends BaseGeneratorCommand
{
    protected static $defaultName = 'app:generate-posts';

    public function __construct(
        private readonly PosterService $posterService,
        private readonly CategoryService $categoryService,
        private readonly ContentService $contentService,
        private readonly ContentTypeService $contentTypeService,
        private readonly LocationService $locationService,
        private readonly Repository $repository,
        private readonly int $postsFolderLocationId,
        string $name = null
    ) {
        parent::__construct($name);
    }

    protected function configure(): void
    {
        $this->setHelp('This Command generates fake BB posts and sets a random Poster as an author. You can profile this as well :)');
        $this->addArgument('amount', InputArgument::REQUIRED, 'How many posts should be generated?');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Mallorca Bulletin Board: Generate posts');

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
            $postContentType = $this->contentTypeService->loadContentTypeByIdentifier('post');
            $commentContentType = $this->contentTypeService->loadContentTypeByIdentifier('comment');
            $postsFolderLocation = $this->locationService->loadLocation($this->postsFolderLocationId);

            for ($i = 1; $i <= $amount; ++$i) {
                $randomPosterUser = $this->posterService->getRandomPoster();
                $postCreateStruct = $this->contentService->newContentCreateStruct($postContentType, 'eng-GB');
                $author = new Author\Author();
                $author->id = $randomPosterUser->id;
                $author->name = $randomPosterUser->getName();
                $author->email = $randomPosterUser->email;
                $postCreateStruct->setField('author', new Author\Value([$author]), 'eng-GB');
                $postCreateStruct->setField('title', $faker->sentence(rand(3, 10)), 'eng-GB');
                $postCreateStruct->setField('message', $this->getRichTextValue($faker, rand(1, 5)), 'eng-GB');
                $postCreateStruct->setField('categories', new RelationList\Value([$this->categoryService->getRandomCategory()->id]));
                $randomCreationDateInPast30days = $faker->dateTimeBetween('-30 days');
                $postCreateStruct->modificationDate = $randomCreationDateInPast30days;
                $locationCreateStruct = $this->locationService->newLocationCreateStruct($postsFolderLocation->id);
                $post = $this->contentService->createContent($postCreateStruct, [$locationCreateStruct]);
                $publishedPost = $this->contentService->publishVersion($post->versionInfo);

                $randomCommentsNo = rand(0, 5);
                for ($ic = 1; $ic <= $randomCommentsNo; ++$ic) {
                    $this->generateComment(
                        $publishedPost->contentInfo->getMainLocation(),
                        $commentContentType,
                        $faker,
                        $randomCreationDateInPast30days
                    );
                }

                $io->progressAdvance(1);
            }
        });

        $io->progressFinish();

        $io->success(sprintf(
            'All (%d) requested posts were generated.',
            $amount
        ));

        return Command::SUCCESS;
    }

    private function generateComment(
        Location $parentLocation,
        ContentType $commentContentType,
        Generator $faker,
        \DateTime $originalPostPublicationDate
    ): void {
        $randomCommenter = $this->posterService->getRandomPoster();
        $commentCreateStruct = $this->contentService->newContentCreateStruct($commentContentType, 'eng-GB');
        $commentAuthor = new Author\Author();
        $commentAuthor->id = $randomCommenter->id;
        $commentAuthor->name = $randomCommenter->getName();
        $commentAuthor->email = $randomCommenter->email;

        $commentCreateStruct->setField('author', new Author\Value([$commentAuthor]), 'eng-GB');
        $commentCreateStruct->setField('message', $this->getRichTextValue($faker, rand(1, 5)), 'eng-GB');
        $commentCreateStruct->modificationDate = $faker->dateTimeBetween(
            $originalPostPublicationDate->format('Y-m-d H:i:s'),
            '+5 days'
        );
        $locationCreateStruct = $this->locationService->newLocationCreateStruct($parentLocation->id);
        $content = $this->contentService->createContent($commentCreateStruct, [$locationCreateStruct]);
        $this->contentService->publishVersion($content->versionInfo);
    }
}
