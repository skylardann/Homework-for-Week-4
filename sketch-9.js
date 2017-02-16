function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  stroke(225);

  for (var i = 20; i <= 480; i += 10) {
    line(i, 20, 20, i);
  }
  
  for (var j = 30; j < 490; j += 10) {
    line(480, j, j, 480);
  }
  
  fill(0);
  noStroke(0);
  textSize(400);
  text("P",140,400);

}
