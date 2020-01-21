class Game {
  constructor() {
    this.targets = [];
    this.preditors = [];
    this.state = false;
    // this.ambience = ambience;
    // this.gunSound = gunSound;
  }

  init() {
    this.background = new Background();
    this.hunter = new Hunter();
    this.target = new Duck();
    this.wolf = new Wolf();
    //for (let i = 1; i <= 2; i++) {
    //   this.targets.push(loadImage('/Images/Duck' + i + '.gif'));
    //  }
  }

  draw() {
    this.background.draw();
    cursor(CROSS);
    if (frameCount % 60 === 0) {
      this.targets.push(new Duck());
      //    console.log(this.targets);
    }

    this.targets.forEach(target => {
      target.draw();
      // console.log(target);
    });
    if (frameCount % 360 === 0) {
      this.preditors.push(new Wolf());
    }
    this.preditors.forEach(wolf => {
      wolf.draw();
    });
    this.hunter.draw();
    // this.target.draw();
  }
  setup() {
    this.hunter.setup();
    this.target.setup();
    this.wolf.setup();
  }
}
