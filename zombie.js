class Zombie {
  constructor() {
    this.gravity = 0.9;
    this.velocity = 0;
    this.x = random(600, 2200);
    this.y = random(450, 500);
    this.width = random(50, 90);
    this.height = this.width;
    this.shot = false;
    this.img = loadImage('Images/zombie.gif');
  }

  draw() {
    if (keyIsDown(37)) {
      this.x += 15;
      if (keyIsDown(38)) {
        this.x -= 15;
      }
    }
    this.y += random(0.7, 2.5);
    this.width += random(0.9, 2);
    image(this.img, this.x, this.y, this.width, this.height);
    if (this.shot) {
      if (this.width > 1) {
        this.width -= 100;
      }
      // if (this.height > 1) {
      //   this.height -= 3;
      // }
      this.y += 12;
    }
  }
  clicked() {
    // setting parameters for the mouse to click inside
    if (this.x + this.width - 22 < mouseX || this.x + 22 > mouseX) {
      console.log('false');
      return false;
    }
    if (this.y + 30 < mouseY || this.y > mouseY) {
      console.log('false');

      return false;
    }
    console.log('true');
    return true;
  }

  death2() {
    this.shot = true;
  }
}
