'use strict'

const gameUi = require('./gameui.js')
const gameApi = require('./gameapi.js')
const store = require('../store.js')
// const store = require('../store.js')

const onNewGame = (event) => {
  gameApi
    .newGame()
    .then((response) => gameUi.onNewGameSuccess(response))
    .catch(() => gameUi.onNewGameFailure())
}

// const gameBoard = {
//   game: {
//     cells: ['', '', '', '', '', '', '', '', ''],
//     over: false,
//     _id: '6241d85f61669d001751a679',
//     owner: '623ce4e9646429001718d9f2',
//     createdAt: '2022-03-28T15:46:39.742Z',
//     updatedAt: '2022-03-28T15:46:39.742Z',
//     __v: 0
//   }
// }

const gameBoard = {
  game: {
    cell: {
      index: 0,
      value: ''
    },
    over: false
  }
}

let currentPlayer = 'X'

const over = false

const onSquareClicked = function (event) {
  const cellIndex = this.getAttribute('data-cell-index')

  const gameCellsArray = store.game.cells

  if ($(this).is(':empty')) {
    // add x or o in HTML to each square
    $(this).html(currentPlayer)
    // add the x or o to the value
    gameBoard.game.cell.value = currentPlayer
    // store the x or in the store
    gameCellsArray[cellIndex] = currentPlayer
    // store the index in the index of the gameBoard
    gameBoard.game.cell.index = cellIndex
    // switch players
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    };
  }
  console.log(gameCellsArray)

  

  // if value(x or o) in index 0,1,2 are the same then someone won

  // over = gameBoard.game.cell.index[0] && gameBoard.game.cell.index[0] === gameBoard.game.cell.index[1] && gameBoard.game.cell.index[0] === gameBoard.game.cell.index[2] ? console.log('true') : console.log('false')

  // console.log(gameBoard)
  gameApi
    .gameSquareClicked(gameBoard)
    .then((response) => gameUi.onSquareClickedSuccess(response))
    // .catch(() => gameUi.onSquareClickedFailure())
}

module.exports = {
  onNewGame,
  onSquareClicked
}
