class Frame {
  constructor() {
    this.rolls = 0;
    this.frameScore = 0;
    this.scores = [];
    this.isLast = false;
  }
  roll(pins) {
    this.rolls++;
    this.frameScore += pins;
    this.scores.push(pins);
  }

  setIsLast() {
    this.isLast = true;
  }

  getFrameScore() {
    return this.frameScore;
  }

  getNextFrame() {
    return this.nextFrame;
  }

  getFinalFrameScore() {
    if (this.isLast) {
      return this.frameScore;
    } else if (this.isSpare()) {
      return this.frameScore + this.nextFrame.getIndividualRollScores[0];
    } else if (this.isStrike()) {
      let currentScore = this.frameScore + this.nextFrame.getFrameScore();
      if (this.nextFrame.isStrike()) {
        currentScore += this.nextFrame.getNextFrame()
          .getIndividualRollScores[0];
      }
      return currentScore;
    }
  }

  getIndividualRollScores() {
    return this.scores;
  }

  addNextFrame(frame) {
    this.nextFrame(frame);
  }

  isComplete() {
    if (!this.isLast) {
      if (this.frameScore === 10 && this.rolls === 1) return true;
      else return this.rolls === 2;
    } else {
      if (this.scores[0] === 10 && this.rolls === 3) return true;
      else if (this.scores[0] + this.scores[1] === 10 && this.rolls === 3)
        return true;
      else return this.rolls === 2;
    }
  }

  isSpare() {
    return this.scores.length === 2 && this.scores[0] + this.scores[1] === 10;
  }

  isStrike() {
    return this.scores.length === 1 && this.scores[0] === 10;
  }
}

module.exports = Frame;
