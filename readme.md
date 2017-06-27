# url-parse-auth [![Build Status](https://travis-ci.org/ajoslin/url-parse-password.svg?branch=master)](https://travis-ci.org/ajoslin/url-parse-password)

> Parse the password and username out of a url. Do what takes two steps and a string.split with `require('url')`.


## Install

```
$ npm install --save url-parse-auth
```


## Usage

```js
var urlParseAuth = require('url-parse-auth')

urlParseAuth('https://user:pass@baz.com')
//=> {user: 'user', pass: 'pass'}
```

## API

#### `urlParsePassword(url)` -> `{user, password}`

## License

MIT © [Andrew Joslin](http://ajoslin.com)
