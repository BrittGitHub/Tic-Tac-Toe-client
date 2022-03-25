'use strict'

const store = require('../store.js')

const onSquareOneSuccess = function () {
  $('#board-display').html('<p>square one clicked successfully</p>')
}

const onSquareOneFailure = function () {
  $('#board-display').html('<p>Error while clicking square one</p>')
}

module.exports = {
  onSquareOneSuccess,
  onSquareOneFailure
}
