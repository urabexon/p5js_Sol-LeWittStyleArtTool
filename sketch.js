const CRYSTAL_SIZE = 100;
// layout
let COLUMNS      = 10;
let ROWS         = 6;
let PADDING      = 0;//= CRYSTAL_SIZE * 0.2
let GRIDBOX      = CRYSTAL_SIZE + PADDING;
let START        = CRYSTAL_SIZE * 0.5;//(CRYSTAL_SIZE / 2) + MARGIN

let PALETTE = [];
let SHAPES = [];
var rand = [];
var rand2 = [];
var gui;

// Setup Function
function setup() {
    COLUMNS = ceil(windowWidth / CRYSTAL_SIZE);
    ROWS    = ceil(windowHeight / CRYSTAL_SIZE);

    const totalX = GRIDBOX * COLUMNS;
    const totalY = GRIDBOX * ROWS;
    gui = new GUI();
    createCanvas(totalX, totalY);

    PALETTE = [
        color(255, 52, 154), // pink
        color(4, 0, 152) // blue
    ]

    noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);

    // Generate Random Values
    generateRandomValues();
}

// Generate Random Values Function
function generateRandomValues() {
    rand = [];
    for (let x = 0; x < COLUMNS; x++) {
        for (let y = 0; y < ROWS; y++)
            rand.push(random(1.0));
    }
}

// Generate Artwork Function
function generateArcs() {
    generateRandomValues();
    clear();
    SHAPES = [];
    draw();
}

// Main Draw Function
function draw() {
    background('#1c1c1c');
    //text(frameRate(), 10, GRIDBOX * ROWS + 20);
    // go to a point on the screen and draw a crystal
    // continue to do this until we run out of room
    noFill()

    var id;
    if (SHAPES.length != (COLUMNS)*(ROWS) ) {
        for (let x = 0; x < COLUMNS; x++) {
            for (let y = 0; y < ROWS; y++) {
                const posX = START + (x * GRIDBOX)
                const posY = START + (y * GRIDBOX)
                id = y + (x * ROWS);

                if (rand[id] < gui.p.percentHalfCircle / 100.)
                    SHAPES.push(new arcShape(posX, posY, color(240, 240, 240), gui.p.thickness));
                else if (rand[id] < (gui.p.percentStraightLine) / 100.)
                    SHAPES.push(new lineShape(posX, posY, color(240, 240, 240), gui.p.thickness));
                else if (rand[id] < gui.p.percentDashedLine / 100.)
                    SHAPES.push(new dashedLineShape(posX, posY, color(240, 240, 240), gui.p.thickness));
                else if (rand[id] < gui.p.percentNoisyLine / 100.)
                    SHAPES.push(new noisyLineShape(posX, posY, color(240, 240, 240), gui.p.thickness));
                else if (rand[id] < gui.p.percentMidHalfCircle / 100.)
                    SHAPES.push(new semiArcShape(posX, posY, color(240, 240, 240), gui.p.thickness));
            }
        }
    }
    for (let i = 0; i < SHAPES.length; i++)
        SHAPES[i].render();
}

function windowResized() {

}
