class Particle{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.4
        }
        this.r=5;
        
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;
        var ang=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(ang);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}