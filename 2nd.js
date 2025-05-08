let revealText = `We agree to provide you with the Instagram Service. The Service includes all of the Instagram products, features, applications, services, technologies, and software that we provide to advance Instagram's mission: To bring you closer to the people and things you love. The Service is made up of the following aspects: `; 

let numBlinds = 20;
let textW;
let wrappedLines = [];

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Courier New');
  textSize(32);
  textAlign(LEFT, TOP);
  noStroke();

  textW = width - 100;
  wrappedLines = wrapText(revealText, textW);
}

function draw() {
  background('#edebeb');


  let textH = wrappedLines.length * 38; // 38 = text leading
  let x = (width - textW) / 2;
  let y = (height - textH) / 2;

  fill(30);
  for (let i = 0; i < wrappedLines.length; i++) {
    text(wrappedLines[i], x, y + i * 38);
  }

  if (mouseX >= width && frameCount % 60 < 30) {
    let lastLine = wrappedLines[wrappedLines.length - 1];
    let colonX = x + textWidth(lastLine);
    let colonY = y + (wrappedLines.length - 1) * 38;
    text(':', colonX, colonY);
  }

  fill('#af8ec2');
  let stripWidth = width / numBlinds;
  for (let i = 0; i < numBlinds; i++) {
    let px = i * stripWidth;
    let revealAmt = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
    let hiddenWidth = stripWidth * (1 - revealAmt);
    rect(px, 0, hiddenWidth, height);
  }
}

function wrapText(txt, maxWidth) {
  let words = txt.split(' ');
  let lines = [];
  let line = '';
  for (let w of words) {
    let testLine = line + w + ' ';
    if (textWidth(testLine) > maxWidth) {
      lines.push(line.trim());
      line = w + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());
  return lines;
}