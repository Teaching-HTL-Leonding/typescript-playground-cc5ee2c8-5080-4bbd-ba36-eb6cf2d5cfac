function setup() {
  createCanvas(200, 200);
  background("lightgray");

  const diceSize = 200; // size of the square (width and height)

  const symbol = floor(random(1, 7));

  // draw black background
  fill("black");
  noStroke();
  rect(0, 0, diceSize, diceSize);

  const centerX = diceSize / 2;
  const centerY = diceSize / 2;
  const size = 80;

  switch (symbol) {
  
  case 1:
    rectMode(CENTER)
    fill("white")
    stroke("white")
    strokeWeight(2)
    rect(centerX, centerY, size, size)
    rectMode(CORNER)
    noStroke()
    break

    case 2:
      fill("white")
      noStroke()
      circle(centerX, centerY, size)
      break

    case 3:
      fill("white")
      stroke("white")
      strokeWeight(2)

    triangle (centerX, centerY - size / 2,
        centerX - size / 2, centerY + size / 2,
        centerX + size / 2, centerY + size / 2
      )

    noStroke()
    break

    case 4:
      fill("white")
      textAlign(CENTER, CENTER)
      textSize(size)
      text("⭐", centerX, centerY)
      break

    case 5:
      fill("white")
      textAlign(CENTER, CENTER)
      textSize(size)
      text("❤️", centerX, centerY)
      break

    case 6:
      fill("white")
      textAlign(CENTER, CENTER)
      textSize(size)
      text("🍀", centerX, centerY)
      break
  }
}