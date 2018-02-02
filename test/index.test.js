/* eslint-env jest */

const LoggingStrategies = require('../src')

const buildConfig = (strategy, level = 'all') => {
  return {
    logging: {
      strategy,
      level
    }
  }
}

describe('getStrategyForConfig', () => {
  it('should return the `alert` strategy as expected', () => {
    const config = buildConfig('alert')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.alert)
  })

  it('should return the `console` strategy as expected', () => {
    const config = buildConfig('default')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.console)
  })

  it('should return the `noop` strategy as expected', () => {
    const config = buildConfig('consumelog')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.noop)
  })

  it('should return the `noop` strategy as expected', () => {
    const config = buildConfig('saving')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.noop)
  })

  it('should return the `jstestdriver` strategy as expected', () => {
    const config = buildConfig('jstestdriver')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.jsTestDriver)
  })

  it('should return the `onscreen` strategy as expected', () => {
    const config = buildConfig('onscreen')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.onScreen)
  })

  it('should return the `xhr` strategy as expected', () => {
    const config = buildConfig('xhr')
    const strategy = LoggingStrategies.getStrategyForConfig(config)

    expect(strategy).toEqual(LoggingStrategies.xhr)
  })

  describe('log levels', () => {
    describe('when set to all', () => {
      it('should enable all the log level functions', () => {
        const config = buildConfig('default', 'all')
        const strategy = LoggingStrategies.getStrategyForConfig(config)

        expect(strategy.log).toEqual(LoggingStrategies.console.log)
        expect(strategy.error).toEqual(LoggingStrategies.console.error)
        expect(strategy.warn).toEqual(LoggingStrategies.console.warn)
        expect(strategy.info).toEqual(LoggingStrategies.console.info)
        expect(strategy.debug).toEqual(LoggingStrategies.console.debug)
      })
    })

    describe('when set to debug', () => {
      it('should enable all the log level functions', () => {
        const config = buildConfig('default', 'debug')
        const strategy = LoggingStrategies.getStrategyForConfig(config)

        expect(strategy.log).toEqual(LoggingStrategies.console.log)
        expect(strategy.error).toEqual(LoggingStrategies.console.error)
        expect(strategy.warn).toEqual(LoggingStrategies.console.warn)
        expect(strategy.info).toEqual(LoggingStrategies.console.info)
        expect(strategy.debug).toEqual(LoggingStrategies.console.debug)
      })
    })

    describe('when set to info', () => {
      it('should enable all the log level functions except debug', () => {
        const config = buildConfig('default', 'info')
        const strategy = LoggingStrategies.getStrategyForConfig(config)

        expect(strategy.log).toEqual(LoggingStrategies.console.log)
        expect(strategy.error).toEqual(LoggingStrategies.console.error)
        expect(strategy.warn).toEqual(LoggingStrategies.console.warn)
        expect(strategy.info).toEqual(LoggingStrategies.console.info)

        expect(strategy.debug).toEqual(LoggingStrategies.noop.debug)
      })
    })

    describe('when set to warn', () => {
      it('should enable all the log level functions except debug and info', () => {
        const config = buildConfig('default', 'warn')
        const strategy = LoggingStrategies.getStrategyForConfig(config)

        expect(strategy.log).toEqual(LoggingStrategies.console.log)
        expect(strategy.error).toEqual(LoggingStrategies.console.error)
        expect(strategy.warn).toEqual(LoggingStrategies.console.warn)

        expect(strategy.info).toEqual(LoggingStrategies.noop.info)
        expect(strategy.debug).toEqual(LoggingStrategies.noop.debug)
      })
    })

    describe('when set to error', () => {
      it('should enable log and error log functions and disable debug, info, and warn', () => {
        const config = buildConfig('default', 'error')
        const strategy = LoggingStrategies.getStrategyForConfig(config)

        expect(strategy.log).toEqual(LoggingStrategies.console.log)
        expect(strategy.error).toEqual(LoggingStrategies.console.error)

        expect(strategy.warn).toEqual(LoggingStrategies.noop.warn)
        expect(strategy.info).toEqual(LoggingStrategies.noop.info)
        expect(strategy.debug).toEqual(LoggingStrategies.noop.debug)
      })
    })

    describe('when set to an unknown level', () => {
      it('should disable all log functions', () => {
        const config = buildConfig('default', 'unknown-level')
        const strategy = LoggingStrategies.getStrategyForConfig(config)

        expect(strategy.log).toEqual(LoggingStrategies.noop.log)
        expect(strategy.error).toEqual(LoggingStrategies.noop.error)
        expect(strategy.warn).toEqual(LoggingStrategies.noop.warn)
        expect(strategy.info).toEqual(LoggingStrategies.noop.info)
        expect(strategy.debug).toEqual(LoggingStrategies.noop.debug)
      })
    })
  })
})
