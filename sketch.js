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

    // Generate Random Values Function
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

