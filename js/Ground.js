class Ground {
    constructor(x, y, w, h, cl) {
        var option = {
            isStatic: true,
            friction: 0
        }
        this.ground = Bodies.rectangle(x, y, w, h, option);
        World.add(world, this.ground);
        this.width = w;
        this.height = h;
        this.colour = cl;
    }
    display() {
        rectMode(CENTER);
        fill(this.colour);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
    }
}