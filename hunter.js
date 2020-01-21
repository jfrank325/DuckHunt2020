class Hunter {
  constructor() {
    this.img = loadImage('/Images/Hunter.png');
    this.sound = loadSound('/Sounds/Reload.mp3');
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

    image(this.img, this.x, this.y);
  }
}
