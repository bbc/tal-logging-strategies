var alertStrategy = require('./alert')
var noopStrategy = require('./noop')
var consoleStrategy = require('./console')
var jsTestDriverStategy = require('./jstestdriver')
var onScreenStrategy = require('./onscreen')
var xhrStrategy = require('./xhr')

var MAP = {
  'antie/devices/logging/alert': alertStrategy,
  'antie/devices/logging/consumelog': noopStrategy,
  'antie/devices/logging/saving': noopStrategy,
  'antie/devices/logging/default': consoleStrategy,
  'antie/devices/logging/jstestdriver': jsTestDriverStategy,
  'antie/devices/logging/onscreen': onScreenStrategy,
  'antie/devices/logging/xhr': xhrStrategy
}

function filterLoggingMethods (strategy, level) {
  var funcs = {
    log: strategy.log,
    error: noopStrategy.error,
    warn: noopStrategy.warn,
    info: noopStrategy.info,
    debug: noopStrategy.debug
  }

  switch (level) {
    case 'all':
    case 'debug':
      funcs.error = strategy.error
      funcs.warn = strategy.warn
      funcs.info = strategy.info
      funcs.debug = strategy.debug
      break
    case 'info':
      funcs.error = strategy.error
      funcs.warn = strategy.warn
      funcs.info = strategy.info
      break
    case 'warn':
      funcs.error = strategy.error
      funcs.warn = strategy.warn
      break
    case 'error':
      funcs.error = strategy.error
      break
    default:
      funcs.log = noopStrategy.log
  }

  return funcs
}

function getStrategyForConfig (config, options) {
  var logging = config.logging || {}

  var strategy = MAP['antie/devices/logging/' + logging.strategy] || consoleStrategy
  return filterLoggingMethods(strategy, logging.level)
}

module.exports = {
  getStrategyForConfig: getStrategyForConfig,
  alert: alertStrategy,
  noop: noopStrategy,
  console: consoleStrategy,
  jsTestDriver: jsTestDriverStategy,
  onScreen: onScreenStrategy,
  xhr: xhrStrategy
}
