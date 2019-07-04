'use strict';

function Enemy(canvas, randomX, image){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.y = 0;
  this.x = randomX;
  this.velocity = 2;
  this.direction = 1;
//  this.color = 'red';
  this.width = 35;
  this.height = 30;
  this.image = image;
}

Enemy.prototype.move = function (){
  this.y = this.y + this.direction * this.velocity;
}

Enemy.prototype.draw = function (){
  var loop = new Image();
  this.type === 'loop';
  loop.src = this.image;
  this.ctx.drawImage(loop, this.x, this.y, this.width, this.height)
    
    
}

