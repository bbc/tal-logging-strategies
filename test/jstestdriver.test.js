/* eslint-env jest */

const { jsTestDriver } = require('../lib/tal-logging-strategies')

test('jsTestDriver', () => {
  window.jstestdriver = {
    console: {
      log: jest.fn()
    }
  }

  jsTestDriver.log('Example')

  expect(jstestdriver.console.log).toHaveBeenCalledWith('Example')
})
