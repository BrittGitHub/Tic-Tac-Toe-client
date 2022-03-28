
'use strict'

const store = require('../store.js')

const newGame = function (data) {
  console.log(store)

  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}

const gameSquareClicked = function () {
  /*
      data = {
          game: {
              cell {
                index: 0,
                value: "x"
              },
          over: false
          }
      }
  */
  // console.log(store)
  // return $.ajax({
  //   method: 'PATCH',
  //   url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
  //   headers: {
  //     Authorization: 'Bearer ' + store.user.token
  //   }
  // })
}

module.exports = {
  newGame,
  gameSquareClicked
}
