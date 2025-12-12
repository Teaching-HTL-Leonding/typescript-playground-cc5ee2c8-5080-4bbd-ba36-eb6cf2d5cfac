const SIZE = 400
const MARGIN = 25

let rayColor = 0;

function setup() {
  createCanvas(SIZE, SIZE)
  background("black")
  colorMode(HSB)
}

function draw() {
  background("black")
  strokeWeight(2)

  let i = MARGIN
  while (i <= SIZE - MARGIN) {
    stroke(rayColor, 100, 100)
    line(MARGIN, i, mouseX, mouseY)
    line(width - MARGIN, i, mouseX, mouseY)

    line(i, MARGIN, mouseX, mouseY)
    line(i, height- MARGIN, mouseX, mouseY)

    i += MARGIN
    rayColor = (rayColor + 0.25) % 360
  }
}