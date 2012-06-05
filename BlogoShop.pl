#!/usr/bin/env perl

use strict;
use warnings;

use lib 'lib';
use Mojolicious::Commands;

# Application
$ENV{MOJO_APP} = 'BlogoShop';
$ENV{MOJO_MAX_MESSAGE_SIZE} = 1024*1024*30;

# Start commands
Mojolicious::Commands->start('psgi');

1;