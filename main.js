'user strict';

var score;
function main() {
  
  var mainElement = document.querySelector('#site-main');

  function buildDom(html){
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen(){
    var splashScreen = buildDom(`
      <section id= "screen">
        <h1>Code Invader</h1>
        <button>Start</button>
        <p>Push space to fire, avoid the mighty loops! </p>
      </section>
    `);
    var startButton = document.querySelector('button');
    startButton.addEventListener('click',createGameScreen);
  };
  //createSplashScreen();

  function createGameScreen(){
    var gameScreen = buildDom(`
      <section>
        <p id ="score"> score : <span> </p> 
        <canvas width= "800" height= "600">
        </canvas>
      </section>
    `);

    var canvas = document.querySelector("canvas");
    var gameInstance = new Game(canvas);
    gameInstance.gameOverCallback(createGameOverScreen);
    gameInstance.startGame();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    score = document.querySelector('span');
    score.innerText = gameInstance.player.score;
    document.addEventListener('keyup', function(event) {
      if(event.key === "ArrowRight"){
        gameInstance.player.removeSetDirection('right');
      }   // movimiento hacia arriba y abajo
      else if (event.key === 'ArrowUp'){
        //gameInstance.player.setDirection('up');
        gameInstance.player.removeSetDirection('up');  
      } else if (event.key === 'ArrowDown'){
        // gameInstance.player.setDirection('down');
        gameInstance.player.removeSetDirection('down');
      } 
      else if (event.key === 'ArrowLeft'){
        gameInstance.player.removeSetDirection('left');       
      } else if(event.keyCode === 32){
        console.log("space lifted")
        gameInstance.player.removeSetDirection('shoot'); 
      }
    });
    document.addEventListener('keydown', function(event){
      if(event.code==='Space'){
        // gameInstance.createBullet();
        gameInstance.player.setNewDirection('shoot');
      }
      else if(event.key === 'ArrowRight'){
       // gameInstance.player.setDirection('right');
        gameInstance.player.setNewDirection('right');
      } 
        // movimiento hacia arriba y abajo
      else if (event.key === 'ArrowUp'){
        //gameInstance.player.setDirection('up');
        gameInstance.player.setNewDirection('up');  
      } else if (event.key === 'ArrowDown'){
        // gameInstance.player.setDirection('down');
        gameInstance.player.setNewDirection('down');
      } 
      else if (event.key === 'ArrowLeft'){
        gameInstance.player.setNewDirection('left');       
      };
    });
    
  };
 // createGameScreen();

  function createGameOverScreen(score){
    var createGameOverScreen = buildDom (`
      <section id= "screen">
        <h1>Game Over</h1>
        <button>Restart</button>
        <p id= "high-score"></p>
      </section>
    `); console.log(score);
    var buttonRestart = document.querySelector('button');
    buttonRestart.addEventListener('click', createGameScreen);
    var highScore = document.querySelector('#high-score');
    highScore.innerHTML = 'High Score: ' + score
  };
 // createGameOverScreen();
  createSplashScreen();
};

window.addEventListener('load',main);