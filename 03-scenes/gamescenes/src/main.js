import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay({
  background: [255, 125, 0],
  debugKey: "d",
});

loadSprite("bean", "sprites/bean.png");

// Start scene
scene("start", () => {
  const bean = add([sprite("bean"), pos(100, 100)]);

  const startText = add([
    text("Start scene", { size: 64 }),
    pos(center().x, 50),
    anchor("center"),
  ]);

  onKeyPress("space", () => {
    go("game");
  });
});

// Game scene
scene("game", () => {
  const bean = add([sprite("bean"), pos(800, 100)]);
  const gameText = add([
    text("Game scene", { size: 64 }),
    pos(center()),
    anchor("center"),
  ]);

  onKeyPress("space", () => {
    go("start");
  });
});

go("start");
