class Boundary{

    constructor(x,y,w,h){

        this.options = {
            isStatic : true,
            friction : 0,
            restitution : 0.5
        }
        this.body = Bodies.rectangle(x,y,w,h,this.options);
        this.body.label = 'boundary';
        
        this.w = w;
        this.h = h;

        World.add(world,this.body);
        }

    show(){
        fill(0,255,0);
        stroke(255);

        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0, this.w,this.h);
        pop();
    }

    

}