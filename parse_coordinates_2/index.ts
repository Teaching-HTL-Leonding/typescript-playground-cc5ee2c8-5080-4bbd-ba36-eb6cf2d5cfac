// The following string represents coordinates (x,y) of points
// that you have to connect with lines. Each line connects two consecutive points.
const points = "200,100 300,150 300,250 200,300 100,250 100,150 200,100";

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);


    let x1 = 0
    let y1 = 0
    let x2 = 0; // Hilfsvariable für aktuelle X-Koordinate
    let y2 = 0; // Hilfsvariable für aktuelle Y-Koordinate
    let coordinates = ""; // Hilfsvariable für aktuellen Wert
    let spaceCharsFound = 0; // Wie viele Leerzeichen haben wir schon gefunden?
    for (let ix = 0; ix < points.length; ix++) {
        if (points[ix] === ',') {
            // Komma gefunden -> in coordinates steht x
            x2 = parseInt(coordinates);
            coordinates = "";
        } else if (points[ix] === ' ') {
            // Leerzeichen gefunden -> in coordinates steht y
            y2 = parseInt(coordinates);
            if (spaceCharsFound > 0) {
                circle(x2, y2, 5);
                line(x1, y1, x2, y2);
            }

            spaceCharsFound++;
            x1 = x2; // Den aktuellen Punkt als vorherigen merken
            y1 = y2
            coordinates = "";
        } else {
            // Es ist eine Ziffer!
            coordinates += points[ix];
        }
    }

    //Hier landen wir, wenn wir alle Zeichen verarbeitet haben
    //Wir tun so, als wäre ein Leerzeichen ganz am Ende
    y2 = parseInt(coordinates);
    if (spaceCharsFound > 0) {
        circle(x2, y2, 5)
        line(x1, y1, x2, y2);


    }
}

