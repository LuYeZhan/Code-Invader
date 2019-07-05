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
        <pre>
        Hello!  To code use space.
        Up, down, left and right to Escape from js.  
        You got 3 chances before you get blocked. </pre>
      </section>
    `);
    var startButton = document.querySelector('button');
    startButton.addEventListener('click',createGameScreen);
  };
  //createSplashScreen();

  function createGameScreen(){
    var gameScreen = buildDom(`
      <section>
        <p id ="score"> lines of code :<span> </p> 
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
        
        gameInstance.player.removeSetDirection('up');  
      } else if (event.key === 'ArrowDown'){
       
        gameInstance.player.removeSetDirection('down');
      } 
      else if (event.key === 'ArrowLeft'){
        gameInstance.player.removeSetDirection('left');       
      } else if(event.keyCode === 32){
        gameInstance.player.removeSetDirection('shoot'); 
      }
    });
    document.addEventListener('keydown', function(event){
      if(event.code==='Space'){
        
        gameInstance.player.setNewDirection('shoot');
      }
      else if(event.key === 'ArrowRight'){
       
        gameInstance.player.setNewDirection('right');
      } 
        // movimiento hacia arriba y abajo
      else if (event.key === 'ArrowUp'){
        
        gameInstance.player.setNewDirection('up');  
      } else if (event.key === 'ArrowDown'){
        
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
        <h1>You are blocked!</h1>
        <button>Restart</button>
        <p id= "high-score"></p>
      </section>
    `);
    var gameOverSong = new Audio ('sounds/07 Escape (The Pina Colada Song).mp3')
    gameOverSong.currentTime = 36;
    gameOverSong.play();
    var buttonRestart = document.querySelector('button');
    buttonRestart.addEventListener('click', function() {
      gameOverSong.pause();
      createGameScreen()});
    var highScore = document.querySelector('#high-score');
    highScore.innerHTML = 'lines of code: ' + score

  };
 // createGameOverScreen();
  createSplashScreen();
};

window.addEventListener('load',main);