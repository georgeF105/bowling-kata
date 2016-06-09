var bowlingGame = require('./game')
var domready = require('domready')

domready(playGame)

function playGame() {
  // get score
  // var input = prompt("something")
  var score = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  console.log("score is:")
  console.log(score)

  var gameBoard = initialRender(score, '#root')
  document.getElementsByTagName('body')[0].appendChild(gameBoard)
  // score game

  // output score
}

function initialRender (board, rootSelector) {
  var root = document.querySelector(rootSelector)
  var table = document.createElement('table')

  for (var i=0; i<board.length; i++){
    var row = document.createElement('tr')
    for (var j=0; j<board[i].length; j++){
      var cell = document.createElement('td')
      var fillCell = document.createTextNode(board[i][j])
      cell.appendChild(fillCell)
      row.appendChild(cell)
    }
    table.appendChild(row)
  }

  console.log(table)
  return table
}


