function setup() {
    const SIZE = 400;  // Größe des Canvas
    const STRIPE_THICKNESS = 50; // Dicke der Streifen

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    for (let i = 0; i * STRIPE_THICKNESS <= SIZE; i++) {
        if (i % 2 === 0) {
            fill("lime");
        } else {
            fill("yellow");
        }

        rect(0, i * STRIPE_THICKNESS, width, STRIPE_THICKNESS);
    }
}