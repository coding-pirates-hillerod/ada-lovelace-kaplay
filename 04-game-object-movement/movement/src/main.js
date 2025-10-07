import kaplay from "kaplay";
import "kaplay/global";

kaplay();

loadSprite("bean", "sprites/bean.png");

scene("start", () => {
  const bean = add([sprite("bean"), pos(100, 100)]);

  bean.onKeyDown("right", () => {
    bean.move(100, 0);
  });

  bean.onKeyDown("down", () => {
    bean.move(0, 100);
  });
});

go("start");

