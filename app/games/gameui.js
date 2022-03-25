'use strict'

const store = require('../store.js')

const onNewGameSuccess = function (response) {
  $('#game-display').html('<p>New Game!</p>')
}

const onNewGameFailure = function () {
  $('#error-message').html('<p>Error while starting new game</p>')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
