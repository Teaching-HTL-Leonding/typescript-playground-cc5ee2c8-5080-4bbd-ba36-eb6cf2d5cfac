function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

function mouseMoved() {
  const SNAP = 40; // marker must snap every 40 pixels
  const MARKERSIZE = 10; // size of marker

  background("lightblue");

  const x = round(mouseX / SNAP) * SNAP
  const y = round(mouseY / SNAP) * SNAP

  stroke("white")
  strokeWeight(3)
  line(x - MARKERSIZE, y, x + MARKERSIZE, y)
  line(x,y-MARKERSIZE, x, y + MARKERSIZE)

  stroke("yellow")
  fill("black")
  textSize(30)
  textAlign(RIGHT)
  text(`x=${x}, y=${y}`, width-5 , height-5)
  // Add your code here
}
