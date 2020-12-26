class Plinko{

    constructor(x,y,r){

        this.options = {
            isStatic : true,
            restitution : 1,
            friction : 0,
        }
        this.body = Bodies.circle(x,y,r,this.options);
        this.r = r; //radius
        this.r = r; //radius
        
        World.add(world,this.body);
        }

    show(){
        fill(0,255,0);
        stroke(255);

        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        ellipse(0,0, this.r*2);
        pop();
    }

}