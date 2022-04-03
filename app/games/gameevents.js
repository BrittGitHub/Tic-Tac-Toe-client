'use strict'

const gameUi = require('./gameui.js')
const gameApi = require('./gameapi.js')
const store = require('../store.js')

let currentPlayer = 'X'

const gameBoard = {
  game: {
    cell: {
      index: 0,
      value: ''
    },
    over: false
  }
}

const onNewGame = (event) => {
  $('#board-display').hide()

  currentPlayer = 'X'

  gameBoard.game.over = false

  gameApi
    .newGame()
    .then((response) => gameUi.onNewGameSuccess(response))
    .catch(() => gameUi.onNewGameFailure())
}

const onSquareClicked = function (event) {
  const cellIndex = this.getAttribute('data-cell-index')

  const gameCellsArray = store.game.cells

  if (gameBoard.game.over === false) {
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

      const c0 = gameCellsArray[0]
      const c1 = gameCellsArray[1]
      const c2 = gameCellsArray[2]
      const c3 = gameCellsArray[3]
      const c4 = gameCellsArray[4]
      const c5 = gameCellsArray[5]
      const c6 = gameCellsArray[6]
      const c7 = gameCellsArray[7]
      const c8 = gameCellsArray[8]

      console.log(gameCellsArray)

      if ((c0 === 'X' && c1 === 'X' && c2 === 'X') ||
    (c3 === 'X' && c4 === 'X' && c5 === 'X') ||
    (c6 === 'X' && c7 === 'X' && c8 === 'X') ||
    (c0 === 'X' && c3 === 'X' && c6 === 'X') ||
    (c1 === 'X' && c4 === 'X' && c7 === 'X') ||
    (c2 === 'X' && c5 === 'X' && c8 === 'X') ||
    (c0 === 'X' && c4 === 'X' && c8 === 'X') ||
    (c2 === 'X' && c4 === 'X' && c6 === 'X')) {
        console.log('Player X Won!')
        $('#board-display').html('<p>Player X Won!</p>')
        $('#board-display').show()
        gameBoard.game.over = true
      } else if ((c0 === 'O' && c1 === 'O' && c2 === 'O') ||
    (c3 === 'O' && c4 === 'O' && c5 === 'O') ||
    (c6 === 'O' && c7 === 'O' && c8 === 'O') ||
    (c0 === 'O' && c3 === 'O' && c6 === 'O') ||
    (c1 === 'O' && c4 === 'O' && c7 === 'O') ||
    (c2 === 'O' && c5 === 'O' && c8 === 'O') ||
    (c0 === 'O' && c4 === 'O' && c8 === 'O') ||
    (c2 === 'O' && c4 === 'O' && c6 === 'O')) {
        console.log('Player 0 Won!')
        $('#board-display').html('<p>Player O Won!</p>')
        $('#board-display').show()
        gameBoard.game.over = true
      } else if ((c0 === 'X' || c0 === 'O') && (c1 === 'X' || c1 === 'O') &&
    (c2 === 'X' || c2 === 'O') && (c3 === 'X' || c3 === 'O') &&
    (c4 === 'X' || c4 === 'O') && (c5 === 'X' || c5 === 'O') &&
    (c6 === 'X' || c6 === 'O') && (c7 === 'X' || c7 === 'O') &&
    (c8 === 'X' || c8 === 'O')) {
        console.log('Tied!')
        $('#board-display').html('<p>It\'s a Tie!</p>')
        $('#board-display').show()
        gameBoard.game.over = true
      } else {
      // do nothing
      }
    }
  }

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
