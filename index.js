function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont("prestige-elite-std"); 
  textSize(32);
  noStroke();
}

function mousePressed() {
  let mainText = "THE INSTAGRAM SERVICE";
  let baseTextSize = 100;
  let centerX = width / 2;
  let centerY = height / 2;

  textSize(baseTextSize);
  let txtW = textWidth(mainText);
  let txtH = baseTextSize;

  let isClicked =
    mouseX > centerX - txtW / 2 &&
    mouseX < centerX + txtW / 2 &&
    mouseY > centerY - txtH / 2 &&
    mouseY < centerY + txtH / 2;

  if (isClicked) {
    window.location.href = "2nd.html";  // ← Link now goes to 2nd.html
  }
}

function draw() {
  background('#edebeb');

  let baseTextSize = 100;
  let hoverTextSize = 110;
  let mainText = "THE INSTAGRAM SERVICE";
  let centerX = width / 2;
  let centerY = height / 2;

  textSize(baseTextSize);
  let txtW = textWidth(mainText);
  let txtH = baseTextSize;

  let isHovering =
    mouseX > centerX - txtW / 2 &&
    mouseX < centerX + txtW / 2 &&
    mouseY > centerY - txtH / 2 &&
    mouseY < centerY + txtH / 2;

  if (isHovering) {
    cursor(HAND);
    textSize(hoverTextSize);
    
    let jitterX = random(-2, 2);
    let jitterY = random(-2, 2);
    fill('#af8ec2');
    text(mainText, centerX + jitterX, centerY + jitterY);
  } else {
    cursor(ARROW);
    textSize(baseTextSize);
    fill('#af8ec2');
    text(mainText, centerX, centerY);
  }

  let amtX = constrain(mouseX / width, 0, 1);
  let amtY = constrain(mouseY / height, 0, 1);

  let sophiaX = lerp(0, centerX, amtX);
  let sophiaY = lerp(0, centerY, amtY);

  let tekesteX = lerp(width, centerX, amtX);
  let tekesteY = lerp(height, centerY, amtY);

  fill(0, 159, 30);
  textSize(100);
  textFont("prestige-elite-std");
  text("sophia", sophiaX, sophiaY);
  text("tekeste", tekesteX, tekesteY);
}




  