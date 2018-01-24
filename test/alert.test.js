/* eslint-env jest */

const { alert } = require('../lib/tal-logging-strategies')

test('alert', () => {
  window.alert = jest.fn()

  alert.log('Example')

  expect(window.alert).toHaveBeenCalledWith('[LOG] Example')
})
