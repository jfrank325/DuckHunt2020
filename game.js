class Game {
  constructor() {
    this.targets = [];
    this.preditors = [];
    this.zombies = [];
    this.intro = false;
    this.level = 1;
    this.intro = true;
    this.start = false;
    this.gameOver = false;
    this.finish = false;
    this.score = 0;
    this.ammo = 5;
    this.timer = 60;
  }

  init() {
    this.background = new Background();
    this.hunter = new Hunter();
    this.target = new Duck();
    this.wolf = new Wolf();
    this.zombie = new Zombie();
  }

  draw() {
    if (this.level === 1) {
      this.background.draw();
    }
    if (this.level === 2) {
      this.background.draw();
    }
    if (this.level === 3) {
      this.background.draw();
    }
    cursor(CROSS);
    if (frameCount % 90 === 0) {
      this.targets.push(new Duck());
      //    console.log(this.targets);
    }

    this.targets.forEach(target => {
      target.draw();
      // console.log(target);
    });

    if (this.level == 2) {
      if (frameCount % 1200 === 0) {
        this.preditors.push(new Wolf());
      }
      this.preditors.forEach(wolf => {
        wolf.draw();
      });
    }
    if (this.level == 3) {
      if (frameCount % 90 === 0) {
        this.zombies.push(new Zombie());
      }
      this.zombies.forEach(zombie => {
        zombie.draw();
      });
    }
    this.hunter.draw();
  }
  setup() {
    this.hunter.setup();
  }
}
