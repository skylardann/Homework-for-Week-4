
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(210);
  ellipseMode(CENTER);
  colorMode(HSB);
  noStroke();


  for (var posx = 0; posx <= 370; posx += 22) {
    for (var posy = 20; posy <= 370; posy += 22) {
      fill(posy + posx/100,260,100);
      ellipse(20 + posx,20 + posy, 20, 20);
    }
  }
}
