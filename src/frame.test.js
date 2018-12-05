const Frame = require("./frame");

describe("normal frame", () => {
  test("normal frame is complete with 2 rolls", () => {
    const frame = new Frame();
    frame.roll(0);
    frame.roll(0);
    expect(frame.isComplete()).toBeTruthy();
  });

  test("normal frame score is base on current frame rolls", () => {
    const frame = new Frame();
    frame.roll(1);
    frame.roll(1);
    expect(frame.getFrameScore()).toBe(2);
  });
});

describe("strike frame", () => {
  test("strike frame is complete with 1 roll", () => {
    const frame = new Frame();
    frame.roll(10);
    expect(frame.isComplete()).toBeTruthy();
  });
  test("strike frame should have score if 10", () => {
    const frame = new Frame();
    frame.roll(10);
    expect(frame.getFrameScore()).toBe(10);
  });
});

/**
test("last frame is complete with 3 rolls if first row is a strike", () => {
  const frame = new Frame();
  frame.roll(10);
  frame.roll(0);
  frame.roll(0);
  expect(frame.isComplete()).toBeTruthy();
}); */
