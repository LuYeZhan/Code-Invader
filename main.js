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
      <section id= "screen">
        <p id ="score"> score : <span> </p> 
        <canvas width= "800" height= "600">
        </canvas>
      </section>
    `);
    var canvas = document.querySelector('canvas');
    var gameInstance = new Game(canvas);
    gameInstance.gameOverCallback(createGameOverScreen);
    gameInstance.startGame();
    score = document.querySelector('span');
    score.innerText = gameInstance.player.score;
    document.addEventListener('keyup', function(event) {
      console.log(event)
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

  function createGameOverScreen(){
    var createGameOverScreen = buildDom (`
      <section id= "screen">
        <h1>Game Over</h1>
        <button>Restart</button>
      </section>
    `);
    var buttonRestart = document.querySelector('button');
    buttonRestart.addEventListener('click', createGameScreen);
  };
 // createGameOverScreen();
  createSplashScreen();
};

window.addEventListener('load',main);