const game = new Game();
let ambience;
let gunShot;
let reload;
let click;
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
  click = loadSound('Sounds/click1.mp3');
  // quack = loadSound('/Sounds/duck.mp3');
  backImg = loadImage('Images/duckhuntLogo.png');
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
    image(backImg, 1200, 60, 500, 400);
    background('rgba(168,235,255, 0.1)');
    // fill('black');
    textFont('Ubuntu');
    textSize(65);
    // text(`DUCK HUNT 2020`, 1200, 30, 600, 100);
    fill('#eb143e');
    textSize(30);
    text(`Let's Hunt!`, 1200, 520, 500, 200);
    text(`Press Enter To Begin`, 1200, 560, 650, 200);

    textSize(20);
    text(`FIRE - Left Click`, 1200, 620, 500, 100);
    text(`RELOAD - Right Click`, 1200, 660, 500, 100);
    text(`ARROWS - Look Around`, 1200, 700, 500, 100);
  }
  if (game.gameOver == true) {
    game.intro = false;
    game.level = false;
    game.start = false;
    // background(loser);
    background('black');
    zomSounds.stop();
    textFont('Ubuntu');
    fill('red');
    textSize(70);
    text(`GAME OVER`, 900, 100, 500, 200);
    fill('red');
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
      textSize(40);
      textFont('Ubuntu');
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
      textFont('Ubuntu');
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
      textFont('Ubuntu');
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

    if (game.timer === -1 && game.score > 500 && game.level == 3) {
      game.level = false;
      game.start = false;
      game.intro = false;
      game.finish = true;
      background(end);
      zomSounds.stop();
      textFont('Ubuntu');
      text(`Congratulations!`, 980, 150, 500, 200);
      text(`You're a great hunter!`, 980, 200, 500, 200);
      text(`Press ENTER to play again`, 980, 250, 700, 200);
    }
    if (game.timer === -1 && game.score <= 360 && game.level == 3) {
      game.gameOver = true;
    }

    if (game.timer === -1 && game.score >= 140 && game.level == 1) {
      game.timer = 40;
      game.totalAmmo = 20;
      game.level = 2;
    }
    if (game.timer === -1 && game.score >= 260 && game.level == 2) {
      game.timer = 40;
      game.totalAmmo = 50;
      game.level = 3;
    } else if ((game.timer === -1 && game.score < 140) || (game.timer === -1 && game.score < 260 && game.level == 2)) {
      game.gameOver = true;
    }
  }
}

function mousePressed() {
  if (mousePressed) {
    if (mouseButton === LEFT && game.ammo > 0 && game.totalAmmo > 0) {
      gunShot.play();
      game.hunter.recoil();
      game.ammo -= 1;
      game.totalAmmo -= 1;
      game.targets.filter((target) => {
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
      game.zombies.filter((zombie) => {
        if (zombie.clicked() === true) {
          game.score += 10;
          zombie.death2();
        }
      });
      game.preditors.filter((preditors) => {
        if (preditors.clicked() === true) {
          game.score += 10;
          preditors.shrink();
        }
      });
    }
    if (mouseButton === RIGHT && game.totalAmmo > 0) {
      reload.play();
      game.ammo = 5;
    }
    if (mouseButton === LEFT && game.ammo === 0) {
      click.play();
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
document.addEventListener('contextmenu', (event) => event.preventDefault());
