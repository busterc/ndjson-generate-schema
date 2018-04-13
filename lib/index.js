'use strict';

const GenerateSchema = require('generate-schema');
const fs = require('fs-ndjson');

module.exports = function(title, file) {
  return fs.readFile(file).then(data => {
    return GenerateSchema.json(title, data);
  });
};
