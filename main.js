const game = new Game();

function preload() {
  game.init();
}

function setup() {
  createCanvas(3000, 970);
  game.setup();
  // ambience.play();
}

function draw() {
  game.draw();
}

function mousePressed() {
  if (mousePressed) {
    game.target.clicked();
  }
}

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.zIndex = 1;
