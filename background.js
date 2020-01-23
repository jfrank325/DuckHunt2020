class Background {
  constructor() {
    this.images = [
      {
        src: loadImage('/Images/pond.jpg'),
        name: 1,
        x: 0,
        speed: 15,
      },
      {
        src: loadImage('/Images/Fielder.jpg'),
        name: 2,
        x: 0,
        speed: 15,
      },
      {
        src: loadImage('/Images/NLights.jpg'),
        name: 3,
        x: 0,
        speed: 15,
      },
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
    //for (let i = 0; i < this.images.length; i++) {
    console.log(game.level);
    // if (game.game.level === 1) {
    if (game.level === 1) {
      this.move(this.images[0]);
    } else if (game.level === 2) {
      this.move(this.images[1]);
    } else if (game.level === 3) {
      this.move(this.images[2]);
    }
  }
}
