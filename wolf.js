class Wolf {
  constructor() {
    this.x = random(-800, -10);
    this.y = random(720, 800);
    this.width = 240;
    this.height = 180;
    this.shot = false;
    this.img = loadImage('Images/wildSchwein.gif');
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
    image(this.img, this.x, this.y, this.width, this.height);
    if (this.shot) {
      if (this.width > 1) {
        this.width -= 0.5;
        this.y -= 0.5;
      }
      if (this.height > 1) {
        this.height -= 0.5;
        this.y -= 0.5;
      }
      this.x += 12;
    }
  }
  clicked() {
    // setting parameters for the mouse to click inside
    if (this.x + this.width < mouseX || this.x > mouseX) {
      // console.log('false');
      return false;
    }
    if (this.y + this.height < mouseY || this.y > mouseY) {
      // console.log('false');
      return false;
    }
    // console.log('true');
    return true;
  }
  shrink() {
    this.shot = true;
  }
}
