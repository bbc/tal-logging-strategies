/* eslint-env jest */

const { alert } = require('../src')

test('alert', () => {
  window.alert = jest.fn()

  alert.log('Example')

  expect(window.alert).toHaveBeenCalledWith('[LOG] Example')
})
