let x = 150
let y = 50
let size = 50
let dx = 2
let dy = 2
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
        x += dx
        y += dy
    }

    if (x + size >= width|| x - size <= 0) {
        dx *= -1
    }
    if(y+size>= height || y-size<= 0) {
        dy*= -1
    }
    if()




}
