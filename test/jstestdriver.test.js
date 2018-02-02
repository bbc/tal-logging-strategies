/* eslint-env jest */

const { jsTestDriver } = require('../src')

test('jsTestDriver', () => {
  window.jstestdriver = {
    console: {
      log: jest.fn()
    }
  }

  jsTestDriver.log('Example')

  expect(window.jstestdriver.console.log).toHaveBeenCalledWith('Example')
})
