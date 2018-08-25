# ndjson-generate-schema [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/busterc/ndjson-generate-schema.svg)](https://greenkeeper.io/)

> Effortlessly convert your NDJSON data to a JSON Schema.

* Powered by: [`generate-schema`](https://github.com/nijikokun/generate-schema)

## Installation

```sh
$ npm install --save ndjson-generate-schema

# Or to use the CLI globally
$ npm install --global ndjson-generate-schema
```

## Usage

Given an NDJSON file `dogs.db`:

```
{"id":1,"name":"Buddy","breed":"Boston Terrier"}
{"id":2,"name":"Charley"}
```

### CLI

```sh
$ ndjson-generate-schema

  Effortlessly convert your NDJSON data to a JSON Schema.

  Usage

    $ ndjson-generate-schema <title> <file> [outfile]

  Inputs

    title     Required, Title of Schema
    file      Required, NDJSON file to read
    outfile   Optional, filename to write Schema out to
```

### Module

```js
const path = require('path');
const ndjsonGenerateSchema = require('ndjson-generate-schema');

ndjsonGenerateSchema('Dogs', path.resolve(__dirname, 'dogs.db')).then(
  schema => {
    console.log(schema);
    /*
    {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "title": "Dogs Set",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "breed": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ],
        "title": "Dogs"
      }
    }
    */
  }
);
```

## API

### `ndjsonGenerateSchema(title, file)`

* ### `title`
  * `Required` : `String` the title of the Schema
* ### `file`
  * `Required` : `String` the NDJSON file to read

## License

ISC © [Buster Collings](https://about.me/buster)

[npm-image]: https://badge.fury.io/js/ndjson-generate-schema.svg
[npm-url]: https://npmjs.org/package/ndjson-generate-schema
[travis-image]: https://travis-ci.org/busterc/ndjson-generate-schema.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/ndjson-generate-schema
[daviddm-image]: https://david-dm.org/busterc/ndjson-generate-schema.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/ndjson-generate-schema
[coveralls-image]: https://coveralls.io/repos/busterc/ndjson-generate-schema/badge.svg
[coveralls-url]: https://coveralls.io/r/busterc/ndjson-generate-schema
