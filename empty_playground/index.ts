function setup() {
    createCanvas(500, 500)
    background("black")

    stroke("yellow")
    strokeWeight(3)
    fill("aqua")

    for (let i = 0; i < 3; i++) {
        drawCircle(75, true)
        translate(100, 0)
    }
}

function drawCircle(diameter: number, hasLines: boolean) {
    circle(150, 150, diameter)
    if (hasLines) {
        line(150, 100, 150, 200)
        line(100, 150, 200, 150)
    }
}