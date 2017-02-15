function setup() {
  createCanvas(520, 520);
  noLoop();
}

function draw() {
  background(255);
  ellipseMode(CENTER);
  colorMode(HSB);
  noStroke();

  for (var a = 30; a <= 500; a += 22) {
    for (var b = 30; b <= 500; b += 22) {
      fill(random(360),121,120);
      ellipse(a, b, 20, 20);
    }
  }
}
