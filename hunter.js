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
    image(this.img, this.x, this.y);
  }
}
