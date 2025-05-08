function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }
  
  let capture;
  let cameraOn = false;
  let scrollX;
  let scrollText = "BASED ON THINGS THAT YOU AND OTHERS DO ON AND OFF INSTAGRAM";
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Courier New");
    textSize(80);
    scrollX = width;
    rectMode(CENTER);
    imageMode(CENTER);
  }
  
  function draw() {
    background('#edebeb');
  
    if (cameraOn && capture) {
      let camW = 320;
      let camH = 240;
      let centerX = width / 2;
      let centerY = height / 2;
      let gapX = camW / 2 + 10;
      let gapY = camH / 2 + 10;
  
      tint('rgb(0,159,30)');
      image(capture, centerX - gapX, centerY - gapY);
      tint('#af8ec2');
      image(capture, centerX + gapX, centerY - gapY);
      tint('#af8ec2');
      image(capture, centerX - gapX, centerY + gapY);
      tint('rgb(0,159,30)');
      image(capture, centerX + gapX, centerY + gapY);
  
      // Scrolling text
      noTint();
      fill('#af8ec2');
      textAlign(LEFT, CENTER);
      text(scrollText, scrollX, height / 2);
      scrollX -= 2;
      if (scrollX < -textWidth(scrollText)) {
        scrollX = width;
      }
    }
  
    // Hover detection for camera icon
    let iconX = width / 2;
    let iconY = height / 2;
    let w = 60;
    let h = 40;
    let hovering = mouseX > iconX - w / 2 &&
                   mouseX < iconX + w / 2 &&
                   mouseY > iconY - h / 2 - 10 &&
                   mouseY < iconY + h / 2;
  
    drawCameraIcon(iconX, iconY, cameraOn, hovering);
  }
  
  function drawCameraIcon(x, y, isOn, hovering) {
    push();
    translate(x, y);
    rectMode(CENTER);
    noStroke();
  
    // Flip color on hover
    let camColor;
    if (hovering) {
      camColor = isOn ? 'rgb(0,159,30)' : '#af8ec2'; // flip color
    } else {
      camColor = isOn ? '#af8ec2' : 'rgb(0,159,30)';
    }
  
    // Camera body
    fill(camColor);
    rect(0, 0, 80, 50, 10);
  
    // Top bump (flash)
    fill(isOn ? 200: 200);
    rect(20, -30, 20, 15, 5);
  
    // Shutter button
    fill('#555');
    ellipse(-25, -28, 10, 10);
  
    // Lens
    fill('#333');
    ellipse(0, 0, 26, 26);
    fill('#999');
    ellipse(0, 0, 16, 16);
    fill(255, 200);
    ellipse(-4, -4, 5, 5);
  
    pop();
  }
  
  function mousePressed() {
    let iconX = width / 2;
    let iconY = height / 2;
    let w = 60;
    let h = 40;
  
    if (
      mouseX > iconX - w / 2 &&
      mouseX < iconX + w / 2 &&
      mouseY > iconY - h / 2 - 10 &&
      mouseY < iconY + h / 2
    ) {
      toggleCamera();
    }
  }
  
  function toggleCamera() {
    if (!cameraOn) {
      capture = createCapture(VIDEO);
      capture.size(320, 240);
      capture.hide();
      cameraOn = true;
      scrollX = width;
    } else {
      capture.remove();
      cameraOn = false;
    }
  }