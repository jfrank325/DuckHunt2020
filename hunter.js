class Hunter {
  constructor() {
    this.img = loadImage('/Images/Hunter.png');
    this.velocity = 0;
    this.gravity = 0.8;
    this.shot = false;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 1500;
    this.y = height - this.height;
    this.originY = this.y;
  }

  draw() {
    if (mouseX > this.x + 30) {
      this.x += 18;
    }
    if (mouseX < this.x - 50) {
      this.x -= 15;
    }
    if (mouseY > this.y && this.y > 60) {
      this.y += 20;
    }
    if (mouseY < 450 && this.y > 600) {
      this.y -= 20;
    }
    // this.velocity += this.gravity;
    // this.y += this.originY;
    // if (this.y >= this.originY) {
    //   this.y = this.originY;
    // }

    if (this.shot) {
      if (this.y > height - this.height - 30) {
        this.y -= 10;
      } else {
        this.shot = false;

        this.y = height - this.height;
      }
    }

    image(this.img, this.x, this.y);
  }
  recoil() {
    this.shot = true;
  }
}
