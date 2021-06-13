class UpperLaser {
    constructor(x, y, w, h, pos) {
        var options = {
            density: 1.5,
            isStatic: true
        }
        this.laser = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.laser);

        this.pos = pos;
        this.width = w;
        this.height = h;
    }
    display() {
        if (isLaser1On === true) {
            fill("red");
            rectMode(CENTER);
            rect(this.laser.position.x, this.laser.position.y, this.width, this.height);

            if (Matter.SAT.collides(ball.ball, this.laser).collided) {
                lives--;
                Body.setPosition(ball.ball, this.pos);
                losingSound.play();
            }
        }

        if (isLaser1On === false) {
            World.remove(world, this.laser);
        }
    }
}