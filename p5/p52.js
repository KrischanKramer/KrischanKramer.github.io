//Krischan Kramer Final

//empty array to store fireworks
fireworks = [];

//3rd peramater changes render mode to 3D mode and changes position of orgin to the center of the canvas
function setup() {
  //WEBGL enables 3 dementions by introducing z
  createCanvas(600, 600, WEBGL);
  //createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);
  //background(238,35,92);
  
  //movement added by rotating 
  rotateX(sin(frameCount / 2) * 360);
  rotateY(sin(frameCount / 4) * 360);
  rotateZ(sin(frameCount / 6) * 360);
  
  //probability of firework
  if (random(1) > 0.975){
  
  //sets random orgin for fireworks in all directions surrounding center of canvas
  var x = random(-200, 200);
  var y = random(-200, 200);
  var z = random(-200, 200);
  var pos = createVector(x, y, z);
  
  //for loop controls number of spheres per firework
  for (var i = 0; i < 60; i++) {
  
  //Colors mapped to framecount to make them transition smoothly 
  // + random to add variation within each firework
      var r = map(sin(frameCount), -1, 1, 0, 255) + random(-50, 50);
      var g = map(sin(frameCount), -1, 1, 255, 0) + random(-50, 50);
      var b = map(sin(frameCount), -1, 1, 0, 255) + random(-50, 50);
      var c = color(r, g, b);
      
      //For each loop add a firework to the array
      var f = new Firework(pos, c);
      fireworks.push(f);
    }
  }
  
  //for each firework in array call its methods
  for (var i = fireworks.length - 1; i >= 0; i--){
  //Sets distance spheres can travel firworks from array using dist function, in 3D this was tricky to figure out because it takes 6 agurements, an x,y,& z position of both objects, and WEBGL changes the orgin to the center
    if (dist(fireworks[i].pos.x, fireworks[i].pos.y, fireworks[i].pos.z, 0, 0, 0) < 1000) 
    {fireworks[i].update();
     fireworks[i].show();}
    
    //Shperes removed after each travels away from orgin of firework 
    else (fireworks.splice(i, 1));
 } 
}

//random3D used to get random unit a vector for velocity & direction in all directions
class Firework {
  constructor(pos, c) {
    this.pos = createVector(pos.x, pos.y, pos.z);
    //sets random velocity for each sphere
    this.vel = p5.Vector.random3D().mult(random(4, 6));
    
    //Color property
    this.c = c
    //Width property sets random width of each sphere
    this.w = random(1, 15);
  }
  //Normalize velocity and mult by random value
  update() {
    this.pos.add(this.vel);
  }
  //Display fireworks
  show() {
    push();
    noStroke();
    
    //fills color with color property
    fill(this.c);
    
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(this.w);
    
    pop();
  }  
}