function setup() {
    const num = Math.floor(random(0, 1_000_000));

    const digit1 = num % 10;
    const digit2 = Math.floor(num / 16) % 16;
    const digit3 = Math.floor(num / 256) % 16;
    
    createCanvas(550, 300);
    background("black");

    noFill();
    stroke("yellow");

    rect(172.5 + 0 * 75, 100, 50, 75);
    rect(172.5+ 1 * 75, 100, 50, 75);
    rect(172.5 + 2 * 75, 100, 50, 75);
  

    textAlign(CENTER, CENTER);
    fill("yellow");
    noStroke();

    text(num, width / 2, height - 20);

    textSize(30);

    text(digit3, -25 + 3 * 75, 100 + 37.5);
    text(digit2, -25 + 4 * 75, 100 + 37.5);
    text(digit1, -25 + 5 * 75, 100 + 37.5);
}