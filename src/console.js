function log () {
  console.log('[LOG]', Array.prototype.join.call(arguments, '\n'))
}

function debug () {
  console.log('[DEBUG]', Array.prototype.join.call(arguments, '\n'))
}

function info () {
  console.log('[INFO]', Array.prototype.join.call(arguments, '\n'))
}

function warn () {
  console.log('[WARN]', Array.prototype.join.call(arguments, '\n'))
}

function error () {
  console.log('[ERROR]', Array.prototype.join.call(arguments, '\n'))
}

module.exports = {
  log: log,
  debug: debug,
  info: info,
  warn: warn,
  error: error
}
