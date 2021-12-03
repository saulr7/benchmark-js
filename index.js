#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const ArrayBenchmark = require('./arraysBenchark');

const { argv } = yargs(hideBin(process.argv));

const { size = 2000001, type = '' } = argv;

ArrayBenchmark(size, type);
