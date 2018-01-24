/* eslint-env jest */

const LoggingStrategies = require('../lib/tal-logging-strategies')

const buildConfig = (modifiers = []) => {
  return {
    modules: {
      modifiers: [].concat(modifiers)
    }
  }
}

describe('getStrategyForConfig', () => {
  it('should return the `alert` strategy as expected', () => {
    const config = buildConfig('antie/devices/logging/alert')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.alert)
  })

  it('should return the `console` strategy as expected', () => {
    const config = buildConfig('antie/devices/logging/default')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.console)
  })

  it('should return the `noop` strategy as expected', () => {
    const config = buildConfig('antie/devices/logging/consumelog')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.noop)
  })

  it('should return the `noop` strategy as expected', () => {
    const config = buildConfig('antie/devices/logging/saving')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.noop)
  })

  it('should return the `jstestdriver` strategy as expected', () => {
    const config = buildConfig('antie/devices/logging/jstestdriver')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.jsTestDriver)
  })

  it('should return the `onscreen` strategy as expected', () => {
    const config = buildConfig('antie/devices/logging/onscreen')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.onScreen)
  })

  it('should return the `xhr` strategy as expected', () => {
    const config = buildConfig('antie/devices/logging/xhr')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.xhr)
  })
})
