/* eslint-env jest */

const { console } = require('../src')

test('console', () => {
  window.console.log = jest.fn()

  console.log('Example')

  expect(window.console.log).toHaveBeenCalledWith('[LOG]', 'Example')
})
