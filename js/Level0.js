function instructions() {
    fill("lightgreen");
    textSize(20);
    push();
    fill("lightblue");
    textSize(40);
    textAlign(CENTER);
    text("BOUNCE", width / 2, 50);
    pop();

    text("Instructions:", tempX, tempY);
    text("1. Use Arrow Keys or WSAD to control the blue ball.", tempX, tempY + 30);
    text("2. You have five Lives.", tempX, tempY + 60);
    text("3. Collect the stars for extra points.", tempX, tempY + 90);
    text("4. Avoid the enemies(Red Colour Balls).", tempX, tempY + 120);
    text("5. In level 1, press space to connect to sligshot. The sligshot is located in", tempX, tempY + 150);
    text("between the first two pillars.", tempX + 23, tempY + 180);
    text("6. Press b to release the ball from slingshot.", tempX, tempY + 210);
    text("7. The green blocks in between the game can be used to teleport.", tempX, tempY + 240);
    text("8. There are somes buttons to be pressed in level 3.", tempX, tempY + 270);
    text("9. The shield will protect you from enemies but not the lasers.", tempX, tempY + 300);
    text("10. Press Enter to start.", tempX, tempY + 330);

    if (keyDown("enter")) {
        gameState = 1;
    }
}