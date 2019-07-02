'user strict';

function main() {
  
  var mainElement = document.querySelector('#site-main');

  function buildDom(html){
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen(){
    var splashScreen = buildDom(`
      <section>
      <h1>Code Invader</h1>
      <button>Start</button>
      </section>
    `);
    var startButton = document.querySelector('button');
    startButton.addEventListener('click',createGameScreen);
  };
  //createSplashScreen();

  function createGameScreen(){
    var gameScreen = buildDom(`
      <section>
        <canvas width= "800" height= "600"> </canvas>
        <audio src=""></audio>
      </section>
    `);
    var canvas = document.querySelector('canvas');
    var gameInstance = new Game(canvas);
    gameInstance.gameOverCallback(createGameOverScreen);
    gameInstance.startGame();
    document.addEventListener('keyup', function(event) {
      gameInstance.player.setDirection(0);
    });
    document.addEventListener('keydown', function(event){
      if(event.key === 'ArrowRight'){
        gameInstance.player.setDirection(1);
      } else if (event.key === 'ArrowLeft'){
        gameInstance.player.setDirection(-1);
      };
    });
  //  setTimeout(createGameOverScreen, 3000);
  };
 // createGameScreen();

  function createGameOverScreen(){
    var createGameOverScreen = buildDom (`
      <section>
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