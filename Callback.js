'user strict'

function Enemytwo(canvas, randomX){
this.canvas = canvas;
this.ctx = this.canvas.getContext('2d');
this.y = 0;
this.x = randomX;
this.velocity = 3;
this.direction = 1
this.width = 30;
this.height = 30;
}

Enemytwo.prototype.move = function (){
  this.y = this.y + this.direction * this.velocity;
}

Enemytwo.prototype.draw = function (){
 var enemytwo = new Image();
 this.type === 'callback';
 enemytwo.src = "images/callback.png";
 this.ctx.drawImage(enemytwo, this.x, this.y, this.width, this.height)
}