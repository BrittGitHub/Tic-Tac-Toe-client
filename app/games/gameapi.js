
'use strict'

const store = require('../store.js')
const config = require('../config.js')

const newGame = function (data) {
  console.log(store)

  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}

const gameSquareClicked = function (data) {
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
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  newGame,
  gameSquareClicked
}
