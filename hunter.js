class Hunter {
  constructor() {
    this.img = loadImage('/Images/Hunter.png');
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 1500;
    this.y = height - this.height;
  }

  draw() {
    if (mouseX > this.x + 30) {
      this.x += 18;
    }
    if (mouseX < this.x - 50) {
      this.x -= 15;
    }
    // if (mouseY < 200 && this.y > 900) {
    //   this.y -= 8;
    // }
    // if (mouseY > 750 && this.y < 1000) {
    //   this.y += 8;
    // }

    image(this.img, this.x, this.y);
  }
}
