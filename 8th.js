let caratteri = [..." !\"#%&'()*,-./:;?@[\\]_{|}0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬▖▗▘▙▚▛▜▝▞▟█"];

let moduli = []
let charW = 14
let charH = 24
let message = `We agree to provide you with the Instagram Service. The Service includes all of the Instagram products, features, applications, services, technologies, and software that we provide to advance Instagram's mission: To bring you closer to the people and things you love. The Service is made up of the following aspects: Offering personalized opportunities to create, connect, communicate, discover and share. People are different. So we offer you different types of accounts and features to help you create, share, grow your presence, and communicate with people on and off Instagram. Part of that is highlighting content, features, offers and accounts that you might be interested in, and offering ways for you to experience Instagram, based on things that you and others do on and off Instagram.`

let finalText = []
let revealFrame = 180 // wait this many frames before starting reveal



class Modulo {
  constructor(x, y, char) {
    this.pos = createVector(x, y)
    this.targetChar = char
    this.currentChar = random(caratteri)
    this.done = false
  }

  display() {
    text(this.currentChar, this.pos.x, this.pos.y)
  }

  update() {
    if (!this.done) {
      if (frameCount > revealFrame) {
        if (this.currentChar !== this.targetChar) {
          this.currentChar = random(caratteri)
        } else {
          this.done = true
        }
      } else {
        this.currentChar = random(caratteri)
      }
    }
  }
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  textFont("prestige-elite-std")
  textAlign(LEFT, TOP)
  frameRate(30)
  creaModuli()
}

function creaModuli() {
  moduli = []
  let parole = message.split(" ")
  let righe = []
  let riga = ""
  let limite = int(width / charW) - 2

  for (let i = 0; i < parole.length; i++) {
    if ((riga + parole[i]).length < limite) {
      riga += parole[i] + " "
    } else {
      righe.push(riga.trim())
      riga = parole[i] + " "
    }
  }
  righe.push(riga.trim())

  let xStart = (width - limite * charW) / 2
  let yStart = (height - righe.length * charH) / 2

  for (let r = 0; r < righe.length; r++) {
    let riga = righe[r]
    for (let c = 0; c < riga.length; c++) {
      let x = xStart + c * charW
      let y = yStart + r * charH
      moduli.push(new Modulo(x, y, riga[c]))
    }
  }
}

function draw() {
  background('#edebeb')
  fill('#af8ec2');
  for (let m of moduli) {
    m.display()
    m.update()
  }
}