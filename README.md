# prettyprint

[![Build status](https://travis-ci.org/prayerslayer/prettyprint.svg?branch=master)](https://travis-ci.org/prayerslayer/prettyprint)
[![Coverage Status](https://coveralls.io/repos/github/prayerslayer/prettyprint/badge.svg?branch=master)](https://coveralls.io/github/prayerslayer/prettyprint?branch=master)
[![npm version](https://badge.fury.io/js/%40prayerslayer%2Fprettyprint.svg)](https://badge.fury.io/js/%40prayerslayer%2Fprettyprint)

JSON.stringify with support for non-JSON values (like Symbols)

# Installation

    npm install @prayerslayer/prettyprint

# Usage

ES5:

~~~ javascript
var pretty = require('@prayerslayer/prettyprint')
console.log(pretty({foo: Symbol()}))
/*
{
  "foo": Symbol()
}
*/
~~~

ES6:

~~~ javascript
import pretty from '@prayerslayer/prettyprint'
console.log(pretty({foo: Symbol()}))
/*
{
  "foo": Symbol()
}
*/
~~~

# License

MIT, see [LICENSE](LICENSE)
