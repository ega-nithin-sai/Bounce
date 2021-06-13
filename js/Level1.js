function createLevel1() {
    ablock1 = new Ground(20, 210, 40, 420, 200);
    ablock2 = new Ground(150, 250, 80, 300, 200);
    ablock3 = new Ground(300, 50, 80, 20, 200);
    ablock4 = new Ground(350, 180, 80, 20, 200);
    ablock5 = new Ground(450, 100, 80, 20, 200);

    ablock6 = new Ground(250, 250, 80, 20, 200);
    ablock7 = new Ground(250, 125, 80, 20, 200);
    ablock8 = new Ground(400, 300, 80, 20, 200);
    ablock9 = new Ground(300, 375, 80, 20, 200);
    ablock10 = new Ground(480, 210, 80, 20, 200);

    ablock11 = new Ground(480, 380, 80, 20, 200);

    ablock12 = new Ground(600, 295, 50, 350, 200);

    star4 = new Star(150, 50);
    star5 = new Star(350, 210);
    star6 = new Star(600, 100);

    // creating enemies on steps
    aenemy1 = new Ball(300, 40, 12, "red");
    aenemy2 = new Ball(350, 170, 12, "red");
    aenemy3 = new Ball(450, 90, 12, "red");

    aenemy4 = new Ball(250, 240, 12, "red");
    aenemy5 = new Ball(250, 115, 12, "red");

    aenemy6 = new Ball(400, 290, 12, "red");
    aenemy7 = new Ball(300, 365, 12, "red");

    aenemy8 = new Ball(480, 200, 12, "red");

    shield1 = new Shield(480, 350);
}

function displayLevel1() {
    ablock1.display();
    ablock2.display();
    ablock3.display();
    ablock4.display();
    ablock5.display();

    ablock6.display();
    ablock7.display();
    ablock8.display();
    ablock9.display();
    ablock10.display();

    ablock11.display();
    ablock12.display();

    star4.display();
    star5.display();
    star6.display();

    aenemy1.display();

    aenemy2.display();
    aenemy3.display();

    aenemy4.display();
    aenemy5.display();

    aenemy6.display();
    aenemy7.display();

    aenemy8.display();

    shield1.display();

    if (isBallsTouching(ball, aenemy1) || isBallsTouching(ball, aenemy2) || isBallsTouching(ball, aenemy3) || isBallsTouching(ball, aenemy4) || isBallsTouching(ball, aenemy5) || isBallsTouching(ball, aenemy6) || isBallsTouching(ball, aenemy7) || isBallsTouching(ball, aenemy8)) {
        if (isProtected === false) {
            lives--;
            Body.setPosition(ball.ball, { x: 20, y: 450 });
            losingSound.play();
        }
    }

    if (temp === 0 && keyDown("space")) {
        constraint = new Constraints(ball.ball, { x: 85, y: 190 });

        temp = 1;
    }
    else if (temp === 1 && keyDown("b")) {
        constraint.fly();
        temp = 0;
    }

    if (temp > 0) {
        constraint.display();
    }

    if (ball.ball.position.x > 800 && ball.ball.position.x < 1600) {
        World.remove(world, shield1);
        isProtected = false;
    }
}