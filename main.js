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
  ambience = loadSound('Sounds/outdoorSound.mp3');
  gunShot = loadSound('Sounds/gunShot.mp3');
  reload = loadSound('Sounds/Reload.mp3');
  // quack = loadSound('/Sounds/duck.mp3');
  backImg = loadImage('Images/bunker.jpg');
  zomSounds = loadSound('Sounds/zombieAttack.mp3');
  end = loadImage('Images/Success.jpg');
  loser = loadImage('Images/gameover.jpg');
}

function setup() {
  createCanvas(3000, 970);
  game.setup();
  if (game.level == 1 || game.level == 2) {
    ambience.loop();
  }

  textSize(50);

  clear();
}

function draw() {
  if (game.intro === true && game.start === false) {
    background(backImg);
    fill('black');
    textFont('Georgia');
    textSize(65);
    text(`DUCK HUNT 2020`, 1200, 30, 600, 100);
    fill('blue');
    textSize(50);
    text(`Let's Hunt!`, 965, 260, 500, 200);
    text(`Press Enter To Begin`, 965, 310, 650, 200);
    fill('black');
    textSize(40);
    text(`FIRE - Left Click`, 965, 400, 500, 100);
    text(`RELOAD - Right Click`, 965, 440, 500, 100);
    text(`ARROWS - Look Around`, 965, 480, 500, 100);
  }
  if (game.gameOver == true) {
    game.intro = false;
    game.level = false;
    game.start = false;
    background(loser);
    zomSounds.stop();
    textFont('Georgia');
    fill('red');
    textSize(70);
    text(`GAME OVER`, 900, 100, 500, 200);
    fill('blue');
    textSize(50);
    text(`Press ENTER if you think you can suck less and try again`, 900, 250, 500, 200);
  }
  if (game.start == true) {
    game.intro = false;
    if (game.level == 1) {
      zomSounds.stop();
      playAmbience();
      game.draw();
      fill('white');
      textFont('Georgia');
      text(`SCORE ${game.score}`, 1900, 100, 380, 100);
      text(`AMMO ${game.totalAmmo}`, 1900, 145, 500, 100);
      text(`ROUNDS ${game.ammo}`, 1900, 192, 300, 100);
      if (game.timer <= 10) {
        fill('red');
      }
      text(game.timer, 1830, 100, 300, 100);
      if (frameCount % 60 === 0) {
        game.timer--;
      }
    }

    if (game.level == 2) {
      game.draw();
      // game.targets.width = game.targets.width / 3;
      fill('white');
      textFont('Georgia');
      text(`SCORE ${game.score}`, 1900, 100, 380, 100);
      text(`AMMO ${game.totalAmmo}`, 1900, 145, 500, 100);
      text(`ROUNDS ${game.ammo}`, 1900, 192, 300, 100);
      if (game.timer <= 10) {
        fill('red');
      }
      text(game.timer, 1830, 100, 300, 100);
      if (frameCount % 60 === 0) {
        game.timer--;
      }
    }

    if (game.level == 3) {
      game.draw();
      playZombie();
      ambience.stop();
      fill('white');
      textFont('Georgia');
      text(`SCORE ${game.score}`, 1900, 100, 380, 100);
      text(`AMMO ${game.totalAmmo}`, 1900, 145, 500, 100);
      text(`ROUNDS ${game.ammo}`, 1900, 192, 300, 100);
      if (game.timer <= 10) {
        fill('red');
      }
      fill('red');
      text(`Aim For The Head!`, 1900, 238, 500, 100);
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
      zomSounds.stop();
      textFont('Georgia');
      text(`Congratulations!`, 980, 150, 500, 200);
      text(`You're a great hunter!`, 980, 200, 500, 200);
      text(`Press ENTER to play again`, 980, 250, 700, 200);
    }
    if (game.timer === -1 && game.score <= 600 && game.level == 3) {
      game.gameOver = true;
    }

    if (game.timer === -1 && game.score >= 200 && game.level == 1) {
      game.timer = 40;
      game.totalAmmo = 20;
      game.level = 2;
    }
    if (game.timer === -1 && game.score >= 450 && game.level == 2) {
      game.timer = 40;
      game.totalAmmo = 50;
      game.level = 3;
    } else if ((game.timer === -1 && game.score < 200) || (game.timer === -1 && game.score < 450 && game.level == 2)) {
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

function playZombie() {
  if (!zomSounds.isPlaying()) {
    zomSounds.play();
  }
}

function playAmbience() {
  if (!ambience.isPlaying()) {
    ambience.loop();
  }
}

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.zIndex = 1;
document.addEventListener('contextmenu', event => event.preventDefault());
