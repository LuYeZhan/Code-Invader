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

// Player.prototype.move = function () {
//   this.movement.forEach((direction)=>{
//       if ( direction == 'up'){
//         this.y -= 3; 
//       } else if ( direction == 'down'){
//         this.y += 3; 
//       } else if (direction == 'left'){
//         this.x -= 5;
//       } else if (direction == 'right'){
//         this.x += 5;
//       } else if(direction == 'shoot'){
//         this.shoot();
//       }

//   });
  //this.x = this.x + this.direction * this.velocity;
  // movimiento en la y
  //this.y = this.y + this.direction * this.velocity;
// };

Player.prototype.draw = function () {
  var avion = new Image();
    this.type === 'avion';
    avion.src = 'images/macimagen.png';
    // aqui has igualado la posicion de this.y a la posición inicial, y eso es veneno
    //this.y = (this.canvas.height) - (this.height / 2) - this.height ;
    this.ctx.drawImage(avion, this.x, this.y, this.width, this.height);
  // for paing the player as a square color object on display  
  // this.ctx.fillStyle = this.color;
  // this.ctx.fillRect(this.x, this.y, this.width, this.height)
};

Player.prototype.setDirection = function (newDirection){
  this.direction = newDirection;
}

Player.prototype.setNewDirection = function (key) {
  if(!this.movement.includes(key)){
    this.movement.push(key);
  }
  console.log(this.movement);
}

Player.prototype.removeSetDirection = function(key){
  var index = this.movement.indexOf(key)
  this.movement.splice(index, 1);
}