let myText = "So we offer you different types of accounts and features to help you create, share, grow your presence, and communicate with people on and off Instagram.";
let lines = [];
let charGrid = [];
let fontSize;

let prevMouseX = 0;
let currentColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Courier New");
  textAlign(LEFT, TOP);
  fontSize = 22;
  textSize(fontSize);
  textLeading(fontSize * 1.2);

  wrapText();
  prepareGrid();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  wrapText();
  prepareGrid();
}

function wrapText() {
  lines = [];
  let words = myText.split(" ");
  let line = "";
  let maxWidth = width * 0.8;

  for (let word of words) {
    let testLine = line + word + " ";
    if (textWidth(testLine) > maxWidth) {
      lines.push(line.trim());
      line = word + " ";
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());
}

function prepareGrid() {
  charGrid = [];
  for (let row = 0; row < lines.length; row++) {
    let line = lines[row];
    let chars = line.split("");
    charGrid.push(chars);
  }
}

function draw() {
  // Detect direction of mouse movement
  if (mouseX > prevMouseX) {
    currentColor = color(0); // black
  } else if (mouseX < prevMouseX) {
    currentColor = color('#af8ec2'); // purple
  }
  prevMouseX = mouseX;

  background('#edebeb');
  fill(currentColor || color('#af8ec2')); // default on first frame

  let startX = (width - width * 0.8) / 2;
  let startY = (height - charGrid.length * fontSize * 1.2) / 2;

  for (let row = 0; row < charGrid.length; row++) {
    for (let col = 0; col < charGrid[row].length; col++) {
      let char = charGrid[row][col];
      let x = startX + textWidth(" ") * col;
      let y = startY + row * fontSize * 1.2;
      let d = dist(mouseX, mouseY, x, y);
      let scaleAmt = map(cos(TWO_PI * millis() * 0.0006 - d * 0.05), 1, -1, 0.8, 1.5);

      push();
      translate(x, y);
      scale(scaleAmt, 1);
      text(char, 0, 0);
      pop();
    }
  }
}