'use strict'

const gameUi = require('./gameui.js')
const gameApi = require('./gameapi.js')

const onNewGame = (event) => {
  gameApi
    .newGame()
    .then((response) => gameUi.onNewGameSuccess(response))
    .catch(() => gameUi.onNewGameFailure())
}

const gameBoard = [null, null, null, null, null, null, null, null, null]

// maybe want to use the newGame that was saved in gameui.js??

const playerX = true

let isGameOver = false

const onSquareClicked = function (event) {
  // when user clicks on a space first check that the space is empty
  // if they chose an empty space,add their token to board and game cells array

  const cellIndex = this.getAttribute('data-cell-index')

  console.log(cellIndex)
  console.log(gameBoard)

  // gameApi
  //   .gameSquareClicked()
  //   .then(() => gameUi.onSquareClickedSuccess())
  //   .catch(() => gameUi.onSquareClickedFailure())
}

module.exports = {
  onNewGame,
  onSquareClicked
}
