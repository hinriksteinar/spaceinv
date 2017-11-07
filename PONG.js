"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");
var possHighScore = localStorage.getItem('highscore') || 0;



// TANK 1

var KEY_W = 'W'.charCodeAt(0);
var KEY_S = 'S'.charCodeAt(0);
var KEY_A = 'A'.charCodeAt(0);
var KEY_D = 'D'.charCodeAt(0);
var KEY_SOME = 'K'.charCodeAt(0);


var tank = new Tank({
    cx : 400,
    cy : 470,
    sprite : new Sprite(g_images.tank, 50, 50),

    GO_UP   : KEY_W,
    GO_DOWN : KEY_S,
    GO_RIGHT: KEY_D,
    GO_LEFT : KEY_A,
    GO_FAST : KEY_SOME,


});

var badguys = [];

function produceBadboys(){
  console.log("hello");
  for(var i = 0; i < 16; i++){
    for(var j = 0; j < 7; j++){
      badguys.push(new Enemy({
        cx      : i*30,
        cy      : j*30,
        isAlive : true,
        sprite  : new Sprite(g_images.enemy_1, 25, 25)
      }));
    }
  }
}

function turnAround(){
  for(var i = 0; i < badguys.length; i++){
    badguys[i].xVel *= -1;
    badguys[i].cy += badguys[i].yVel;
  }
}




// =============
// GATHER INPUTS
// =============

function gatherInputs() {
    // Nothing to do here!
    // The event handlers do everything we need for now.
}

// =================
// UPDATE SIMULATION
// =================

function updateSimulation(du) {


    tank.update(du);
    for(var i = 0; i < badguys.length; i++){
      badguys[i].update();
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


    for(var i = 0; i < badguys.length; i++){
      badguys[i].render(ctx);
    }

    for(var i = 0; i < bullets.length; i++){
      bullets[i].render(ctx);
    }
    g_wall.render(ctx);
    g_wall2.render(ctx);
    g_wall3.render(ctx);

    tank.render(ctx);
    //ctx.drawImage(img, 0, 0, 100,100);



}

var KEY_RESTART  = 'H'.charCodeAt(0);


    if(g_keys[KEY_RESTART]){
            var possHighScore = localStorage.getItem('breakouthighscore') || 0;
    document.getElementById("breakouthighscore").innerHTML = localStorage.getItem("breakouthighscore");

    document.getElementById("breakouthighscore").innerHTML = localStorage.getItem("breakouthighscore");
    document.getElementById("yourscore").innerHTML = tank.count;

    if(tank.count > possHighScore){


        localStorage.setItem("breakouthighscore", tank.count);
        document.getElementById("breakouthighscore").innerHTML = localStorage.getItem("breakouthighscore");

    }
        tank.count = 0;
        g_isUpdatePaused = false;

    }


produceBadboys();
g_main.init();
