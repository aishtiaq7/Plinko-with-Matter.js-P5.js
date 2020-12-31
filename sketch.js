
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Events = Matter.Events;

var engine; 
var world; 
var particles =[];

var plinkos = [];
var col = 11;
var row = 5;
var plinkoRadius =16

var spacing = 0;

var boundaries = [];

function preload(){

    //There was this problem with p5.js not supporting sound
    // var ding = loadSound('ding.mp3');
}

function setup() {
    createCanvas(800, 600);

    engine = Engine.create();
    world = engine.world;
    
    Events.on(engine, 'collisionStart', pairsCollision);
    world.gravity.y= 0.7;
    
    // bottom bounary            //   x , y , w , h 
    boundaries.push(new Boundary(width/2, height +50, width ,100));
    
    createPlinkos();
    createBuckets();
}

function pairsCollision(event){
    var pairs  = event.pairs;
    for ( var i=0; i<pairs.length; i++){
        var labelA = pairs[i].bodyA.label;
        var labelB = pairs[i].bodyB.label;

        if(labelA == 'particle' && labelB =='plinko'){
            // ding.play();
        }
        if(labelA == 'plinko' && labelB =='particle'){
            // ding.play();
        }
    }
}

function createBuckets(){

    for ( var i = 0; i < col; i++){
        var x = i * spacing + spacing/2;
        var w = 10; 
        var h = 100;
        var y = height - h/2;

        var b = new Boundary (x,y,w,h);
        boundaries.push(b);
    }

}

function createPlinkos(){
    spacing = width/col;

    for ( var j = 0 ; j< row; j++){
        for ( var i = 0 ; i <col; i++){
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

    var p = new Particle(width/2,30,10);
    particles.push(p);
}

function draw() {
    background(0, 0, 0);
    Engine.update(engine); 

    if( frameCount % 60 == 0){
        createNewParticle();
    }

    // Remove particles once they are off screen
    for( var i =0 ; i< particles.length; i++){
        particles[i].show();

        if(particles[i].isOffScreen()){
            console.log(`removing a particle.`);
            console.log(`particles.length:${particles.length}`);
            particles.splice(i,1);
            i--;
        }
    }

    plinkos.forEach(plinko =>{
        plinko.show();
    });
    boundaries.forEach(boundary =>{
        boundary.show();
    })

}