import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay({
  debugKey: "d",
});

loadSprite("bean", "sprites/bean.png"); // load the bean sprite

const bean = add([
  sprite("bean"), // add a sprite component
  pos(100, 100), // position the bean at (100, 100)
]);

const gameText = add([
  text("MY AWESOME GAME!", { size: 64 }), // add a text component
  color(RED),
  pos(center().x, 50), // position the text at the center
  anchor("center"),
]);

const square = add([
  rect(200, 200), // add a rectangle component
  pos(center()), // position the square at the center
  color(BLUE),
  anchor("center"),
]);
