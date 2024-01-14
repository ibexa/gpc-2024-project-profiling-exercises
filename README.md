This project aims to provide you with a sandbox for exercising your profiling skills in Ibexa DXP-based projects.
There are multiple performance issues with the project's code - use your profiling skills to find them all (and then: fix them ;) )
Contributors: Mateusz Bieniek and Marek Nocuń

Feel free to drop us a message with feedback: mateusz.bieniek@ibexa.co and marek.nocun@ibexa.co

## Requirements
- Standard Ibexa DXP v4.5 requirements: https://doc.ibexa.co/en/4.5/getting_started/requirements/
- PHP v8.1+, MariaDB or MySQL
- Valid Ibexa DXP Enterprise license

## Installation
1. Clone the repository
2. Create a database and restore the database dump from `doc/sql/igpc_profiling.sql` with base data like directories, roles, etc
3. Set up `.env.local` with DB connection details
4. `composer install`
5. `composer run post-install-cmd`
6. `php -S 127.0.0.1:8000 -t public`
7. Enjoy!

## Testing

### Blackfire tests

The tests are located in the `.blackfire.yaml` file.

### Blackfire scenarios

The scenarios are located in `./tests/performance/` directory and are loaded from the `.blackfire.yaml` file.

### Running the tests:

```sh
docker run --rm -it 
    -e BLACKFIRE_CLIENT_ID="X" \
    -e BLACKFIRE_CLIENT_TOKEN="Y" \
    -v "`pwd`:/app" -v "`pwd`/var/log:/tmp/blackfire-player-trace" \
    blackfire/player run .blackfire.yaml -vv --endpoint=https://example.com --tracer -vv \
    --blackfire-env=Z
```

## COPYRIGHT
Copyright (C) 1999-2024 Ibexa AS (formerly eZ Systems AS). All rights reserved.
