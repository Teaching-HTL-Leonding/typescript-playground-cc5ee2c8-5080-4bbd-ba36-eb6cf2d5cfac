const SIZE = 400; 
const MARGIN = 25;

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2)


  let i = MARGIN;
  while (i <= SIZE - MARGIN) {
    stroke("yellow");
    line(MARGIN, i, mouseX, mouseY);
    line(width - MARGIN, i, mouseX, mouseY);

    stroke("lime");
    line(i, MARGIN, mouseX, mouseY);
    line(i, height - MARGIN, mouseX, mouseY);

    i += MARGIN;
  }
}
