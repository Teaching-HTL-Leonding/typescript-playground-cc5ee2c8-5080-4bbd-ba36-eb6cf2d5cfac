function setup() {
    createCanvas(300, 300)
    background("black")

    noFill()
    stroke("yellow")
    translate(10, 10)
    drawPattern()
      
}

function drawPattern() {
    for(let x = 0; x < 15; x++) {    
    drawColumn(x * 20)
    }

}

function drawColumn(xCoord: number) {
     for(let y= 0; y < 15; y++) {
         drawCircle(xCoord, y * 20)
    }
}


function drawCircle(xCoord: number, yCoord: number) {
    circle(xCoord, yCoord, 20)
    line(xCoord - 5, yCoord, xCoord+ 5, yCoord)
    line(xCoord , yCoord - 5, xCoord, yCoord + 5)

}