class LowerLaser {
    constructor(x, y, w, h, pos) {
        var options = {
            density: 1.5,
            isStatic: true
        }
        this.laser1 = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.laser1);

        this.laser2 = Bodies.rectangle(x + 200, y, w, h, options);
        World.add(world, this.laser2);

        this.pos = pos;
        this.width = w;
        this.height = h;
    }
    display() {
        if (isLaser2On === true) {
            fill("red");
            rectMode(CENTER);
            rect(this.laser1.position.x, this.laser1.position.y, this.width, this.height);
            rect(this.laser2.position.x, this.laser2.position.y, this.width, this.height);

            if (Matter.SAT.collides(ball.ball, this.laser1).collided || Matter.SAT.collides(ball.ball, this.laser2).collided) {
                lives--;
                Body.setPosition(ball.ball, this.pos);
            }
        }

        if (isLaser2On === false) {
            World.remove(world, this.laser1);
            World.remove(world, this.laser2);
        }
    }
}