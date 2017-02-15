function setup() {
  createCanvas(575, 575);
  background(5);
}

function draw() {
  
  ellipseMode(CENTER)
  
  fill(255,255,255);
  

  for (var a = 20; a <= 575; a += 20) {
    ellipse(a, a, 20, 20);
  }
}
