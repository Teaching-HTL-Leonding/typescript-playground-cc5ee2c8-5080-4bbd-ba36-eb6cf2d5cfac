const rectDiameter = 50

let rectDiameterX: number;
let rectDiameterY: number;

let directionX = 2;
let directionY = 2;

function setup() {
  createCanvas(300, 200);
  rectDiameterX = random(0, width);
  rectDiameterY = random(0, height);
}

function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  rect(rectDiameterX, rectDiameterY, rectDiameter);

  rectDiameterX += directionX;
  rectDiameterY += directionY;

  if (rectDiameterX <= 0 || rectDiameterX >= width) {
    directionX *= -1;
  }
  if (rectDiameterY <= 0 || rectDiameterY >= height) {
    directionY *= -1;
  }
}