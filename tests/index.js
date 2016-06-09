var test = require('tape')
var game = require('../game')

test('test setup working', function(t) {
  t.equal(1, 1)
  t.end()
})

test('scores a gutterball frame', function(t) {
  var frame = [0, 0]
  var score = game.scoreFrame(frame)
  t.equals(score, 0)
  t.end()
})

test('scores a normal frame', function(t) {
  var frame = [2, 3]
  var score = game.scoreFrame(frame)
  t.equals(score, 5)
  t.end()
})

test('scores a spare frame', function(t) {
  var frame1 = [7, 3]
  var frame2 = [1, 2]
  var score = game.scoreFrame(frame1, frame2)

  t.equals(score, 11)
  t.end()
})

test('scores a single strike frame', function(t) {
  var frame1 = [10, 0]
  var frame2 = [1, 2]
  var score = game.scoreFrame(frame1, frame2)

  t.equals(score, 13)
  t.end()
})

test('scores a double strike frame', function(t) {
  var frame1 = [10, 0]
  var frame2 = [10, 0]
  var frame3 = [1, 2]
  var score = game.scoreFrame(frame1, frame2, frame3)

  t.equals(score, 21)
  t.end()
})

test('is the frame a spare', function(t) {
  //arange
  var spareFrame = [3, 7]
  var notSpareFrame = [3, 6]

  // act
  var spare = game.isSpare(spareFrame)
  var notSpare = game.isSpare(notSpareFrame)

  //assert
  t.equals(spare, true)
  t.equals(notSpare, false)
  t.end()
})

test('is the frame a stike', function(t) {
  var frame1 = [10, 0]
  var frame2 = [7, 2]

  var strike = game.isStrike(frame1)
  var notStrike = game.isStrike(frame2)

  t.equals(strike, true)
  t.equals(notStrike, false)

  t.end()
})

test('scores a game', function(t) {
  var gameFrames1 = [[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]]
  var gameFrames2 = [[10,0],[7,3],[7,2],[9,1],[10,0],[10,0],[10,0],[2,3],[6,4],[7,2]]

  var score1 = game.scoreGame(gameFrames1)
  var score2 = game.scoreGame(gameFrames2)

  t.equals(score1, 10)
  t.equals(score2, 164)

  t.end()
})


