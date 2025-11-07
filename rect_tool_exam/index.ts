function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

funtcion mouseMoved(){
    background("black")
    stroke('white')
    noFill()
    
    let w= (mouseX-width/2) *2
    let h= (mouseY-height/2)*2
    
    rect(width / 2, height / 2,w,h)
}