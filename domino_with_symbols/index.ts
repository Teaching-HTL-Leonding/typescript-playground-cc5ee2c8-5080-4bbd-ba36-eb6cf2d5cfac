function setup() {
  createCanvas(400, 200);
  background("lightgray");

  const diceSize = 200;

  const symbol1 = floor(random(1, 7));
  const symbol2 = floor(random(1, 7));

  drawDomino(symbol1, symbol2, diceSize);
}

function drawSymbol(symbol, centerX, centerY, size) {
  switch (symbol) {
    case 1:
      fill("white");
      stroke("white");
      strokeWeight(2);
      rectMode(CENTER);
      rect(centerX, centerY, size, size);
      rectMode(CORNER);
      noStroke();
      break;

    case 2:
      fill("white");
      noStroke();
      circle(centerX, centerY, size);
      break;

    case 3:
      fill("white");
      stroke("white");
      strokeWeight(2);
      triangle(
        centerX, centerY - size / 2,
        centerX - size / 2, centerY + size / 2,
        centerX + size / 2, centerY + size / 2
      );
      noStroke();
      break;

    case 4:
      fill("white");
      textAlign(CENTER, CENTER);
      textSize(size);
      text("⭐", centerX, centerY);
      break;

    case 5:
      fill("white");
      textAlign(CENTER, CENTER);
      textSize(size);
      text("❤️", centerX, centerY);
      break;

    case 6:
      fill("white");
      textAlign(CENTER, CENTER);
      textSize(size);
      text("🍀", centerX, centerY);
      break;
  }
}

function drawDomino(symbol1, symbol2, diceSize) {
  fill("black");
  noStroke();
  rect(0, 0, diceSize * 2, diceSize);

  const size = 80;

  drawSymbol(symbol1, diceSize / 2, diceSize / 2, size);
  drawSymbol(symbol2, diceSize + diceSize / 2, diceSize / 2, size);

  // Trennlinie
  stroke("white");
  strokeWeight(6);
  line(diceSize, 20, diceSize, diceSize - 20);
}