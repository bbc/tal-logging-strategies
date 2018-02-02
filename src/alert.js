function log () {
  window.alert('[LOG] ' + Array.prototype.join.call(arguments, '\n'))
}

function debug () {
  window.alert('[DEBUG] ' + Array.prototype.join.call(arguments, '\n'))
}

function info () {
  window.alert('[INFO] ' + Array.prototype.join.call(arguments, '\n'))
}

function warn () {
  window.alert('[WARN] ' + Array.prototype.join.call(arguments, '\n'))
}

function error () {
  window.alert('[ERROR] ' + Array.prototype.join.call(arguments, '\n'))
}

module.exports = {
  log: log,
  debug: debug,
  info: info,
  warn: warn,
  error: error
}
