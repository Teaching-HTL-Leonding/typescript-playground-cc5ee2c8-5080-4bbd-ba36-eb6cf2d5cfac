let x = 150
let y = 50
let size = 50
let directionx = 2
let directiony = 2
let countdown = 10

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background("gold");


    line(x, y - size, x + size, y)
    line(x + size, y, x, y + size)
    line(x, y + size, x - size, y)
    line(x - size, y, x, y - size)
    stroke("white")
    strokeWeight(5)

    fill("black")
    textAlign(CENTER, CENTER)
    textSize(20)
    text(countdown, x, y)

    let hit = false

    if (countdown > 0) {
        x += directionx
        y += directiony
    }

    if (x + size >= width) {
        directionx *= -1
        countdown -= 1
    }
    if (x - size <= 0) {
        directionx *= -1
        countdown -= 1
    }
    if (y + size >= height) {
        directiony *= -1
        if(countdown>0)
        countdown -= 1
    }
    if (y - size <= 0) {
        directiony *= -1
        if(countdown>0)
        countdown -= 1
    }

}