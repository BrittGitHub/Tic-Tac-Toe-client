
'use strict'

const store = require('../store.js')

const newGame = function (data) {
  console.log(store)
  /*
        data = {
            book: {
                id: 'abc',
                title: 'a title',
                author: 'an author'
            }
        }
    */
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}

module.exports = {
  newGame
}
