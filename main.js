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
      </section>
    `);
    // var music = new Audio('src = "https://www.nasa.gov/62282main_countdown_launch.wav"');
    // music.play();
    // music.addEventListener('loadeddata', () => {
    //   let duration = music.duration;
    var canvas = document.querySelector('canvas');
    var gameInstance = new Game(canvas);
    gameInstance.gameOverCallback(createGameOverScreen);
    gameInstance.startGame();
    document.addEventListener('keyup', function(event) {
      gameInstance.player.setDirection(0);
    });
    document.addEventListener('keydown', function(event){
      if(event.code==='Space'){
        gameInstance.createBullet();
      }
      if(event.key === 'ArrowRight'){
        gameInstance.player.setDirection(1);
      } else if (event.key === 'ArrowLeft'){
        gameInstance.player.setDirection(-1);
      };
    });
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