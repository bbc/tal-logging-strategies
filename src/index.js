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

function getStrategyForConfig (deviceConfig, options) {
  options = options || {}

  var modifiers = deviceConfig.modules.modifiers
  var loggingModifiers = modifiers.filter(function (m) { return m.match(/logging\//) })

  return MAP[loggingModifiers]
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
