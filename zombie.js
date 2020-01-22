class Zombie {
  constructor() {
    this.gravity = 0.9;
    this.velocity = 0;
    this.x = random(-30, 3500);
    this.y = random(450, 550);
    this.width = random(50, 90);
    this.height = this.width;
    this.shot = false;
    this.img = loadImage('/Images/zombie.gif');
  }

  draw() {
    if (keyIsDown(37)) {
      this.x += 2;
      if (keyIsDown(38)) {
        this.x -= 8;
      }
    }
    this.y += 1;
    this.width += 0.9;
    image(this.img, this.x, this.y, this.width, this.height);
    if (this.shot) {
      if (this.width > 1) {
        this.width -= 3;
      }
      if (this.height > 1) {
        this.height -= 3;
      }
      this.y += 12;
    }
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

  death2() {
    this.shot = true;
  }
}
