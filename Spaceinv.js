/*
*   Here we display the welcome screen, start the game
*   and produce the enemies. We also made a few extra
*   time intervals to use with the powerups and more. 
*
*/



"use strict";

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");
var s_canvas = document.getElementById("myCanvas");
var s_ctx = s_canvas.getContext("2d");
var possHighScore = localStorage.getItem('highscore') || 0;

var KEY_W = 'W'.charCodeAt(0);
var KEY_S = 'S'.charCodeAt(0);
var KEY_A = 'A'.charCodeAt(0);
var KEY_D = 'D'.charCodeAt(0);
var KEY_SOME = 'K'.charCodeAt(0);


tank = new Tank({
    cx : 400,
    cy : 470,
    sprite : new Sprite(g_images.tank, 50, 50),
    width  : 50,
    height : 50,

    GO_UP   : KEY_W,
    GO_DOWN : KEY_S,
    GO_RIGHT: KEY_D,
    GO_LEFT : KEY_A,
    GO_FAST : KEY_SOME
});


function produceBadboys(){

    if(g_score !== 0){
      g_enemyXvel *= 1.12;
      g_lives++;
      g_score += 5000;

    }


    g_level++;
    pauseAndDisplayLevel();
    if(g_score !== 0) g_enemyXvel *= 1.08;
        for(var j = 0; j < 6; j++){
      for(var i = 0; i < 10; i++){
        if(j%2 == 0){
          pushEnemy2(i,j,g_enemyXvel);
        }
        else if(j%3 == 0){
          pushEnemy3(i,j, g_enemyXvel);
        }
        else{
          pushEnemy1(i,j,g_enemyXvel);
        }
    }
  }
}



function pushEnemy1(i,j,xvel){
  badguys.push(new Enemy({
    cx      : (i+1)*40,
    cy      : (j+1)*40,
    width   : 25,
    height  : 25,
    isAlive : true,
    xVel    : xvel,
    sprite  : new Sprite(g_images.enemy_1, 25, 25),
    lazer   : new Sprite(g_images.enemy_1_lazer, 20, 30),
    score   : 300
  }));
}

function pushEnemy2(i,j,xvel){

  badguys.push(new Enemy({
    cx      : (i+1)*40,
    cy      : (j+1)*40,
    width   : 25,
    height  : 25,
    isAlive : true,
    xVel    : xvel,
    sprite  : new Sprite(g_images.enemy_2, 25, 25),
    lazer   : new Sprite(g_images.enemy_2_lazer, 20, 30),
    score   : 200
  }));
}

function pushEnemy3(i,j,xvel){
  badguys.push(new Enemy({
    cx      : (i+1)*40,
    cy      : (j+1)*40,
    width   : 25,
    height  : 25,
    isAlive : true,
    xVel    : xvel,
    sprite  : new Sprite(g_images.enemy_3, 25, 25),
    lazer   : new Sprite(g_images.enemy_3_lazer, 20, 30),
    score   : 100
  }));

}

   myVar = setInterval(myTimer, 3000);
//resetInterval er fyrir pause function
  function resetInterval() {
    clearInterval(myVar);
    myVar = setInterval(myTimer, 3000);
   }

function myTimer(){

  enemyFire();
  shoot.play();
}

function enemyFire(){
  var rando = Math.floor(Math.random()*badguys.length);
  badguys[rando].fireBullet();
}

function pausex(){
  xTimeOut = setTimeout(function(){
    dropDown = false;
  }, 200);
}

// lætur enemies fara til baka
function turnAround(){
  for(var i = 0; i < badguys.length; i++){
    badguys[i].xVel *= -1;

  }
  invaderdown.play();
}



// =============
// GATHER INPUTS
// =============
var timeoutID;

function pauseAndDisplayLevel(){
    clearInterval(intervalID);
    clearCanvas(g_ctx);
    bullets = [];
    g_shotsFired = false;
    explosions = [];
    enemyBullets = [];
    tank.cx = 400;
    tank.cy = 470;
    g_isUpdatePaused = !g_isUpdatePaused;
    g_doRender       = !g_doRender;
    g_doClear        = !g_doClear;
    var oldFont = g_ctx.font;
    var oldStyle = g_ctx.fillStyle;
    g_ctx.fillStyle = "white";
    g_ctx.font = "50px Sans Serif";
    g_ctx.fillText("LEVEL " + g_level, 200,200);
    g_ctx.font = oldFont;
    g_ctx.fillStyle = oldStyle;
    timeoutID = setTimeout(restartInterval,3000);
}

function restartInterval(){
  g_isUpdatePaused = !g_isUpdatePaused;
  g_doRender       = !g_doRender;
  g_doClear        = !g_doClear;
  intervalID = window.setInterval(mainIter, 16.666);
}

function gatherInputs() {
    // Nothing to do here!
    // The event handlers do everything we need for now.
}

// =================
// UPDATE SIMULATION
// =================

function updateSimulation(du) {



    tank.update();
    for(var i = 0; i < explosions.length; i++){
      explosions[i].update();
    }

    if(badguys.length == 0) produceBadboys();

    for(var i = 0; i < badguys.length; i++){
      badguys[i].update(du);
    }

    for(var i = 0; i < enemyBullets.length; i++){
      enemyBullets[i].update();
    }

    for(var i = 0; i < bullets.length; i++){
      bullets[i].update();
    }

}

// =================
// RENDER SIMULATION
// =================


function renderSimulation(ctx) {
    clearCanvas(ctx)


    for(var i = 0; i < explosions.length; i++){
      explosions[i].render();
    }
    for(var i = 0; i < badguys.length; i++){
      badguys[i].render(ctx);
    }

    for(var i = 0; i < bullets.length; i++){
      bullets[i].render(ctx);
    }

    for(var i = 0; i < enemyBullets.length; i++){
      enemyBullets[i].render(ctx);
    }


    tank.render(ctx);
    scoreRender(ctx);
    livesRender(ctx);
}


function scoreRender(ctx){
  var oldStyle = ctx.fillStyle;
  var oldFont = ctx.font;
  ctx.font = "40px Sans Serif";
  ctx.fillStyle = 'White';
  ctx.fillText("SCORE: " + g_score, g_canvas.width-700,30,200);
  ctx.fillStyle = oldStyle;
  ctx.font = oldFont;
}

function livesRender(ctx){

  var oldStyle = ctx.fillStyle;
  var oldFont = ctx.font;
  ctx.font = "40px Sans Serif";
  ctx.fillStyle = 'White';
  ctx.fillText("LIVES: " + g_lives, g_canvas.width-200,30, 200);
  ctx.fillStyle = oldStyle;
  ctx.font = oldFont;

}

var KEY_START = ' '.charCodeAt(0);
if(g_keys[KEY_START]){


  clearCanvas(g_ctx);
  clearInterval(welcomeScreenInterVal);
  clearCanvas(s_ctx);
  clearInterval(blinkinterval);

  g_main.init();

}


function displayWelcomeScreen(){
  g_ctx.drawImage(g_images.welcomeScreenBackground, 0, 0, g_canvas.width, g_canvas.height);

  blinktext();
  clearInterval(welcomeScreenInterVal);

  if(g_keys[KEY_START]){

    clearCanvas(g_ctx);
    clearInterval(welcomeScreenInterVal);
    clearCanvas(s_ctx);
    clearInterval(blinkinterval);

    g_main.init();

  }
}
var count = 10000000;

function blinktext() {
    count--;
    if (count %2 ==1)
    {
      var oldStyle = s_ctx.fillStyle;
      var oldFont = s_ctx.font;
      s_ctx.font = "30px Sans Serif";
      s_ctx.fillStyle = 'red';
      s_ctx.fillText("PRESS SPACE TO BEGIN", 420,425);
      s_ctx.fillStyle = oldStyle;
      s_ctx.font = oldFont;
    }
    else
    {
      clearCanvas(s_ctx);
      g_ctx.drawImage(g_images.welcomeScreenBackground, 0, 0, g_canvas.width, g_canvas.height);
    }
    if(g_keys[KEY_START]){


      clearCanvas(g_ctx);
      clearInterval(welcomeScreenInterVal);
      clearCanvas(s_ctx);
      clearInterval(blinkinterval);

      g_main.init();

    }
}

//g_main.init();
var blinkinterval = window.setInterval(blinktext,
  100);
var welcomeScreenInterVal = window.setInterval(displayWelcomeScreen,
                                                    1.6);
