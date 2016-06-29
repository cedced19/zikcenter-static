#!/usr/bin/env node
'use strict';
var fs = require('fs'),
    minifier = require('./lib/minifier'),
    ls = require('./lib/ls');

fs.writeFile('./data.json', JSON.minify(JSON.stringify(ls('./')), null, 4), function (err) {
  if (err) {
    console.log('\x1B[31m' + err + '\x1B[91m');
  }
  console.log('\x1B[32mData saved!\x1B[39m');
});
