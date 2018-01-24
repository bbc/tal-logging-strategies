import alert from './alert'
import noop from './noop'
import console from './console'
import jsTestDriver from './jstestdriver'
import onScreen from './onscreen'
import xhr from './xhr'

var MAP = {
  'antie/devices/logging/alert': alert,
  'antie/devices/logging/consumelog': noop,
  'antie/devices/logging/saving': noop,
  'antie/devices/logging/default': console,
  'antie/devices/logging/jstestdriver': jsTestDriver,
  'antie/devices/logging/onscreen': onScreen,
  'antie/devices/logging/xhr': xhr
}

function filterLoggingMethods (strategy, level) {
  var funcs = {
    log: strategy.log,
    error: noop.error,
    warn: noop.warn,
    info: noop.info,
    debug: noop.debug
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
      funcs.log = noop.log
  }

  return funcs
}

function getStrategyForConfig (config, options) {
  var logging = config.logging || {}

  var strategy = MAP['antie/devices/logging/' + logging.strategy] || console
  return filterLoggingMethods(strategy, logging.level)
}

export default {
  getStrategyForConfig: getStrategyForConfig,
  alert: alert,
  noop: noop,
  console: console,
  jsTestDriver: jsTestDriver,
  onScreen: onScreen,
  xhr: xhr
}
