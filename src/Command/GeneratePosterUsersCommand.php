<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Command;

use Faker\Factory;
use Ibexa\Core\Repository\Repository;
use Ibexa\Core\Repository\UserService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class GeneratePosterUsersCommand extends Command
{
    protected static $defaultName = 'app:generate-posters';

    public function __construct(
        private readonly UserService $userService,
        private readonly Repository $repository,
        private readonly int $postersUserGroupId,
        string $name = null
    ) {
        parent::__construct($name);
    }

    protected function configure(): void
    {
        $this->setHelp('This Command generates fake BB users (Posters). You can profile this as well :)');
        $this->addArgument('amount', InputArgument::REQUIRED, 'How many users should be generated?');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Mallorca Bulletin Board: Generate Poster users');

        $amount = (int) $input->getArgument('amount');
        if ($amount < 1) {
            $io->error('The "amount" argument has to be an integer with a value higher than 0.');

            return Command::INVALID;
        }

        $io->createProgressBar($amount);
        $io->progressStart($amount);
        $faker = Factory::create();
        for ($i = 1; $i <= $amount; ++$i) {
            $this->repository->sudo(function () use ($faker) {
                $postersUserGroup = $this->userService->loadUserGroup($this->postersUserGroupId);
                $userCreateStruct = $this->userService->newUserCreateStruct(
                    $faker->userName(),
                    $faker->email(),
                    $faker->password(10),
                    'eng-GB'
                );
                $userCreateStruct->setField('first_name', $faker->firstName(), 'eng-GB');
                $userCreateStruct->setField('last_name', $faker->lastName(), 'eng-GB');

                $this->userService->createUser($userCreateStruct, [$postersUserGroup]);
            });

            $io->progressAdvance();
        }
        $io->progressFinish();

        $io->success(sprintf(
            'All (%d) requested Posters were generated.',
            $amount
        ));

        return Command::SUCCESS;
    }
}
