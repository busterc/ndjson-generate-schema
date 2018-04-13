#!/usr/bin/env node
'use strict';
const path = require('path');
const fs = require('fs');
const meow = require('meow');
const ndjsonGenerateSchema = require('./');

const cli = meow(`

  Usage

    $ ndjson-generate-schema <title> <file> [outfile]

  Inputs

    title     Required, Title of Schema
    file      Required, NDJSON file to read
    outfile   Optional, filename to write Schema out to
`);

(function() {
  if (cli.input.length < 2) {
    return cli.showHelp();
  }
  ndjsonGenerateSchema(cli.input[0], cli.input[1])
    .then(schema => {
      const schemaJson = JSON.stringify(schema, null, 2);
      if (cli.input[2]) {
        const outfile = path.resolve(process.cwd(), cli.input[2]);
        return fs.writeFileSync(outfile, schemaJson);
      }
      console.log(schemaJson);
    })
    .catch(error => {
      console.error(error);
    });
})();
