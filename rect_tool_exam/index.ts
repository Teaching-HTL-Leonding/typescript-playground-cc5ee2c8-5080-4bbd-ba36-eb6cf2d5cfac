function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
    background("black")
    stroke('white')
    noFill()

    let w = (mouseX - width / 2) * 2
    let h = (mouseY - height / 2) * 2

    rect(width / 2 - w / 2, height / 2 - h / 2, w, h)

    stroke("lightgrey")
    strokeWeight(1)
    line(width / 2 - w / 2, height / 2, width / 2 + w / 2, height / 2);
    line(width / 2, height / 2 - h / 2, width / 2, height / 2 + h / 2);

    noStroke();
    fill("lightgray");
    textAlign(RIGHT);
    text(`${w}`, width / 2 - w / 2 - 5, height / 2 - 5);
    text(`${h}`, width / 2, height / 2 - h / 2 - 5);

    textAlign(LEFT)
    const area =Math.round (w * h)
    text(`Area: ${area}`, 5, height - 10)
}