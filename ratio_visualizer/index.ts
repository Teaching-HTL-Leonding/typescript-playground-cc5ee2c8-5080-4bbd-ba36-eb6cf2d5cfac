// A grid of 10x10 circles represents 100 units.
// A random number (0–100) determines how many circles are "filled".
// Circles are counted left-to-right, top-to-bottom.
 
// Canvas / Layout constants
const COLS = 10;
const ROWS = 10;
const CELL_SIZE = 46; // distance between circle centers
const MARGIN = 10;
const TITLE_HEIGHT = 35;
 
// Colors
const COLOR_FILLED = "steelblue";
const COLOR_EMPTY = "lightgray";
const COLOR_STROKE = "white";
 
// The random number we want to visualize (0-100)
let randomNumber: number;
 
function setup(): void {
    createCanvas(COLS * CELL_SIZE + 2 * MARGIN, ROWS * CELL_SIZE + TITLE_HEIGHT + MARGIN);
 
    randomNumber = Math.floor(Math.random() * 101);
 
    background("white");
 
    // Titel anzeigen
    fill("black");
    textAlign(CENTER);
    textSize(18);
    text("Random number: " + randomNumber + " / 100", width / 2, 25);
 
    let count = 0;
 
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
 
            let x = MARGIN + col * CELL_SIZE + CELL_SIZE / 2;
            let y = TITLE_HEIGHT + row * CELL_SIZE + CELL_SIZE / 2;
 
            stroke(COLOR_STROKE);
 
            if (count < randomNumber) {
                fill(COLOR_FILLED);
            } else {
                fill(COLOR_EMPTY);
            }
 
            circle(x, y, CELL_SIZE * 0.8);
 
            count++;
        }
    }
}