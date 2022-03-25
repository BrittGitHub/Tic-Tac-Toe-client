'use strict'

const store = require('../store.js')

const squareOne = function () {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  squareOne
}
