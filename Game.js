"user strict";

function Game(canvas) {
  this.player = null;
  this.enemies = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.onGameOver = null;
  this.bullets = [];
}

Game.prototype.startGame = function() {
  //inicializar player y enemies
  this.player = new Player(this.canvas);

  var loop = () => {
    if (Math.random() > 0.9) {
      // el -10 es para acotar más el random
      var randomX = Math.random() * this.canvas.width - 10;
      var newEnemy = new Enemy(this.canvas, randomX);
      this.enemies.push(newEnemy);
    }
    //update
    this.update();
    //clean
    this.clear();
    //draw
    this.draw();
    this.checkCollisions();
    if (!this.isGameOver) {
      requestAnimationFrame(loop);
    } else {
      this.onGameOver();
    }
  };
  loop();
};

Game.prototype.update = function() {
  this.player.move();
  this.enemies.forEach(function(enemy) {
    enemy.move();
  });
  if(this.bullets){
    this.bullets.forEach((bullet)=>{
      bullet.update();
    })
  }
};

Game.prototype.createBullet = function() {
  var bullet = new Bullet(this.canvas,this.player.x)
  this.bullets.push(bullet);
}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.player.draw();
  this.enemies.forEach(function(enemy) {
    enemy.draw();
  });
  if(this.bullets){
    this.bullets.forEach((bullet)=>{
      bullet.draw();
    })
  }
};

// Game.prototype.checkBulletCollissions = function () {
//   this.enemies.forEach((enemy,index) => {
//     var rightLeft = this.bullet.x + this.bullet.width >= enemy.x;
//     var leftRight = this.bullet.x <= enemy.x + enemy.width;
//     var bottomTop = this.bullet.y + this.bullet.height >= enemy.y;
//     var topBottom = this.bullet.y <= enemy.y + enemy.height;

//     if (rightLeft && leftRight && bottomTop && topBottom) {
//       this.enemies.splice(index,1);
//     }
//   })
// }

Game.prototype.checkCollisions = function() {
  this.enemies.forEach((enemy, index) => {
    var rightLeft = this.player.x + this.player.width >= enemy.x;
    var leftRight = this.player.x <= enemy.x + enemy.width;
    var bottomTop = this.player.y + this.player.height >= enemy.y;
    var topBottom = this.player.y <= enemy.y + enemy.height;

    if (rightLeft && leftRight && bottomTop && topBottom) {
      this.enemies.splice(index, 1);
      this.player.lives--;
      if (this.player.lives === 0) {
        this.isGameOver = true;
      }
    }
  });
};

Game.prototype.gameOverCallback = function(callback) {
  this.onGameOver = callback;
};
