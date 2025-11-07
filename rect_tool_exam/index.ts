function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved(){
    background("black")
    stroke('white')
    noFill()
    
    let w= (mouseX-width/2) *2
    let h= (mouseY-height/2)*2
   
    rect(width /2-w, height / 2-h, w, h)

    
    const area= Math.round(w /2 * h/2 * Math.PI)
    text(`Area: ${area}`, 5, height-10)
}