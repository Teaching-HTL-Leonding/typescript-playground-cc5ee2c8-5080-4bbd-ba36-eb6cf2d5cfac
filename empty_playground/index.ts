let nextFlower = true;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  flower(nextFlower);
}

function mouseClicked() {
  nextFlower = !nextFlower;
  flower(nextFlower);
}

function flower(style: boolean) {
  push();
  translate(random(0, width), random(0, height));
  scale(0.5);

  stroke("black");
  strokeWeight(4);

  let colorNumber = floor(random(3));

  if (colorNumber === 0) {
    fill("red");
  } else if (colorNumber === 1) {
    fill("green");
  } else if (colorNumber === 2) {
    fill("blue");
  }

  circle(200, 100, 150);
  circle(300, 200, 150);
  circle(200, 300, 150);
  circle(100, 200, 150);

  fill("yellow");
  circle(200, 200, 150);

  pop();
}