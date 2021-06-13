class Constraints {
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 0.02,
            damping: 0.02
        }
        this.pointB = point2;
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }
    display() {
        var pos1 = this.constraint.bodyA.position;
        var pos2 = this.pointB;
        push();
        stroke("blue");
        strokeWeight(8);
        line(pos1.x, pos1.y, pos2.x, pos2.y);
        line(pos1.x, pos1.y, pos2.x, pos2.y);
    }
    fly() {
        this.constraint.bodyA = null;
    }
    attach(body) {
        Body.setPosition(body, { x: 160, y: 80 });
        this.constraint.bodyA = body;
    }
}