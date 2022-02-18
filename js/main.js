//set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//function to generate random number

const random = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

//function to generate random color

const randomRGB = () => `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;

/*
class Square {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
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
}*/
//creating class for the randomly colored balls

class Shapes {
  
  //this is the basis that all balls (and other shapes when I can add them) will share
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

//extends lets this add to Shapes class and super lets it pull from that class
class Ball extends Shapes {
  
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);
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

  //creating color change function
  //randomRGB() {
  //  random `${rgb(0,255)}`;
  //  random `${rgb(0,255)}`;
  //  random `${rgb(0,255)}`;
  //}
  
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
  
  // this makes each ball not overlap
  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
      
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

/*
  const squares = [];
  while (square.length < 7) {
    const size = random(15,25);
    const square = new Square(
      random(0 + size,width-size),
      random(0 + size,height - size),
      random(-5,5),
      random(-5,5),
      randomRGB(),
      size
    );
  }
*/

//makes a circle I can hopefully move around
class EvilCircle extends Shapes {
  constructor(x, y) {
    super(x, y, 15, 15);
    this.color = 'yellow';
    this.size = 15;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * MathPI);
    ctx.stroke();
    ctx.lineWidth = 4;
  }

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

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
} 
  
  

  

//animating them
  const balls = [];
  
  while (balls.length < 12) {
    const size = random(10,35);
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

const evilCircles = [];

while (evilCircles.length === 1) {
  const evilCircle = new EvilCircle(
    random(0, width),
    random(0, height)
    )
  evilCircles.push(evilCircle);

  //makes event listener to move the circle
  EvilCircle.window.addEventListener('keydown', e); {
    switch(e.key) {
      case "ArrowUp": 
        this.y.evilCircle[0] += this.velY.evilCircle[0];
        break;
      case "ArrowDown":
        this.y.evilCircle[0] -= this.velY.evilCircle[0];
        break;
      case "ArrowRight":
        this.x.evilCircle[0] += this.velX.evilCircle[0];
        break;
      case "ArrowLeft":
        this.x.evilCircle[0] -= this.velX.evilCircle[0];
        break;
      
      //makes the actual movement occur based on button hit

      if ("ArrowUp" && "ArrowRight") {
        this.y.evilCircle[0] += this.velY.evilCircle[0];
        this.x.evilCircle[0] += this.velX.evilCircle[0];
      }
      if ("ArrowUp" && "ArrowLeft") {
        this.y.evilCircle[0] += this.velY.evilCircle[0];
        this.x.evilCircle[0] -= this.velX.evilCircle[0];
      }
      if ("ArrowDown" && "ArrowLeft") {
        this.y.evilCircle[0] -= this.velY.evilCircle[0];
        this.x.evilCircle[0] -= this.velX.evilCircle[0];
      }
      if ("ArrowDown" && "ArrowRight") {
        this.y.evilCircle[0] -= this.velY.evilCircle[0];
        this.x.evilCircle[0] += this.velX.evilCircle[0];
      }
    }
  };
}


//loops everything
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
  
  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }
  for (const evilCircle of evilCircles) {
    evilCircle.draw();
    evilCircle.update();
    evilCircle.collisionDetect();
  }
  
  requestAnimationFrame(loop);
}

loop();


