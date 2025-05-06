var poetry = ["create", "connect", "communicate", "discover", "share"];

var index = 0;

var font; 

function preload() {
  font = loadFont('GamayWideBoldItalic.ttf');
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('black');
  textSize(20);
  fill('lightblue');
    text("Offering personalized opportunities to", width / 7.7, height / 3 - 30);
  
  textFont(font); 
  text(poetry[index], width / 1.2, height / 3 - 30);
}
 
function keyPressed() {
  index = index + 1;

  if (index == poetry.length) {
    index = 0;
  }
}