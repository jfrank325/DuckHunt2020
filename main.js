const game = new Game();
let falling = false;
let duck;
let score = 0;
let ambience;
let gunShot;
let timer = 60;
let mode;
let reload;

function preload() {
  game.init();
  ambience = loadSound('/Sounds/outdoorSound.mp3');
  gunShot = loadSound('/Sounds/gunShot.mp3');
  reload = loadSound('/Sounds/Reload.mp3');
}

function setup() {
  mode = 0;
  createCanvas(3000, 970);
  game.setup();
  ambience.play();
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  // text(`Let's Hunt! -- Press Space To Begin`);
  // if (keyIsDown(32)) {
  //   game.draw();
  // }
  game.draw();
  fill('white');
  text(`SCORE ${score}`, 1500, 30, 300, 100);
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
    if (score < 100 && score > 50) {
      score = `You're becoming a good hunter`;
    }
    if (score >= 100) {
      score = `Sharpshooter Skillz!!`;
    }
    text(`${score}!`, width / 2, height * 0.3);
    noLoop();
  }
}

// function pause() {
//   if (keyIsDown(17)) {
//     loop();
//   }
// }

// function unPause() {
//   if (keyIsDown(17)) {
//     noloop();
//   }
// }

function mousePressed() {
  if (mousePressed) {
    gunShot.play();
    game.targets.filter(target => {
      if (target.clicked() === true) {
        score += 10;
        console.log('fall');
        target.fall(target);
      }
    });
  }
}

function reloaded() {
  if (mouseIsPressed) {
    if (mouseButton === RIGHT) {
      reload.play();
    }
  }
}
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.zIndex = 1;
