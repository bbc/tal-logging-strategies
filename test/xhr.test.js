/* eslint-env jest */

const { xhr } = require('../src')

describe('xhr', () => {
  test('makes a POST', () => {
    const open = jest.fn()
    const setRequestHeader = jest.fn()
    const send = jest.fn()

    const mock = jest.fn(() => ({ open, setRequestHeader, send }))

    window.XMLHttpRequest = mock

    xhr.log('Example')

    expect(open).toHaveBeenCalledWith('POST', '/log', true)
    expect(setRequestHeader).toHaveBeenCalledWith('Content-type', 'application/json; charset=utf-8')
    expect(send).toHaveBeenCalledWith(JSON.stringify({ level: 'log', body: 'Example' }))
  })
})
