let caratteri = " !\"#%&'()*,-./:;?@[\\]_{|}0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ═║▖▗▘▙▚▛▜▝▞▟█";
let charW = 14;
let charH = 24;

let staticText = "people are ";
let animatedText = "different.";
let animatedModules = [];

class Modulo {
  constructor(x, y, targetChar) {
    this.pos = createVector(x, y);
    this.targetChar = targetChar;
this.currentChar = random([...caratteri]);
    this.done = false;
  }

  display() {
    fill('#af8ec2');
    text(this.currentChar, this.pos.x, this.pos.y);
  }

  update() {
    if (!this.done) {
      if (this.currentChar !== this.targetChar) {
this.currentChar = random([...caratteri]);
      } else {
        this.done = true;
      }
    }
  }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Courier New", charH);
  textSize(charH);
  textAlign(LEFT, TOP);
  frameRate(30);

  let totalText = staticText + animatedText;
  let textPixelWidth = totalText.length * charW;
  let startX = (width - textPixelWidth) / 2;
  let y = height / 2;

  // Add animated modules for each letter in "different"
  for (let i = 0; i < animatedText.length; i++) {
    let x = startX + (staticText.length + i) * charW;
    animatedModules.push(new Modulo(x, y, animatedText[i]));
  }
}

function draw() {
  background('#edebeb');

  let totalText = staticText + animatedText;
  let textPixelWidth = totalText.length * charW;
  let startX = (width - textPixelWidth) / 2;
  let y = height / 2;

  // Draw static part
  fill(30);
  text(staticText, startX, y);

  // Draw animated "different"
  for (let m of animatedModules) {
    m.display();
    m.update();
  }
  
}
function drawTypewriterArrow(x, y, size, hover) {
  let w = size * 1.4;
  let h = size * 1.2;

  // Generate shared jitter offsets ONCE
  let jitterX = 0;
  let jitterY = 0;
  if (hover) {
    jitterX = random(-2, 2);
    jitterY = random(-2, 2);
  }

  // Draw key background (box)
  noStroke();
  fill(hover ? '#af8ec2' : 'rgb(0,159,30)');
  rectMode(CENTER);
  rect(x + jitterX, y + jitterY, w, h, 6);

  // Draw arrow symbol
  fill('white');
  textFont("prestige-elite-std");
  textSize(size);
  textAlign(CENTER, CENTER);
  text('→', x + jitterX, y + jitterY);
}
