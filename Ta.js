'user strict'

function Ta (canvas, x, y){
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.y = y;
  this.x = x;
  this.velocity = 5;
  this.direction = -1;
  this.image = new Image()
  this.width = 30;
  this.height = 20;
}

Ta.prototype.draw = function() {
  var help = new Image();
  this.type === 'help';
  help.src = "images/code.png";
  this.ctx.drawImage(help, this.x, this.y, this.width, this.height);
};

Ta.prototype.update = function() {
  this.y = this.y + this.direction * this.velocity;
};

