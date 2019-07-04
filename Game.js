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
  this.player = new Player(this.canvas, this.createBullet);
  var imageArr = ['images/loopverde.png','images/let.png','images/cons.png','images/nan.png','images/var.png',]
  var loop = () => {
    if (Math.random() > 0.9) {
      // el -10 es para acotar más el random
      var randomX = Math.random() * this.canvas.width - 10;
      var newEnemy = new Enemy(this.canvas, randomX, imageArr[Math.floor(Math.random()*imageArr.length)]);
      this.enemies.push(newEnemy);
      // new enemy
     
    }
    //update
    this.update();
    //clean
    this.clear();
    //draw
    this.draw();
    this.checkBulletCollissions();
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
  this.player.movement.forEach((direction,index)=>{
    if ( direction == 'up'){
      this.player.y -= 3; 
    } else if ( direction == 'down'){
      this.player.y += 3; 
    } else if ( direction == 'left'){
      this.player.x -= 5;
    } else if ( direction == 'right'){
      this.player.x += 5;
    } else if ( direction == 'shoot'){
      this.createBullet();
      this.player.movement.splice(index, 1);
    }
    });

  this.enemies.forEach(function(enemy) {
    enemy.move();
  // new enemy update
  
  });
  if (this.bullets) {
    this.bullets.forEach(bullet => {
      bullet.update();
    });
  }
};

Game.prototype.createBullet = function() {
  var bullet = new Bullet(this.canvas, this.player.x, this.player.y);
  this.bullets.push(bullet);
 
    // setTimeout(()=>{
    //   this.bullets.push(bullet);
    // },500);
  }

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.player.draw();
  this.enemies.forEach(function(enemy) {
    enemy.draw();
  });
  if (this.bullets) {
    this.bullets.forEach(bullet => {
      bullet.draw();
    });
  }
};

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
Game.prototype.checkBulletCollissions = function() {
  this.bullets.forEach((bullet,indiceBullet) => {
    this.enemies.forEach((enemy,indiceEnemy) => {
      var rightLeft = bullet.x + bullet.width >= enemy.x;
      var leftRight = bullet.x <= enemy.x + enemy.width;
      var bottomTop = bullet.y + bullet.height >= enemy.y;
      var topBottom = bullet.y <= enemy.y + enemy.height;
      if (rightLeft && leftRight && bottomTop && topBottom) {
        this.enemies.splice(indiceEnemy,1);
        this.bullets.splice(indiceBullet,1);
        this.player.score++;
        score.innerText = this.player.score;
      };
    });
  });
}

