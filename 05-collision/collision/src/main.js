import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay();

loadSprite("bean", "sprites/bean.png");

scene("game", () => {
  const bean = add([pos(120, 80), sprite("bean"), area(), "bean"]);

  const enemy = add([
    pos(800, 400),
    rect(100, 100),
    area(), // add area component to detect collisions
    color(1, 0, 0),
    "enemy",
  ]);

  bean.onCollide("enemy", (enemy) => {
    destroy(enemy);
  });

  bean.onKeyDown("left", () => {
    bean.move(-150, 0);
  });

  bean.onKeyDown("right", () => {
    bean.move(150, 0);
  });

  bean.onKeyDown("up", () => {
    bean.move(0, -150);
  });

  bean.onKeyDown("down", () => {
    bean.move(0, 150);
  });
});

go("game");
