class Shield {
    constructor(x, y) {
        this.width = 35;
        this.height = 35;
        var option = {
            isStatic: true
        }
        this.shield = Bodies.rectangle(x, y, this.width, this.height, option);
        World.add(world, this.shield);
        this.shieldImg = loadImage("images/Shield.png");
        this.sp = createSprite(this.shield.position.x, this.shield.position.y, this.width, this.height)
        this.sp.addImage(this.shieldImg)
        this.sp.scale = 0.05;

        this.shieldSound = createAudio("sounds/star.mp3");
    }

    display() {
        if (Matter.SAT.collides(ball.ball, this.shield).collided) {
            this.shieldSound.play();
            isProtected = true;
            Body.setPosition(this.shield,{x: 11000, y:11000});
            World.remove(world, this.shield);
            this.sp.destroy()
        }
        else {
            drawSprites();
        }

        if (isProtected === true) {
            imageMode(CENTER);
            image(this.shieldImg, ball.ball.position.x + 10, ball.ball.position.y, 25, 25);
          }
    }
}