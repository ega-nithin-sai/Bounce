const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = 0;

var engine, world;
var ground;
var ball;

var block1, block2, block3, block4, block5
var block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15
var block16, block17, block18, block19, block20;
var block21, block22, block23;

var score = 0;
var lives = 5;

var cameraX = -400;

var temp = 0;

var constraint;

var isProtected = false;

var shieldImg;

var isLaser1On = true;
var isLaser2On = true;

var laser;

var tempX = 100;
var tempY = 130;

var losingSound,buttonPressedSound,teleportingSound,bouncingSound,backgroundMusic;

function preload() {
  streamers1 = loadAnimation("images/Streamers1-1.gif","images/Streamers1-2.gif","images/Streamers1-3.gif");

  hangingStreamers = loadImage("images/Hanging Streamers.png");
}
function setup() {
  createCanvas(800, 500);

  backgroundMusic = createAudio("sounds/backgroundMusic.mp3");
  backgroundMusic.loop();
  backgroundMusic.volume(0.3);

  losingSound = createAudio("sounds/losing.wav");
  buttonPressedSound = createAudio("sounds/buttonPressed.wav");
  teleportingSound = createAudio("sounds/teleporting.mp3");
  bouncingSound = createAudio("sounds/bouncing.mp3");

  engine = Engine.create();
  world = engine.world;

  youWin1 = createSprite(4100,350,20,20);
  youWin1.addAnimation("s1",streamers1);
  youWin1.scale = 0.25;

  youWin2 = createSprite(4700,350,20,20);
  youWin2.addAnimation("s2",streamers1);
  youWin2.mirrorX(-1);
  youWin2.scale = 0.25;

  youWin3 = createSprite(4425,70,20,20);
  youWin3.addImage(hangingStreamers);
  youWin3.scale = 0.3;
}

function draw() {
  background(0);

  if (gameState === 1) {
    ground = new Ground(1600, 485, 48000, 30, 800);

    ball = new Ball(20, 450, 12, "blue");

    createLevel1();

    createLevel2();

    createLevel3();

    gameState = 2;
  }

  if (gameState === 2) {
    camera.x = cameraX;

    ground.display();
    ball.display();

    displayLevel1();

    displayLevel2();

    displayLevel3();

    Engine.update(engine);

    strokeWeight(5);
    stroke("blue");
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text("Score: " + score, ball.ball.position.x, 50);
    text("Lives: " + lives, ball.ball.position.x, 75);

    textSize(100);
    text("LEVEL 1", -400, 250);
    text("LEVEL 2", 1200, 250);
    text("LEVEL 3", 2800, 250);

    // if You Win
    imageMode(CENTER);
    text("🎉 YOU WIN 🎉", 4400, 250);

    textSize(45);
    text("🎊 CONGRATULATIONS 🎊", 4400, 430);

    if (lives <= 0) {
      stroke("red");
      strokeWeight(10);
      text("GAME OVER", cameraX, height / 2);
    }

    // camera.x = ball.ball.position.x;

    if (cameraX < 400) {
      cameraX += 10;
    }

    if (ball.ball.position.x > 800 && cameraX < 2000) {
      cameraX += 10;
    }

    if (ball.ball.position.x > 2400 && cameraX < 3600) {
      cameraX += 10;
    }

    if (ball.ball.position.x > 4000 && cameraX < 4400) {
      cameraX += 10;
    }

    // movement with arrow keys or WSAD
    if (keyDown(RIGHT_ARROW) || keyDown("d")) {
      Body.setPosition(ball.ball, { x: ball.ball.position.x + 5, y: ball.ball.position.y });
    }
    if (keyDown(LEFT_ARROW) || keyDown("a")) {
      Body.setPosition(ball.ball, { x: ball.ball.position.x - 5, y: ball.ball.position.y });
    }
    if (keyDown(UP_ARROW) || keyDown("w")) {
      Body.setPosition(ball.ball, { x: ball.ball.position.x, y: ball.ball.position.y - 5 });
    }
    if (keyDown(DOWN_ARROW) || keyDown("s")) {
      Body.setPosition(ball.ball, { x: ball.ball.position.x, y: ball.ball.position.y + 5 });
    }
  }
  else {
    instructions();
  }
}