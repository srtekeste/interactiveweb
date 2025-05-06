let lightOn = true;
let words = [];
let wordObjects = [];

var font; 

function preload() {
  font = loadFont('GamayWideBoldItalic.ttf');
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, CENTER);
  rectMode(CENTER);
  textSize(20);
  textFont(font);

  words = "BASED ON THINGS THAT YOU AND OTHERS DO ON AND OFF INSTAGRAM"  
    .split(' ');
  words.push(" ");

  let startX = width;
  for (let w of words) {
    let wWidth = textWidth(w + ' ');
    wordObjects.push({
      txt: w,
      x: startX,
      width: wWidth
    });
    startX += wWidth;
  }
}

function draw() {
  background(lightOn ? "lightblue" : 30);

  // === Header Text Scroller ===
  if (lightOn) {
    fill(255);
    textSize(20);
    let scrollSpeed = 2;

    for (let word of wordObjects) {
      text(word.txt, word.x, 40);
      word.x -= scrollSpeed;

      // Loop word back to the right if it exits left
      if (word.x + word.width < 0) {
        let lastWord = wordObjects[wordObjects.length - 1];
        word.x = lastWord.x + lastWord.width;
        wordObjects.push(wordObjects.shift()); // maintain order
        break; // Only shift one word per frame
      }
    }
  }

  // === Light Switch UI ===
  push();
  translate(width / 2, height / 2);

  stroke(0);
  fill(240);
  rect(0, 0, 100, 200, 20);

  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text("ON", 0, -80);
  text("OFF", 0, 80);

  push();
  translate(0, lightOn ? -20 : 20);
  stroke(0);
  fill(lightOn ? 'yellow' : 100);
  rect(0, 0, 30, 60);

  fill(lightOn ? '#cccc00' : '#555555');
  beginShape();
  vertex(15, -30);
  vertex(25, -40);
  vertex(25, 30);
  vertex(15, 30);
  endShape(CLOSE);

  fill(lightOn ? '#eeee66' : '#777777');
  beginShape();
  vertex(-15, -30);
  vertex(15, -30);
  vertex(25, -40);
  vertex(-5, -40);
  endShape(CLOSE);
  pop();

  pop(); // end switch
}

function mousePressed() {
  if (
    mouseX > width / 2 - 50 &&
    mouseX < width / 2 + 50 &&
    mouseY > height / 2 - 100 &&
    mouseY < height / 2 + 100
  ) {
    lightOn = !lightOn;
  }
}