//set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//function to generate random number

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

//function to generate random color

function randomRGB() {
  return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
}

//creating class for the randomly colored balls

class Ball {
  
  //this is what builds the ball
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
  
  //this actually draws the ball
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  //this will make the ball move
  update() {
    if ((this.x + this.size) >= width) {
         this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;
  }
}
  //animating them
  
  const balls = [];
  
  while (balls.length < 25) {
    const size = random(10,20);
    const ball = new Ball(
      //ball position always at least 1 ball width from edge
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size);
  
    balls.push(ball);
  }


//loops everything
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
  
  for (const ball of balls) {
    ball.draw();
    ball.update();
  }
  
  requestAnimationFrame(loop);
}

loop();


