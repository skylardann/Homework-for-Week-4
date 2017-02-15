function setup() {
  createCanvas(400, 400);
}

function draw() {


  background(210);
  colorMode(HSB);
  noStroke();

  var h = 0

  for (var y = 20; y <= 380; y += 20) {
    for (var x = 20; x <= 380; x += 20) {
      fill(h, 100, 100);
      ellipse(x, y, 17, 17);

      h = h + 0.6;
    }
  }
}
