let lightOn = true;
let words = [];
let wordObjects = [];

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  words = "based on things that you and others do on and off Instagram.".split(' ');

  for (let w of words) {
    wordObjects.push({
      txt: w,
      x: random(50, width - 50),
      y: random(50, height - 50),
      xSpeed: random(0.3, 1.2),
      ySpeed: random(0.3, 1.2),
      baseSize: random(14, 26),
      pulseOffset: random(TWO_PI),    
      pulseSpeed: random(0.02, 0.05)  // text speeds
    });
  }
}

function draw() {
  background(lightOn ? "#777777" : 30);

  //  moving / growing and shrinking
  if (lightOn) {
    for (let word of wordObjects) {
      let pulse = sin(frameCount * word.pulseSpeed + word.pulseOffset);
      let size = word.baseSize + pulse * 4; // Grows ±4px

      fill(255);
      textSize(size);
      text(word.txt, word.x, word.y);

      word.x += word.xSpeed;
      word.y += word.ySpeed;

      if (word.x > width - 20 || word.x < 20) word.xSpeed *= -1;
      if (word.y > height - 20 || word.y < 20) word.ySpeed *= -1;
    }
  }

  // light switch 
  push();
  translate(width / 2, height / 2);

  stroke(0);
  fill(240);
  rect(0, 0, 100, 200, 20);

  fill(0);
  noStroke();
  textSize(20);
  text("ON", 0, -80);
  text("OFF", 0, 80);

  // actual switch
  push();
  translate(0, lightOn ? -20 : 20);
  stroke(0);
  fill(lightOn ? 'yellow' : 100);
  rect(0, 0, 30, 60);

  // dimension of panel
  fill(lightOn ? '#cccc00' : '#555555');
  beginShape();
  vertex(15, -30);
  vertex(25, -40);
  vertex(25, 30);
  vertex(15, 30);
  endShape(CLOSE);

  // dimension of panel
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