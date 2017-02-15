function setup() {
  createCanvas(500,500);
  frameRate(5);
}

function draw() {
  background(0);
  stroke(250);
  

  for(var posX = 0; posX <= 500; posX += 7) {
    
    line(posX,500,posX,random(mouseY,500));
  }
}
  
