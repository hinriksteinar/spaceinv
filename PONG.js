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


var tank = new Tank({
    cx : 400,
    cy : 470,
    count : 0,
    countAdded : 10,
    color: 'black',
    sprite : new Sprite(g_images.tank),

    GO_UP   : KEY_W,
    GO_DOWN : KEY_S,
    GO_RIGHT: KEY_D,
    GO_LEFT : KEY_A,

});

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

}

// =================
// RENDER SIMULATION
// =================

function renderSimulation(ctx) {
    clearCanvas(ctx)

    g_wall.render(ctx);
    g_wall2.render(ctx);
    g_wall3.render(ctx);

    tank.render(ctx);
    ctx.drawImage(img, 0, 0, 100,100);



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



g_main.init();
