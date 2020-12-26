


// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine; 
var world; 
var particles =[];

var plinkos = [];
var col = 11;
var row = 12;
var plinkoRadius =5

var boundaries = [];

function setup() {
    createCanvas(800, 600);

    engine = Engine.create();
    world = engine.world;
 
    createPlinkos();

    world.gravity.y= 2;
                            //   x , y , w , h 
    boundaries.push(new Boundary(width/2, height +50, width ,100));

}

function createPlinkos(){

    var spacing = width/col;
    for ( var i = 0 ; i< row; i++){
        for ( var j = 0 ; j <col; j++){
            var x = i * spacing;
            
            if( j % 2 ==0){
                x += spacing/2;
            }
            var y = j * spacing + spacing;
            
            plinkos.push(new Plinko(x,y, plinkoRadius));
        }
    }
}

function createNewParticle(){

    var p = new Particle(315,30,10);
    particles.push(p);
}

function draw() {
    background(0, 0, 0);
    Engine.update(engine); 


    if( frameCount % 20 == 0){
        createNewParticle();
    }



    particles.forEach(particle =>{
        particle.show();
    });
    plinkos.forEach(plinko =>{
        plinko.show();
    });
    boundaries.forEach(boundary =>{
        boundary.show();
    })

}