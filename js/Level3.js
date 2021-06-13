function createLevel3() {
    startLevel3 = new Ground(3180, 245, 40, 450, "green");

    divider = new Ground(3600, 300, 800, 20, 200);

    // platform 1
    cblock1 = new Ground(3300, 100, 150, 80, 200);

    // steps 1
    cblock2 = new Ground(3450, 150, 80, 20, 200);
    cblock3 = new Ground(3550, 80, 80, 20, 200);
    cblock4 = new Ground(3650, 140, 80, 20, 200);
    cblock5 = new Ground(3550, 220, 80, 20, 200);
    cblock6 = new Ground(3400, 240, 80, 20, 200);

    // platform 2
    cblock7 = new Ground(3900, 200, 200, 100, 200);

    cblock8 = new Ground(3930, 275, 40, 40, "green");

    button1 = new Ground(3900, 140, 20, 20, 200);

    cenemy1 = new Ball(3550, 70, 12, "red");
    cenemy2 = new Ball(3650, 130, 12, "red");

    cenemy3 = new Ball(3550, 210, 12, "red");
    cenemy4 = new Ball(3400, 230, 12, "red");

    shield3 = new Shield(3450, 120);

    laser1 = new UpperLaser(3790,225,10,150,{ x: 3300, y: 50 });

    star7 = new Star(3830, 270);
    star8 = new Star(3900, 100);





    // Lower Level
    cblock9 = new Ground(3400, 375, 100, 20, 200);

    cblock10 = new Ground(3540, 430, 75, 15, 200);
    cblock11 = new Ground(3660, 430, 75, 15, 200);
    cblock12 = new Ground(3600, 370, 100, 15, 200);

    // for steps
    cblock13 = new Ground(3800, 460, 75, 20, 200);
    cblock14 = new Ground(3840, 435, 75, 20, 200);
    cblock15 = new Ground(3880, 410, 75, 20, 200);
    cblock16 = new Ground(3920, 385, 75, 20, 200);
    cblock17 = new Ground(3960, 360, 75, 20, 200);

    cblock18 = new Ground(4010, 150, 20, 320, 200);
    cblock19 = new Ground(4010, 410, 20, 120, 200);

    laser2 = new LowerLaser(3500,380,10,180,{ x: 3300, y: 50 });

    button2 = new Ground(3400, 355, 20, 20, 200);

    star9 = new Star(3600, 340);
}

function displayLevel3() {
    startLevel3.display();

    cblock1.display();
    cblock2.display();
    cblock3.display();
    cblock4.display();
    cblock5.display();

    cblock6.display();
    cblock7.display();
    cblock8.display();
    cblock9.display();
    cblock10.display();

    cblock11.display();
    cblock12.display();
    cblock13.display();
    cblock14.display();
    cblock15.display();

    cblock16.display();
    cblock17.display();

    if (isLaser1On === true) {
        fill("red");
    } else {
        fill("green");
    }
    // for button 1
    if (Matter.SAT.collides(ball.ball, button1.ground).collided && isLaser1On === true) {
        buttonPressedSound.play();
        isLaser1On = false
    }
    rect(button1.ground.position.x, button1.ground.position.y, 20, 20);

    if (isLaser2On === true) {
        fill("red");
    } else {
        fill("green");
    }
    // for button 2
    if (Matter.SAT.collides(ball.ball, button2.ground).collided && isLaser2On === true) {
        buttonPressedSound.play();
        isLaser2On = false
    }
    rect(button2.ground.position.x, button2.ground.position.y, 20, 20);


    if (Matter.SAT.collides(ball.ball, startLevel3.ground).collided) {
        Body.setPosition(ball.ball, { x: 3300, y: 50 });
    }

    if (Matter.SAT.collides(ball.ball, cblock8.ground).collided) {
        teleportingSound.play();
        Body.setPosition(ball.ball, { x: 3300, y: 450 });
    }

    cenemy1.display();
    cenemy2.display();
    cenemy3.display();
    cenemy4.display();

    laser1.display();
    laser2.display();

    divider.display();

    shield3.display();

    star7.display();
    star8.display();
    star9.display();

    if (isBallsTouching(ball, cenemy1) || isBallsTouching(ball, cenemy2) || isBallsTouching(ball, cenemy3) || isBallsTouching(ball, cenemy4)) {
        if (isProtected === false) {
            losingSound.play();
            lives--;
            Body.setPosition(ball.ball, { x: 3300, y: 50 });
        }
    }
}