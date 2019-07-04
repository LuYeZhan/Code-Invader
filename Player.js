'use strict';

function Player (canvas, shoot) {
  this.score = 0;
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 60;
  this.width = 100;
  this.x = (this.canvas.width/2)
  this.y = (this.canvas.height) - (this.height / 2) - this.height ;
  this.lives = 3;
  this.color = 'blue';
  this.direction = 0;
  this.velocity = 3;
  this.movement = [];
  this.shoot = shoot;
}

Player.prototype.draw = function () {
  var avion = new Image();
  this.type === 'avion';
  avion.src = 'images/macimagen.png';
  this.ctx.drawImage(avion, this.x, this.y, this.width, this.height);
  
};

Player.prototype.setDirection = function (newDirection){
  this.direction = newDirection;
}

Player.prototype.setNewDirection = function (key) {
  if(!this.movement.includes(key)){
    this.movement.push(key);
  }
  
}

Player.prototype.removeSetDirection = function(key){
  var index = this.movement.indexOf(key)
  this.movement.splice(index, 1);
}