
function setup() {
  createCanvas(400, 400);
  background(55);
}


function draw() {

  for (var i = 11; i <= 380; i += 11) {
    for (var j = 11; j <= 380; j += 11) {
      rect(i, j, 11, 11);
      stroke(255);
      fill(55);

    }
  }

}
