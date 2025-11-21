function setup() {
  const dicePointDiameter: number = 30;

  createCanvas(200, 200);
  background("black");

  const dice = Math.floor(random(1, 7));

  noStroke();
  fill("white");

  const x1 = width / 4;
  const x2 = width / 2;
  const x3 = (3 * width) / 4;

  const y1 = height / 4;
  const y2 = height / 2;
  const y3 = (3 * height) / 4;

  if (dice === 1) {
    circle(x2, y2, dicePointDiameter);
  } else if (dice === 2) {
    circle(x1, y1, dicePointDiameter);
    circle(x3, y3, dicePointDiameter);
  } else if (dice === 3) {
    circle(x1, y1, dicePointDiameter);
    circle(x2, y2, dicePointDiameter);
    circle(x3, y3, dicePointDiameter)
     } else if (dice === 4) {
    circle(x1, y1, dicePointDiameter);
    circle(x3, y1, dicePointDiameter);
    circle(x1, y3, dicePointDiameter);
    circle(x3, y3, dicePointDiameter);
  } else if (dice === 5) {
    circle(x1, y1, dicePointDiameter);
    circle(x3, y1, dicePointDiameter);
    circle(x1, y3, dicePointDiameter);
    circle(x3, y3, dicePointDiameter);
    circle(x2, y2, dicePointDiameter);
  } else if (dice === 6) {
    circle(x1, y1, dicePointDiameter);
    circle(x1, y2, dicePointDiameter);
    circle(x1, y3, dicePointDiameter);
    circle(x3, y1, dicePointDiameter);
    circle(x3, y2, dicePointDiameter);
    circle(x3, y3, dicePointDiameter);
  }
}