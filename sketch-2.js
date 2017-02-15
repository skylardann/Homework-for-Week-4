function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {

  for (var i = 25; i <= 375; i += 25) {
    for (var j = 25; j <= 375; j += 25) {

      ellipse(i, j, 20, 20);


      fill(255);

    }
  }

}
