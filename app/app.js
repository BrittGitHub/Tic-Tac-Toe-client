const authEvents = require('./auth/events.js')

const gameEvents = require('./games/gameevents.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('.cpHeader').hide()
  $('#change-password-form').hide()
  $('.soHeader').hide()
  $('#sign-out-button').hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#new-game').on('click', '#game', gameEvents.onNewGame)
  $('#game-display').on('click', '.box', gameEvents.onSquareClicked)
})
