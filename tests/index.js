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
