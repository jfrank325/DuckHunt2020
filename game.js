class Game {
  constructor() {
    // this.targets = [];
    // this.ambience = ambience;
    // this.gunSound = gunSound;
  }

  init() {
    this.background = new Background();
    this.hunter = new Hunter();
    this.target = new Target();
    // for (let i = 1; i <= 2; i++) {
    //   this.targets.push(loadImage('/Images/Duck' + i + '.gif'));
    // }
    // this.ambience = loadSound('/Sounds/outdoorSound.mp3');
    // this.gunSound = loadSound('/Sounds/gunShot.mp3');
  }

  draw() {
    this.background.draw();
    cursor(CROSS);
    // if (frameCount % 120 === 0) {
    //   this.targets.push(new Target());
    // }
    // this.targets.forEach = target => {
    //   target.draw();
    // };
    this.hunter.draw();
    this.target.draw();
  }
  setup() {
    this.hunter.setup();
    this.target.setup();
    // this.ambience.play();
  }
}
