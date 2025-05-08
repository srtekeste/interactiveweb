let content = 'Part of that is highlighting content, features, offers and accounts that you might be interested in, and offering ways for you to experience Instagram.';
let yStart = 0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Courier New');
  textSize(20);
  textAlign(CENTER, TOP);
  textLeading(28);
}

function draw() {
  background('#edebeb');

  let c1 = color('#edebeb');  
  let c2 = color('#af8ec2');

  let boxWidth = width * 0.75;
  let boxX = (width - boxWidth) / 2;
  let lines = wrapText(content, boxWidth); // <-- get wrapped lines here
  let paraHeight = lines.length * textLeading();

  for (let y = yStart; y < height + paraHeight; y += paraHeight + 40) {
    for (let i = 0; i < lines.length; i++) {
      let lineY = y - paraHeight / 2 + i * textLeading();
      let amt = constrain(map(lineY, 0, height, 0, 1), 0, 1);
      let warpStrength = 10; // how much to warp
      let distance = abs(mouseY - lineY);
      let offset = map(distance, 0, 100, warpStrength, 0); // closer = more warp
      let warpedY = lineY + sin(frameCount * 0.1 + i) * offset;

      fill(lerpColor(c2, c1, amt));
      text(lines[i], boxX, warpedY, boxWidth);
    }
  }

  yStart--; // scroll upward
}

function wrapText(txt, wrapWidth) {
  let words = txt.split(" ");
  let lines = [];
  let line = "";

  for (let word of words) {
    let testLine = line + word + " ";
    if (textWidth(testLine) > wrapWidth) {
      lines.push(line.trim());
      line = word + " ";
    } else {
      line = testLine;
    }
  }

  lines.push(line.trim());
  return lines;
}