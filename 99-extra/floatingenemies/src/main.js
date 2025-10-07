import kaplay from "kaplay";
import "kaplay/global";

kaplay({
  debugKey: "d",
});

loadSprite("ghosty", "sprites/ghosty.png");

scene("main", () => {
  onLoad(() => {
    spawnGhosty();
  });

  const spawnGhosty = () => {
    const ghosty = add([sprite("ghosty"), offscreen()]);

    const randomY = rand(0, height() - ghosty.height);
    ghosty.use(pos(width(), randomY));

    ghosty.onUpdate(() => {
      ghosty.move(-100, 0);
    });

    ghosty.onExitScreen(() => {
      destroy(ghosty);
    });

    wait(1, spawnGhosty);
  };
});

go("main");
