/* global XMLHttpRequest */

function xhrPost (payload) {
  var http = new XMLHttpRequest()
  http.open('POST', '/log', true)
  http.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  http.send(JSON.stringify(payload))
}

function log () {
  xhrPost({
    level: 'log',
    body: Array.prototype.join.call(arguments, '\n')
  })
}

function debug () {
  xhrPost({
    level: 'debug',
    body: Array.prototype.join.call(arguments, '\n')
  })
}

function info () {
  xhrPost({
    level: 'info',
    body: Array.prototype.join.call(arguments, '\n')
  })
}

function warn () {
  xhrPost({
    level: 'warn',
    body: Array.prototype.join.call(arguments, '\n')
  })
}

function error () {
  xhrPost({
    level: 'error',
    body: Array.prototype.join.call(arguments, '\n')
  })
}

module.exports = {
  log: log,
  debug: debug,
  info: info,
  warn: warn,
  error: error
}
