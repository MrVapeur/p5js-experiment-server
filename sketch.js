var h = window.innerHeight;
var w = window.innerWidth;
var border = 100;

function setup() {
    canvas=createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255,128,128);
    // A rectangle
    fill(200, 200, 200);
    noStroke();
    rect(border, border, w-(2*border), h-(2*border));
    // uses global variables for width and height
}
