class Background {
  constructor() {
    this.images = [
      {
        src: loadImage('/Images/Fielder.jpg'),
        x: 0,
        speed: 15,
      },
      // {
      //   src: loadImage('/Images/BiggerField.jpg'),
      //   x: 2024,
      //   speed: 12,
      // },
    ];
  }

  move(img) {
    //imgs should move right and left with onPress
    image(img.src, img.x - width, 0);
    image(img.src, img.x, 0);
    image(img.src, img.x + width, 0);
    //background should move left
    if (keyIsDown(39)) {
      img.x -= img.speed;
    }
    // background should move right
    if (keyIsDown(37)) {
      img.x += img.speed;
    }
    if (keyIsDown(38)) {
      img.y -= img.speed;
    }
    if (keyIsDown(40)) {
      img.y += img.speed;
    }
    if (img.x <= -width) {
      img.x = 0;
    }
    if (img.x >= width) {
      img.x = 0;
    }
  }
  draw() {
    for (let i = 0; i < this.images.length; i++) {
      this.move(this.images[i]);
    }
  }
}
