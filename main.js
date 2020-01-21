const game = new Game();
let score = 0;
let ambience;
let gunShot;
let timer = 60;
let reload;
let ammo = 5;

function keyPressed() {
  if (keyCode === 32) {
    game.state = true;
  }
}

function preload() {
  game.init();
  ambience = loadSound('/Sounds/outdoorSound.mp3');
  gunShot = loadSound('/Sounds/gunShot.mp3');
  reload = loadSound('/Sounds/Reload.mp3');
}

function setup() {
  createCanvas(3000, 970);
  game.setup();
  ambience.loop();
  textSize(50);
  textAlign(CENTER, CENTER);
  clear();
}

function draw() {
  if (game.state === false) {
    fill('red');
    text(`Let's Hunt!`, 450, 100, 500, 200);
    text(`Press Space To Begin`, 500, 300, 650, 200);
  }

  if (game.state === true) {
    game.draw();
    fill('white');
    text(`SCORE ${score}`, 2000, 30, 300, 100);
    text(`AMMO ${ammo}`, 2000, 150, 300, 100);
    fill('red');
    text(timer, 1700, 30, 300, 100);
    if (frameCount % 60 === 0) {
      timer--;
    }
    if (timer == -1) {
      fill('white');
      if (score <= 50) {
        score = 'You need to work on your hunting skillz';
      }
      if (score < 180 && score > 70) {
        score = `You're becoming a good hunter`;
      }
      if (score >= 180) {
        score = `Sharpshooter Skillz!!`;
      }
      text(`${score}!`, width / 2, height * 0.3);
      noLoop();
    }
  }
}

// function keyPressed() {
//   if (keycode === 32) {
//     game.loop();
//   }
// }
// function keyPressed() {
//   if (keyCode === 32) {
//     game.state = true;
//   }
// }

function mousePressed() {
  if (mousePressed) {
    if (mouseButton === LEFT && ammo > 0) {
      gunShot.play();
      ammo -= 1;
      game.targets.filter(target => {
        if (target.clicked() === true) {
          score += 10;
          console.log('fall');
          target.fall();
        }
      });
      game.preditors.filter(preditors => {
        if (preditors.clicked() === true) {
          score += 30;
          preditors.shrink();
        }
      });
    }
    if (mouseButton === CENTER) {
      reload.play();
      ammo = 5;
    }
  }
}
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.zIndex = 1;
