class Star {
    constructor(x, y) {
        this.width = 35;
        this.height = 35;
        var option = {
            isStatic: true
        }
        this.star = Bodies.rectangle(x, y, this.width, this.height, option);
        World.add(world,this.star);
        this.starImg = loadImage("images/Star.png");
        this.visibility = 255;
        this.sp = createSprite(this.star.position.x, this.star.position.y, this.width, this.height)
        this.sp.addImage(this.starImg)
        this.sp.scale = 0.025;
        
        this.starSound = createAudio("sounds/star.mp3");
    }

    display() {
        if (Matter.SAT.collides(ball.ball, this.star).collided) {
            this.starSound.play();
            score += 5;
            Body.setPosition(this.star,{x: 10000, y:10000});
            World.remove(world,this.star);
            this.sp.destroy()
        }
        else {
            drawSprites();
        }
    }
}