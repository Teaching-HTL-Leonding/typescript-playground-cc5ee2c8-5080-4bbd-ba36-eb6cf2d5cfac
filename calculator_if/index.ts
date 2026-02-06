const MARGIN_NUM = 10;

let num: number = 0;
let lineHeight: number = 0;
let cellWidth: number = 0;

function setup() {
    createCanvas(300, 500);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");

    noStroke();
    fill("white");
    rect(MARGIN_NUM, MARGIN_NUM, width - 2 * MARGIN_NUM, lineHeight - 2 * MARGIN_NUM);

    stroke("black");
    fill("black");
    strokeWeight(2);
    textSize(50);

    textAlign(RIGHT, CENTER);
    text(num, width - MARGIN_NUM * 2, lineHeight / 2);

    textAlign(CENTER, CENTER);

    let y = lineHeight * 1;
    line(0, y, width, y);
    text('7', cellWidth * 0 + cellWidth / 2, y + lineHeight / 2);
    text('8', cellWidth * 1 + cellWidth / 2, y + lineHeight / 2);
    text('9', cellWidth * 2 + cellWidth / 2, y + lineHeight / 2);

    y += lineHeight;
    line(0, y, width, y);
    text('4', cellWidth * 0 + cellWidth / 2, y + lineHeight / 2);
    text('5', cellWidth * 1 + cellWidth / 2, y + lineHeight / 2);
    text('6', cellWidth * 2 + cellWidth / 2, y + lineHeight / 2);

    y += lineHeight;
    line(0, y, width, y);
    text('1', cellWidth * 0 + cellWidth / 2, y + lineHeight / 2);
    text('2', cellWidth * 1 + cellWidth / 2, y + lineHeight / 2);
    text('3', cellWidth * 2 + cellWidth / 2, y + lineHeight / 2);

    y += lineHeight;
    line(0, y, width, y);
    text('0', cellWidth * 0.5 + cellWidth / 2, y + lineHeight / 2);
    text('C', cellWidth * 2 + cellWidth / 2, y + lineHeight / 2);


    let x = cellWidth * 1;
    line(x, lineHeight, x, height - lineHeight);

    x += cellWidth;
    line(x, lineHeight, x, height);

}

function mouseClicked {
    
}