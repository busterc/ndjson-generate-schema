const path = require('path');
const assert = require('assert');
const ndjsonGenerateSchema = require('../index.js');

describe('ndjsonGenerateSchema', () => {
  it('generates schema', () => {
    ndjsonGenerateSchema('Dogs', path.resolve(__dirname, 'dogs.db')).then(schema => {
      assert(schema.items.required.find(x => x === 'id'));
      assert(!schema.items.required.find(x => x === 'breed'));
    });
  });
});
