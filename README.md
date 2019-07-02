# Code-Invader

 

**Description**

 

A young developer is starting his career in the tech universe. The evil javascript is trying to block the Y.D with booleans, nan, undefined, numbers, strings.. and the evil boss the CALLBACK!

Save the Y.D day and escape (or attack) from the block's, so he can success in life.. and get some sleep!

 

**MPV**

 

The enemies fall from high, and the player escapes with left and right movement.

 

insert photo

![img](file:////Users/SissyXia11/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image001.jpg)

 

**Backlog**

 

The enemies (JS) attacks

 

The student attacks

 

The student moves up and down

 

High Score

 

The attacks are logical with the concept, strings launch 'strings', numbers launch numbers etc..

 

Borders

 

Bombs (TA's help and LT help), student have 10 seconds of ultimate weapon to fight JS.

 

 

**Data structure**

 

6 data archives.

 

Index.html

 

​            Basic html structure

 

style.css

 

Basic css structure, with the images, sounds and all display features

 

Player.js

 

Is a Construction Object, with properties and methods of the player.

 

Properties:                             Methods:

this.ctx                                    move

this.canvas                             draw

this.x

this.y

this.height

this.weight

this.color

this.live

 

Enemy.js

 

Is a Construction Object, with properties and methods of the enemy.

 

Properties:                             Methods:

 

this.ctx                                    move

this.canvas                             draw

this.x

this.y

this.height

this.weight

this.color

this.direction

this.velocity

 

Game.js

 

Is a Construction Object, that uses Player.js and Enemy.js to create the rules of the game and the loop iteration.

 

properties:                                                     methods:

 

this.player                                                      startGame

this.enemies                                                  update

this.isGameOver                                            clear

this.canvas                                                     draw

this.ctx                                                           checkCollisions

this.onGameOver                                          gameOverCallback

​                                                                       checklives

 

main.js

 

contents all the functions, variables, content, that it's displayed on the screen    

 

**States & states Transition**

 

splashScreen : start screen, the player start here, there's a button which uses the function startGame to the start the game, and transition to gameScreen.

 

gameScreen:   this is the main screen, the player will see and play in this screen, this is where most of the properties, & methods are used.

When the player loses all lives, we call the GameOverCallback function to transition to gameoverScreen.

 

gameoverScreen: This is the end screen, we will display a the letter's Game over and a restart button which will call startGame function to transition to gameScreen.

 

**Task**

 

To do

 

\- create archives

\- copy boilerplates

\- setup git, github

\- Create the 3 screens

\- Transition of the 3 screens

\- Create Game loop

\- Create player

\- Move player

\- Create enemy

\- Collision enemy player

\- Game Over condition
x
 
