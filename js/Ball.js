class Ball {
    constructor(x, y, r, cl) {
        var options = {
            restitution: 0.5,
            friction: 0.5,
            density: 1.5
        }
        this.ball = Bodies.circle(x, y, r, options);
        this.radius = r;
        this.color = cl;
        World.add(world, this.ball);
    }
    display() {
        // ellipseMode(RADIUS);
        fill(this.color);
        // ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius);
        circle(this.ball.position.x, this.ball.position.y, this.radius * 2);
    }
}