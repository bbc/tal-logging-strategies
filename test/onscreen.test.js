/* eslint-env jest */

const { onScreen } = require('../src')

describe('onScreen', () => {
  const originalCreateElement = document.createElement

  beforeEach(() => {
    document.createElement = originalCreateElement
  })

  test('creates a div container with text contents', () => {
    const div = document.createElement('div')

    const mock = jest.fn()
    mock.mockReturnValueOnce(div)
    document.createElement = mock

    onScreen.log('Example')

    expect(document.createElement).toHaveBeenCalledWith('div')
    expect(div.innerHTML).toEqual('[LOG] Example<hr>')
  })

  test('appends to an existing container', () => {
    const div = document.createElement('div')
    div.id = 'onScreenLogging'
    div.innerHTML = '[LOG] Example<hr>'
    document.body.appendChild(div)

    onScreen.log('Another Example')

    expect(document.getElementById('onScreenLogging').innerHTML).toEqual('[LOG] Another Example<hr>[LOG] Example<hr>')
  })
})
