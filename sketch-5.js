function setup() {
  createCanvas(400, 400);
  background(0);

  noStroke();
  fill(255);
  
  
  
  for ( var y = 20; y <= 200; y = y + 20) {
    var startX = y;
    var endX = 400-startX;
    for (var x = startX; x <= endX; x = x + 20)
      ellipse(x,y,18,18);
  }
}
