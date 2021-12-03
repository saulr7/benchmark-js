#!/usr/bin/env node
const faker = require('faker');
const { forEach } = require('lodash');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv));

const { size = 2000001, type = '' } = argv;

const myDummyArray = new Array(size).fill(0);
const myOGArray = [];

const objBuilder = (idx = 0) => {
  const name = faker.address.streetName();
  const square = (idx + 1) * (idx + 1);
  return { square, name };
};

// eslint-disable-next-line no-console
console.time(type);
switch (type.toUpperCase()) {
  case 'JS':
    /** VANILLA JS */
    myDummyArray.forEach((_, idx) => {
      const obj = objBuilder(idx);
      myOGArray.push(obj);
    });
    break;

  case 'LODASH':
    /** LODASH */
    forEach(myDummyArray, (_, idx) => {
      const obj = objBuilder(idx);
      myOGArray.push(obj);
    });
    break;
  case 'ForLoop':

    /** VANILLA JS WITH ForLoop */
    for (let idx = 0; idx < myDummyArray.length; idx += 1) {
      const obj = objBuilder(idx);
      myOGArray.push(obj);
    }
    break;

  default:
    // eslint-disable-next-line no-console
    console.log(`type ${type} no available`);
}

// eslint-disable-next-line no-console
console.log(`type: ${type} with size: ${size} `);
// eslint-disable-next-line no-console
console.timeEnd(type);
