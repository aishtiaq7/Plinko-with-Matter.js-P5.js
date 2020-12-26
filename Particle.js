class Particle{

    constructor(x,y,r){
        this.options = {
            friction : 0,
            restitution : 0.5,
            
        }
        this.body = Bodies.circle(x,y,r,this.options);
        this.r = r; //radius
        this.r = r; //radius
        
        World.add(world,this.body);
        }

    show(){
        fill(255);
        stroke(255);

        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        ellipse(0,0, this.r*2);
        pop();
    }

}