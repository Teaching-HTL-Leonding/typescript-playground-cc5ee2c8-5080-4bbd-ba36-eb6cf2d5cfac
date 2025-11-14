const textAreaHeight: number = 50;
 
function setup() {
    createCanvas(400, 200);
    background("black");
 
    noStroke();
 
    fill("lightgreen");
    rect(0, 0, width / 3, height);
 
    fill("skyblue");
    rect(width / 3, 0, width / 3, height);
 
   
    fill("cyan");
    rect(2 * width / 3, 0, width / 3, height);
 
   
    fill("black");
    rect(0, height - textAreaHeight, width, textAreaHeight);
}
 
function mouseClicked() {
   
    fill("black");
    rect(0, height - 50, width, 50);
 
    noStroke();
    fill("white");
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
 
    let message: string;
 
    if (mouseX < width / 3) {
        message = "Lightgreen";
    } else if (mouseX < width / 3 * 2) {
        message = "Skyblue";
    } else {
        message = "Cyan";
    }
 
   
    text(message, width / 2, height - textAreaHeight / 2);
}