'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#new-game').html('<button id="game">New Game</button>')

  $('#new-game').show()

  $('#auth-display').html('<p>User signed in successfully</p>')

  $('.siHeader').hide()
  $('#sign-in-form').hide()
  $('.suHeader').hide()
  $('#sign-up-form').hide()

  $('.cpHeader').show()
  $('#change-password-form').show()
  $('#sign-out-button').show()

  // reset all forms
  $('form').trigger('reset')

  console.log(response)
  // store data from the response in my store object
  store.user = response.user

  // reset single form
  // $('#sign-in-form').trigger('reset')
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>User changed password successfully</p>')

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')

  resetAfterSignOut()
}

const resetAfterSignOut = function () {
  $('.cpHeader').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#new-game').hide()
  $('#game-display').hide()

  $('.siHeader').show()
  $('#sign-in-form').show()
  $('.suHeader').show()
  $('#sign-up-form').show()
  //window.location.reload()
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
