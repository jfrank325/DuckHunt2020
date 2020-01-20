class Wolf {
  constructor() {
    this.x = random(-200, 3500);
    this.y = random(650, 800);
    this.width = 80;
    this.height = 60;
  }

  setup() {
    this.img = loadImage('/Images/wolf.gif');
    // this.height = 300;
    // this.width = 500;
  }

  draw() {
    if (keyIsDown(37)) {
      this.x += 2;
      if (keyIsDown(38)) {
        this.x -= 8;
      }
    }
    this.x += 8;

    // rect(this.x, this.y, this.width, this.height);
    image(game.wolf.img, this.x, this.y, this.width, this.height);
  }
  clicked() {
    // setting parameters for the mouse to click inside
    if (this.x + this.width < mouseX || this.x > mouseX) {
      console.log('false');
      return false;
    }
    if (this.y + this.height < mouseY || this.y > mouseY) {
      console.log('false');

      return false;
    }
    console.log('true');
    return true;
  }
}
