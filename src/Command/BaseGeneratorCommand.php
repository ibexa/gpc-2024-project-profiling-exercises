<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Command;

use Faker\Generator;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;

abstract class BaseGeneratorCommand extends Command
{
    /**
     * @throws \InvalidArgumentException
     */
    protected function getAmount(InputInterface $input): int
    {
        $amount = (int) $input->getArgument('amount');
        if ($amount < 1) {
            throw new \InvalidArgumentException(
                'The "amount" argument has to be an integer with a value higher than 0.'
            );
        }

        return $amount;
    }

    protected function getRichTextValue(Generator $faker, int $paragraphsNo): string
    {
        $paragraphText = '';
        for ($i = 1; $i <= $paragraphsNo; ++$i) {
            $paragraphText .= '<para>' . $faker->paragraph() . '</para>';
        }

        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?><section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\">$paragraphText</section>";
    }
}
