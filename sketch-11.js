function setup() {
  createCanvas(500,500);
  frameRate(8);
}

function draw() {
  background(0);
  stroke(250);
  

  for(var posX = 0; posX <= 499; posX += 7) {
    line(posX,500,posX,random(0,500));
  }
}
  
