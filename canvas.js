var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var colorArray = [
    '#B3B6B7',
    '#C6AB67',
    '#840032'
];

window.addEventListener('mousemove',
      function(event){
      mouse.x = event.x;
      mouse.y = event.y;
      })


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
    }

    this.update = function() {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      //interactivity
      if (mouse.x - this.x < 100 && mouse.x - this.x > -100
       && mouse.y - this.y < 100 && mouse.y - this.y > -100) {
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
      } else if (this.radius > radius) {
          this.radius -= 1;
      }



      this.draw();

    }

}


var circleArray = [];

for (var i = 0; i < 600; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5) * 3;
    var dx = (Math.random() - 0.5) * 3;
    var radius = Math.random() * 15;
    if (this.radius < 5) {
        this.radius = 5;
    }
    circleArray.push(new Circle(x, y, dx, dy, radius));
}


console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  //canvas is cleared on refresh
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
  }

}

animate();
