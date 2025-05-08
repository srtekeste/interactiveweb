var poetry = ["create", "connect", "communicate", "discover", "share"];

var index = 0;

var font; 

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#edebeb');
  textSize(width/24);
  fill('#af8ec2');
    text("Offering personalized opportunities to", width / 7.7, height / 3 - 30);
  
  textFont("prestige-elite-std"); 
  text(poetry[index], width / 1.2, height / 3 - 30);
}
 
function keyPressed() {
  index = index + 1;

  if (index == poetry.length) {
    index = 0;
  }
}
