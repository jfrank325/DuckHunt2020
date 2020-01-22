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
    if (mouseY > this.y && this.y > 60) {
      this.y += 20;
    }
    if (mouseY < 450 && this.y > 600) {
      this.y -= 20;
    }

    image(this.img, this.x, this.y);
  }
}
