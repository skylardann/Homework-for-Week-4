function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255);
  background(0);


  for (var y = 20; y <= 400; y = y + 20) {
    var startX = y;
    var endX = 400 - startX;
    for (var x = startX; x <= endX; x = x + 20) {
      ellipse(x, y, 18, 18);
  }
}
var startX = 20;
for (var y = 380; y >= 220; y = y - 20) {
  for(var x = startX; x <= y; x = x +20) {
    ellipse(x,y,18,18);
  }
  startX = startX + 20;
  }
}
