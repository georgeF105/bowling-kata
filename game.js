module.exports = {
  scoreFrame: scoreFrame,
  isSpare: isSpare,
  isStrike: isStrike,
  scoreGame: scoreGame
}

function scoreFrame (frame1, frame2, frame3) {
  var score = frame1[0] + frame1[1]
  //if spare
  if(isSpare(frame1)){
    score += frame2[0]
  }
  //if single strike
  if(isStrike(frame1) && !isStrike(frame2)){
    score += frame2[0] + frame2[1]
  }
  //if double strike
  if(isStrike(frame1) && isStrike(frame2)){
    score += frame2[0] + frame3[0]
  }
  return score
}

function isSpare(frame){
  var score = frame[0] + frame[1]
  return score === 10 && frame[0] !== 10
}

function isStrike(frame){
  return frame[0] === 10
}

function scoreGame(game){
  var count = 0
  for (var i = 0; i <10; i++){
    count += scoreFrame(game[i], game[i +1], game[i +2])
    console.log(count)
  }
  return count
}
