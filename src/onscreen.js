function getContainer () {
  return document.getElementById('onScreenLogging')
}

function createContainer () {
  var div = document.createElement('div')

  div.id = 'onScreenLogging'
  div.style.zIndex = 9999999
  div.style.position = 'absolute'
  div.style.top = 0
  div.style.left = 0
  div.style.padding = '20px'
  div.style.color = '#000000'
  div.style.lineHeight = '12px'
  div.style.fontSize = '12px'

  // Set a non-rgba colour first in case they're not supported
  div.style.backgroundColor = '#d8d8d8'
  div.style.backgroundColor = 'rgba(216,216,216,0.8)'

  document.body.appendChild(div)

  return div
}

function prependItem (text) {
  var container = getContainer() || createContainer()
  container.innerHTML = text + '<hr />' + container.innerHTML
}

function log () {
  prependItem('[LOG] ' + Array.prototype.join.call(arguments, ', '))
}

function debug () {
  prependItem('[DEBUG] ' + Array.prototype.join.call(arguments, ', '))
}

function info () {
  prependItem('[INFO] ' + Array.prototype.join.call(arguments, ', '))
}

function warn () {
  prependItem('[WARN] ' + Array.prototype.join.call(arguments, ', '))
}

function error () {
  prependItem('[ERROR] ' + Array.prototype.join.call(arguments, ', '))
}

module.exports = {
  log: log,
  debug: debug,
  info: info,
  warn: warn,
  error: error
}
