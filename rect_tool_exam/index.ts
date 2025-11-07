function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved(){
    const gridSize= 20
    background("black")
    stroke('white')
    noFill()
    
    let w= Math.abs(mouseX-width/2) *2
    w= Math.round(w/gridSize)
    let h= Math.abs(mouseY-height/2)*2
    
    rect(width / 2, height / 2,w,h)

    const area= Math.round(w /2 * h/2 * Math.PI)
    text(`Area: ${area}`, 5, height-10)
}