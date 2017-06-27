# url-parse-auth [![Build Status](https://travis-ci.org/ajoslin/url-parse-password.svg?branch=master)](https://travis-ci.org/ajoslin/url-parse-password)

> Parse the password and user out of a url. Do in one step what would take two steps and a string.split with `require('url')`.


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

Both `user` and `password` will be undefined if the url has no auth section.


## License

MIT © [Andrew Joslin](http://ajoslin.com)
