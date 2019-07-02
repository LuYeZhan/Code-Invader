'user strict';

function Bullet (canvas, posicion){
  this.canvas = canvas;
  this.y = null;
  this.x = null;
  this.velocity = 3;
  this.direction = +1;
  this.color = 'blue';
  this.width = 4;
  this.height = 4;
}

Bullet.prototype.draw = function (){
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Bullet.prototype.move = function (){
  this.y = this.y + this.direction * this.velocity;
}
