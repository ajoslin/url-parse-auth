'use strict'

var test = require('tape')
var parse = require('./')

test(function (t) {
  t.deepEqual(parse('https://foo:bar@baz.com'), {
    user: 'foo',
    password: 'bar'
  })
  t.deepEqual(parse('https://:bar@baz.com'), {
    user: '',
    password: 'bar'
  })
  t.deepEqual(parse('https://baz.com'), {
    user: undefined,
    password: undefined
  })
  t.deepEqual(parse(''), {
    user: undefined,
    password: undefined
  })
  t.end()
})
