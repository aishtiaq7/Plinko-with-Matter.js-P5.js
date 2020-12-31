class Particle{

    constructor(x,y,r){
        this.options = {
            friction : 0,
            restitution : 0.5,
            desity: 1.00
            
        }
        x += random(-3,3); // 50% change to go left or right
        this.body = Bodies.circle(x,y,r,this.options);
        this.body.label = 'particle';

        this.r = r; //radius

        this.pos = this.body.position;
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
    isOffScreen(){
        var x = this.pos.x;
        
        if( x < -10 || x >= width+10){
            World.remove(world,this.body);
            return true;
        }
    }

}