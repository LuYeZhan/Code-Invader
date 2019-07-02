'use strict';

function Player (canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 30;
  this.width = 30;
  this.x = (this.canvas.width/2)
  this.y = (this.canvas.height) - (this.height / 2) - this.height ;
  this.lives = 3;
  this.color = 'blue';
  this.direction = 0;
  this.velocity = 3;
  
}

Player.prototype.move = function () {
  this.x = this.x + this.direction * this.velocity;
};

Player.prototype.draw = function () {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
};

Player.prototype.setDirection = function (newDirection){
  this.direction = newDirection;
}