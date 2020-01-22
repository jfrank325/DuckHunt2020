const game = new Game();
let ambience;
let gunShot;
let reload;
let zomSounds;
let backImg;
// let quack;

function keyPressed() {
  if (keyCode === 13) {
    game.start = true;
    console.log('enter');
  }
}

function preload() {
  game.init();
  ambience = loadSound('/Sounds/outdoorSound.mp3');
  gunShot = loadSound('/Sounds/gunShot.mp3');
  reload = loadSound('/Sounds/Reload.mp3');
  // quack = loadSound('/Sounds/duck.mp3');
  backImg = loadImage('/Images/bunker.jpg');
  zomSounds = loadSound('/Sounds/zombieShort.mp3');
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
  if (game.intro === true && game.start === false) {
    background(backImg);
    fill('blue');
    textFont('Georgia');
    text(`Let's Hunt!`, 471, 100, 500, 200);
    text(`Press Enter To Begin`, 500, 150, 650, 200);
  }
  if (game.start == true) {
    game.intro = false;
    if (game.level == 1) {
      game.draw();
      fill('white');
      textFont('Georgia');
      text(`SCORE ${game.score}`, 2000, 100, 300, 100);
      text(`AMMO ${game.ammo}`, 2000, 137, 300, 100);
      if (game.timer <= 10) {
        fill('red');
      }
      text(game.timer, 1845, 100, 300, 100);
      if (frameCount % 60 === 0) {
        game.timer--;
      }
    }

    if (game.level == 2) {
      game.draw();
      fill('white');
      textFont('Georgia');
      text(`SCORE ${game.score}`, 2000, 100, 300, 100);
      text(`AMMO ${game.ammo}`, 2000, 137, 300, 100);
      fill('red');
      text(game.timer, 1700, 30, 300, 100);
      if (frameCount % 60 === 0) {
        game.timer--;
      }
    }

    if (game.level == 3) {
      game.draw();
      ambience.pause();
      fill('white');
      textFont('Georgia');
      text(`SCORE ${game.score}`, 2000, 100, 300, 100);
      text(`AMMO ${game.ammo}`, 2000, 137, 300, 100);
      fill('red');
      text(game.timer, 1700, 30, 300, 100);
      if (frameCount % 60 === 0) {
        game.timer--;
      }
    }

    if (game.timer === -1 && game.score > 600 && game.level == 3) {
      game.level = false;
      game.start = false;
      game.intro = false;
      game.finish = true;
      text(`Congratulations!`, 700, 100, 500, 200);
      text(`You're a great hunter!`, 700, 150, 500, 200);
    } else if (game.zombies.y >= 950 && game.zombies.width > 30 && game.level == 3) {
      game.intro = false;
      game.level = false;
      game.start = false;
      game.gameOver = true;
      text(`GAME OVER`, 471, 100, 500, 200);
    }
    // else {
    // game.level = false;
    // game.start = false;
    // game.gameOver = true;
    // text(`GAME OVER`, 471, 100, 500, 200);
    // }

    if (game.timer === -1 && game.score >= 200) {
      game.timer = 60;
      game.level = 2;

      if (game.score > 400 && game.level == 2) {
        game.level = 3;
        return;
      }
      //  else {
      //     game.intro = false;
      //     game.level = false;
      //     game.start = false;
      //     game.gameOver = true;
      //     text(`GAME OVER`, 471, 100, 500, 200);
      //   }
    }
  }
}

function mousePressed() {
  if (mousePressed) {
    if (mouseButton === LEFT && game.ammo > 0) {
      gunShot.play();
      game.hunter.recoil();
      game.ammo -= 1;
      game.targets.filter(target => {
        if (target.clicked() === true) {
          game.score += 20;
          console.log('fall');
          target.fall();
          // quack.play();
        }
      });
      game.zombies.filter(zombie => {
        if (zombie.clicked() === true) {
          game.score += 30;
          zombie.death2();
        }
      });
      game.preditors.filter(preditors => {
        if (preditors.clicked() === true) {
          game.score += 10;
          preditors.shrink();
        }
      });
    }
    if (mouseButton === RIGHT) {
      reload.play();
      game.ammo = 5;
    }
  }
}
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.zIndex = 1;
document.addEventListener('contextmenu', event => event.preventDefault());
