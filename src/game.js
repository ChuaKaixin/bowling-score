const Frame = require("./frame");
class Game {
  constructor() {
    this.frames = [];
    this.currentFrame = new Frame();
  }
  roll(pins) {
    this.currentFrame.roll(pins);
    if (this.currentFrame.isComplete()) {
      const nextFrame = new Frame();
      this.currentFrame.addNextFrame(nextFrame);
      this.frames.push(this.currentFrame);
      this.currentFrame = nextFrame;
    }
  }
  score() {
    let totalScore = 0;
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      totalScore += this.frames[frameIndex].getFinalFrameScore();
    }
    return totalScore;
  }
}

module.exports = Game;
