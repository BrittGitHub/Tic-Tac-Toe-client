'use strict'

const store = require('../store.js')

const onNewGameSuccess = function (response) {
  let boardHtml = `
        <div class="container">
        <div class="row">
          <div class="col-4 col-lg-4 box alt-color" data-index-number="0"></div>
          <div class="col-4 col-lg-4 box alt-color" data-index-number="1"></div>
          <div class="col-4 col-lg-4 box alt-color" data-index-number="2"></div>
          <div class="col-4 col-lg-4 box alt-color" data-index-number="3"></div>
          <div class="col-4 col-lg-4 box alt-color" data-index-number="4"></div>
          <div class="col-4 col-lg-4 box alt-color" data-index-number="5"></div>
          <div class="col-4 col-lg-4 box alt-color" data-index-number="6"></div>
          <div class="col-4 col-lg-4 box alt-color" data-index-number="7"></div>
          <div class="col-4 col-lg-4 box alt-color" data-index-number="8"></div>
        </div>
      </div>
  `
  $('#game-display').html(boardHtml)
}

const onNewGameFailure = function () {
  $('#error-message').html('<p>Error while starting new game</p>')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
