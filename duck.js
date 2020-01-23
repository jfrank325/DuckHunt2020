class Duck {
  constructor() {
    this.direction = [];
    this.gravity = 0.15;
    this.velocity = 0;
    this.x = random(0, 3500);
    this.y = random(20, 600);
    this.originY = this.y;
    this.width = random(10, 70);
    this.height = this.width;
    this.falling = false;
    this.img = loadImage('/Images/Duck1.gif');
  }

  draw() {
    if (keyIsDown(37)) {
      this.x += 16;
      if (keyIsDown(38)) {
        this.x -= 16;
      }
    }
    //vary the speed
    if (this.width >= 10 && this.width <= 20) {
      this.x -= 2.5;
    }
    if (this.width >= 20 && this.width <= 30) {
      this.x -= 5;
    }
    if (this.width >= 30 && this.width <= 50) {
      this.x -= 8;
    }
    if (this.width >= 50 && this.width <= 70) {
      this.x -= 11;
    }
    //Vary the direction
    if (this.y <= -100 && this.y >= 200) {
      this.y += 1.5;
    }
    if (this.y > 200 && this.y < 350) {
      this.y += 0.7;
    }
    if (this.y >= 350 && this.y <= 480) {
      this.y -= 0.7;
    }
    if (this.y > 480) {
      this.y -= 1;
    }

    // rect(this.x, this.y, this.width, this.height);
    image(game.target.img, this.x, this.y, this.width, this.height);

    if (this.falling) {
      this.velocity += this.gravity;
      //this.velocity += 300;

      this.y += this.velocity;
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

  fall() {
    this.falling = true;
  }
}

class ReverseDuck extends Duck {
  constructor() {
    super();
    this.img = loadImage('/Images/duckRight.gif');
  }
  draw() {
    if (keyIsDown(37)) {
      this.x -= 8;
      if (keyIsDown(38)) {
        this.x += 2;
      }
    }
    //vary the speed
    if (this.width >= 10 && this.width <= 20) {
      this.x += 2.5;
    }
    if (this.width >= 20 && this.width <= 30) {
      this.x += 4;
    }
    if (this.width >= 30 && this.width <= 50) {
      this.x += 7;
    }
    if (this.width >= 50 && this.width <= 70) {
      this.x += 8;
    }
    //Vary the direction
    if (this.y <= -100 && this.y >= 200) {
      this.y += 1.5;
    }
    if (this.y > 200 && this.y < 350) {
      this.y += 0.7;
    }
    if (this.y >= 350 && this.y <= 480) {
      this.y -= 0.7;
    }
    if (this.y > 480) {
      this.y -= 1;
    }
    image(game.reverseDuck.img, this.x, this.y, this.width, this.height);
    if (this.falling) {
      this.velocity += this.gravity;
      //this.velocity += 300;

      this.y += this.velocity;
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

  fall() {
    this.falling = true;
  }
}
