#!/usr/bin/perl
use strict;
use LWP::UserAgent;

my $ua = LWP::UserAgent->new();
my $res = $ua->get("http://$ARGV[0]/akcia/results/reload" . ($ARGV[1] eq 'diff' ? '?diff=1':''));
