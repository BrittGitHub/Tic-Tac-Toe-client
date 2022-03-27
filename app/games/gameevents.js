'use strict'

const gameUi = require('./gameui.js')
const gameApi = require('./gameapi.js')


const onNewGame = (event) => {
  // prevent the page from reloading due to the submit action

  // store the element that emitted the event in a variable
  // const form = event.target
  // pass the form to getFormFields and store the data object in another variable
  // const data = getFormFields(form)
  // console.log(data)

  gameApi
    .newGame()
    .then(() => gameUi.onNewGameSuccess())
    .catch(() => gameUi.onNewGameFailure())
}
module.exports = {
  onNewGame
}
