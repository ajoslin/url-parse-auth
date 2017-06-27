'use strict'

var url = require('url')

module.exports = function (s) {
  var result = url.parse(s || '')
  if (!result.auth) {
    return {
      user: undefined,
      password: undefined
    }
  }
  var split = result.auth.split(':')
  return {
    user: split[0],
    password: split[1] || ''
  }
}
