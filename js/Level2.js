function createLevel2() {
  start = new Ground(1590, 460, 20, 20, 200, "green");

  bblock1 = new Ground(1620, 320, 40, 300, 200);
  bblock2 = new Ground(1730, 200, 80, 400, 200);
  bblock3 = new Ground(1900, 280, 60, 380, 200);

  // Steps 1
  bblock4 = new Ground(1850, 430, 40, 20, 200);
  bblock6 = new Ground(1850, 320, 40, 20, 200);
  bblock8 = new Ground(1850, 210, 40, 20, 200);
  bblock10 = new Ground(1850, 100, 40, 20, 200);

  bblock5 = new Ground(1790, 375, 40, 20, 200);
  bblock7 = new Ground(1790, 265, 40, 20, 200);
  bblock9 = new Ground(1790, 155, 40, 20, 200);


  bblock11 = new Ground(1920, 50, 100, 20, 200);

  // Steps 2
  bblock12 = new Ground(1950, 120, 40, 20, 200);
  bblock13 = new Ground(1950, 210, 40, 20, 200);
  bblock14 = new Ground(1950, 300, 40, 20, 200);
  bblock15 = new Ground(1950, 390, 40, 20, 200);

  bblock16 = new Ground(2020, 120, 40, 20, 200);
  bblock17 = new Ground(2020, 210, 40, 20, 200);
  bblock18 = new Ground(2020, 300, 40, 20, 200);
  bblock19 = new Ground(2020, 390, 40, 20, 200);

  bblock20 = new Ground(2080, 250, 80, 350, 200);

  bblock21 = new Ground(2225, 235, 80, 470, 200);
  bblock22 = new Ground(2170, 455, 30, 30, "green");
  bblock23 = new Ground(2170, 15, 30, 30, "green");
  bblock24 = new Ground(2280, 455, 30, 30, "green");

  benemy1 = new Ball(1730, 480, 12, "red");

  // creating enemies on steps
  benemy2 = new Ball(1950, 110, 12, "red");
  benemy3 = new Ball(1950, 200, 12, "red");

  benemy4 = new Ball(1950, 290, 12, "red");
  benemy5 = new Ball(1950, 380, 12, "red");

  benemy6 = new Ball(2020, 110, 12, "red");
  benemy7 = new Ball(2020, 200, 12, "red");

  benemy8 = new Ball(2020, 290, 12, "red");
  benemy9 = new Ball(2020, 380, 12, "red");

  star1 = new Star(1710, 440);
  star2 = new Star(1985, 300);
  star3 = new Star(1985, 450);

  shield2 = new Shield(1920, 25);
}

function displayLevel2() {
  textSize(50);
  text("-->", 2080, 30);

  start.display();

  bblock1.display();
  bblock2.display();
  bblock3.display();
  bblock4.display();
  bblock5.display();

  bblock6.display();
  bblock7.display();
  bblock8.display();
  bblock9.display();
  bblock10.display();

  bblock11.display();
  bblock12.display();
  bblock13.display();
  bblock14.display();
  bblock15.display();

  bblock16.display();
  bblock17.display();
  bblock18.display();
  bblock19.display();
  bblock20.display();

  bblock21.display();
  bblock22.display();
  bblock23.display();
  bblock24.display();

  benemy1.display();

  benemy2.display();
  benemy3.display();

  benemy4.display();
  benemy5.display();

  benemy6.display();
  benemy7.display();

  benemy8.display();
  benemy9.display();

  star1.display();
  star2.display();
  star3.display();

  shield2.display();

  if (isBallsTouching(ball, benemy1) || isBallsTouching(ball, benemy2) || isBallsTouching(ball, benemy3) || isBallsTouching(ball, benemy4) || isBallsTouching(ball, benemy5) || isBallsTouching(ball, benemy6) || isBallsTouching(ball, benemy7) || isBallsTouching(ball, benemy8) || isBallsTouching(ball, benemy9) && isProtected === false) {
    if (isProtected === false) {
      losingSound.play();
      lives--;
      Body.setPosition(ball.ball, { x: 1620, y: 100 });
    }
  }

  if (Matter.SAT.collides(ball.ball, bblock22.ground).collided || Matter.SAT.collides(ball.ball, bblock24.ground).collided) {
    teleportingSound.play();
    Body.setPosition(ball.ball, { x: 2100, y: 50 });
  }
  if (Matter.SAT.collides(ball.ball, bblock23.ground).collided) {
    teleportingSound.play();
    Body.setPosition(ball.ball, { x: 2280, y: 50 });
  }
  if (Matter.SAT.collides(ball.ball, start.ground).collided) {
    Body.setPosition(ball.ball, { x: 1620, y: 50 });
  }

  if (ball.ball.position.x > 2400 && ball.ball.position.x < 3200) {
    World.remove(world, shield2);
    isProtected = false;
  }
}

function isBallsTouching(object1, object2) {
  if (object1.ball.position.x - object2.ball.position.x < object1.radius + object2.radius &&
    object2.ball.position.x - object1.ball.position.x < object1.radius + object2.radius &&
    object1.ball.position.y - object2.ball.position.y < object1.radius + object2.radius &&
    object2.ball.position.y - object1.ball.position.y < object1.radius + object2.radius) {
    return true;
  }
  else {
    return false;
  }
}