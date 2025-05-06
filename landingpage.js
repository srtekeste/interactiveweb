var font; 
var zero; 
var randomNumber; 

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
 // background('white');
  randomNumber = int(random(0,100));
  console.log(randomNumber);

 
}

function preload() {
  font = loadFont ('GamayWideBoldItalic.ttf');
}

function draw() {
  
  fill('lightblue');
  textSize(width/24);
  let zero = '"service"';
  text(zero, mouseX, mouseY,);

  fill('white');
  textFont(font);
  textSize(width/24);
  textAlign(CENTER);
  if (mouseIsPressed){
    
    text('THE INSTAGRAM SERVICE',width/2,height/2);
}

if (mouseX > width*1.83/2 & mouseY > height*1.83/2){
fill(180,0,0);
textFont (font);
textSize(width/60);
    text("next",width*1.93/2, height*1.93/2);
}

}