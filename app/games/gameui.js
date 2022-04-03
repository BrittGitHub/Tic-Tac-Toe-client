'use strict'

const store = require('../store.js')

const onNewGameSuccess = function (response) {
  let boardHtml = `
        <div class="container">
        <div class="row">
          <div class="col-4 col-lg-4 box alt-color" data-cell-index=0></div>
          <div class="col-4 col-lg-4 box alt-color" data-cell-index=1></div>
          <div class="col-4 col-lg-4 box alt-color" data-cell-index=2></div>
          <div class="col-4 col-lg-4 box alt-color" data-cell-index=3></div>
          <div class="col-4 col-lg-4 box alt-color" data-cell-index=4></div>
          <div class="col-4 col-lg-4 box alt-color" data-cell-index=5></div>
          <div class="col-4 col-lg-4 box alt-color" data-cell-index=6></div>
          <div class="col-4 col-lg-4 box alt-color" data-cell-index=7></div>
          <div class="col-4 col-lg-4 box alt-color" data-cell-index=8></div>
        </div>
      </div>
  `
  $('#game-display').html(boardHtml)

  $('#game-display').show()

  store.game = response.game
}

const onNewGameFailure = function () {
  $('#error-message').html('<p>Error while starting new game</p>')
}

const onSquareClickedSuccess = function (response) {
  // $('#board-display').html('<p>square clicked successfully</p>')
  store.game = response.game
}

// const onSquareClickedFailure = function () {
//   $('#board-display').html('<p>Error while clicking square one</p>')
// }

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onSquareClickedSuccess
  // onSquareClickedFailure
}
