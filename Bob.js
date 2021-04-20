class Bob{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:0.6
        }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, this.r/2, options)
    World.add(world, this.body)
    }

    force(){
        if(keyDown === LEFT_ARROW){
            this.body.position.x += 20
        }
    }

    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        ellipse(0, 0, this.r, this.r)
        pop()
    }
    

}