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
    expect(frame.getFinalFrameScore()).toBe(2);
  });
});

describe("strike frame", () => {
  test("strike frame is complete with 1 roll", () => {
    const frame = new Frame();
    frame.roll(10);
    expect(frame.isComplete()).toBeTruthy();
  });

  test("strike frame should have score if 30 if all subsequent frames are strikes", () => {
    const frame1 = new Frame();
    frame1.roll(10);
    const frame2 = new Frame();
    frame2.roll(10);
    const frame3 = new Frame();
    frame3.roll(10);
    frame1.addNextFrame(frame2);
    frame2.addNextFrame(frame3);
    expect(frame1.getFinalFrameScore()).toBe(30);
  });
});

describe("last frame", () => {
  test("last frame is complete with 3 rolls if first row is a strike", () => {
    const frame = new Frame();
    frame.setIsLast(true);
    frame.roll(10);
    frame.roll(0);
    frame.roll(0);
    expect(frame.isComplete()).toBeTruthy();
  });

  test("last frame is complete with 3 rolls if there is a spare", () => {
    const frame = new Frame();
    frame.setIsLast(true);
    frame.roll(5);
    frame.roll(5);
    frame.roll(1);
    expect(frame.isComplete()).toBeTruthy();
  });

  test("last frame is complete with 2 rolls if there is no spare or strike", () => {
    const frame = new Frame();
    frame.setIsLast(true);
    frame.roll(2);
    frame.roll(4);
    expect(frame.isComplete()).toBeTruthy();
  });
});
