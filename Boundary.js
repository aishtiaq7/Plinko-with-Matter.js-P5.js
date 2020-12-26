class Boundary{

    constructor(x,y,w,h){

        this.options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,w,h,this.options);
        
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
        rect(0,0, this.w,this.h);
        pop();
    }

}