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

