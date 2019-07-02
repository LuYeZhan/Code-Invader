"user strict";

function Bullet(canvas, x) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.y = this.canvas.height - 90;
  this.x = x + 30;
  this.velocity = 3;
  this.direction = -1;
  this.color = "yellow";
  this.width = 4;
  this.height = 4;
}

Bullet.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

Bullet.prototype.update = function() {
  this.y = this.y + this.direction * this.velocity;
};
