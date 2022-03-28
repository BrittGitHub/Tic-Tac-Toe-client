'use strict'

const gameUi = require('./gameui.js')
const gameApi = require('./gameapi.js')

const onNewGame = (event) => {
  gameApi
    .newGame()
    .then((response) => gameUi.onNewGameSuccess(response))
    .catch(() => gameUi.onNewGameFailure())
}

const gameBoard = {
  game: {
    cells: ['', '', '', '', '', '', '', '', ''],
    over: false,
    _id: '6241d85f61669d001751a679',
    owner: '623ce4e9646429001718d9f2',
    createdAt: '2022-03-28T15:46:39.742Z',
    updatedAt: '2022-03-28T15:46:39.742Z',
    __v: 0
  }
}

// maybe want to use the newGame that was saved in gameui.js??

let currentPlayer = 'X'

const over = false

const onSquareClicked = function (event) {
  // when user clicks on a space first check that the space is empty
  // if they chose an empty space,add their token to board and game cells array
  const cellIndex = this.getAttribute('data-cell-index')

  if ($(this).is(':empty')) {
    // console.log('I guess this is empty')
    $(this).html(currentPlayer)
    // store the x or o in the cells of the gameboard
    gameBoard.game.cells[cellIndex] = currentPlayer

    // switch players
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    };
  } /* else {
    console.log('this is not empty')
  } */
  

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
