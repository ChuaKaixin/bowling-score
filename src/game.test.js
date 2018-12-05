const Game = require("./game");

test("20 rolls each with 0 score will have final score of 0", () => {
  const game = new Game();
  rollManyTimes(20, 0, game);
  expect(game.score()).toBe(0);
});

test("1 strike followed by 1 score will have final score of 12", () => {
  const game = new Game();
  game.roll(10);
  game.roll(1);
  rollManyTimes(17, 0, game);
  expect(game.score()).toBe(12);
});

function rollManyTimes(numOfRolls, pinsScored, game) {
  for (let rollCount = 1; rollCount <= numOfRolls; rollCount++) {
    game.roll(pinsScored);
  }
}
