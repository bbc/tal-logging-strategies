/* global jstestdriver */

function log () {
  jstestdriver.console.log(Array.prototype.join.call(arguments, '\n'))
}

function debug () {
  jstestdriver.console.debug(Array.prototype.join.call(arguments, '\n'))
}

function info () {
  jstestdriver.console.info(Array.prototype.join.call(arguments, '\n'))
}

function warn () {
  jstestdriver.console.warn(Array.prototype.join.call(arguments, '\n'))
}

function error () {
  jstestdriver.console.error(Array.prototype.join.call(arguments, '\n'))
}

module.exports = {
  log: log,
  debug: debug,
  info: info,
  warn: warn,
  error: error
}
