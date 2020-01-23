const game = new Game();
let ambience;
let gunShot;
let reload;
let zomSounds;
let backImg;
// let quack;
let loser;
let end;
let play = false;
let playCreepy = false;

function keyPressed() {
  if (keyCode === 13) {
    game.start = true;
    game.gameOver = false;
    game.timer = 40;
    game.totalAmmo = 40;
    game.score = 0;
    game.level = 1;
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
  zomSounds = loadSound('/Sounds/zombieAttack.mp3');
  end = loadImage('/Images/Success.jpg');
  loser = loadImage('/Images/gameover.jpg');
}

function setup() {
  createCanvas(3000, 970);
  game.setup();
  if (game.level == 1 || game.level == 2) {
    ambience.loop();
  }
  if (game.level == 3) {
    zomSounds.play();
  }
  textSize(50);
  textAlign(CENTER, CENTER);
  clear();
}

function draw() {
  if (game.intro === true && game.start === false) {
    play = true;
    background(backImg);
    fill('blue');
    textFont('Georgia');
    text(`Let's Hunt!`, 540, 100, 500, 200);
    text(`Press Enter To Begin`, 565, 150, 650, 200);
  }
  if (game.gameOver == true) {
    game.intro = false;
    game.level = false;
    game.start = false;
    ambience.pause();
    background(loser);
    textFont('Georgia');
    fill('red');
    text(`GAME OVER`, 700, 100, 500, 200);
    fill('white');
    text(`Press ENTER if you think you can suck less and try again`, 700, 250, 500, 200);
  }
  if (game.start == true) {
    game.intro = false;
    if (game.level == 1) {
      play = true;
      game.draw();
      fill('white');
      textFont('Georgia');
      text(`SCORE ${game.score}`, 1960, 100, 380, 100);
      text(`AMMO ${game.totalAmmo}`, 1910, 145, 500, 100);
      text(`ROUNDS ${game.ammo}`, 2020, 192, 300, 100);
      if (game.timer <= 10) {
        fill('red');
      }
      text(game.timer, 1830, 100, 300, 100);
      if (frameCount % 60 === 0) {
        game.timer--;
      }
    }

    if (game.level == 2) {
      play = true;
      game.draw();
      // game.targets.width = game.targets.width / 3;
      fill('white');
      textFont('Georgia');
      text(`SCORE ${game.score}`, 2000, 100, 380, 100);
      text(`AMMO ${game.totalAmmo}`, 1910, 145, 500, 100);
      text(`ROUNDS ${game.ammo}`, 2020, 192, 300, 100);
      fill('red');
      text(game.timer, 1830, 100, 300, 100);
      if (frameCount % 60 === 0) {
        game.timer--;
      }
    }

    if (game.level == 3) {
      game.draw();
      playCreepy = true;
      // ambience.pause();
      fill('white');
      textFont('Georgia');
      text(`SCORE ${game.score}`, 2000, 100, 380, 100);
      text(`AMMO ${game.totalAmmo}`, 1910, 145, 500, 100);
      text(`ROUNDS ${game.ammo}`, 2020, 192, 300, 100);
      fill('red');
      text(game.timer, 1830, 100, 300, 100);
      if (frameCount % 60 === 0) {
        game.timer--;
      }
    }

    if (game.timer === -1 && game.score > 600 && game.level == 3) {
      game.level = false;
      game.start = false;
      game.intro = false;
      game.finish = true;
      background(end);
      textFont('Georgia');
      text(`Congratulations!`, 980, 100, 500, 200);
      text(`You're a great hunter!`, 980, 150, 500, 200);
      text(`Press ENTER to play again`, 950, 200, 700, 200);
    }
    if (game.timer === -1 && game.score >= 200 && game.level == 1) {
      game.timer = 40;
      game.totalAmmo = 30;
      game.level = 2;
    }
    if (game.timer === -1 && game.score > 400 && game.level == 2) {
      game.timer = 40;
      game.totalAmmo = 60;
      game.level = 3;
    } else if ((game.timer === -1 && game.score < 200) || (game.timer === -1 && game.score < 400 && game.level == 2)) {
      game.gameOver = true;
    }
  }
}

function mousePressed() {
  if (mousePressed) {
    if (mouseButton === LEFT && game.ammo > 0 && mouseButton === LEFT && game.totalAmmo > 0) {
      gunShot.play();
      game.hunter.recoil();
      game.ammo -= 1;
      game.totalAmmo -= 1;
      game.targets.filter(target => {
        if (target.clicked() === true) {
          game.score += 20;
          target.fall();
        }
      });
      // game.reverseDucks.filter(duck => {
      //   if (duck.clicked() === true) {
      //     game.score += 20;
      //     duck.fall();
      //   }
      // });
      game.zombies.filter(zombie => {
        if (zombie.clicked() === true) {
          game.score += 10;
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
