class Target {
  constructor(r) {
    this.img = loadImage('/Images/DuckLeft.png');
    this.direction = [];
    this.r = width / 2;
    this.gravity = 0.07;
    this.velocity = 0;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.originY = this.y;
    this.x = 1500;
    this.y = 300;
  }

  draw() {
    if (keyIsDown(37)) {
      this.x += 2;
    } else {
      this.x -= 4;
    }
    this.y += 0.5;
    // // this.velocity += this.gravity;
    // // this.y += this.velocity;
    // // if (this.y >= 800) {
    // //   this.y = this.y;
    // }
    image(this.img, this.x, this.y);
  }
  clicked() {
    if (this.x + this.width < mouseX || this.x + this.width > mouseX) {
      return false;
    }
    // self completely to the top || self completely to the bottom
    if (this.y + this.height < mouseY || this.y + this.height < mouseY) {
      return false;
    }

    console.log('clicked on target');
    return true;
  }

  fall() {
    if (keyIsDown(17)) {
    }
  }
}
