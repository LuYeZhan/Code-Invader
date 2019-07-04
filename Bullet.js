"user strict";

function Bullet(canvas, x, y) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.y = y;
  this.x = x + 35;
  this.velocity = 3;
  this.direction = -1;
  this.color = "yellow";
  this.width = 30;
  this.height = 20;
}

Bullet.prototype.draw = function() {
  var disparos = new Image();
  this.type === 'disparos';
  disparos.src = "images/code.png";
  this.ctx.drawImage(disparos, this.x, this.y, this.width, this.height);
  //  this.ctx.fillStyle = this.color;
  //  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

Bullet.prototype.update = function() {
  this.y = this.y + this.direction * this.velocity;

};
