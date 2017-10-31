"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");
var possHighScore = localStorage.getItem('highscore') || 0;

// PADDLE 1

var KEY_W = 'W'.charCodeAt(0);
var KEY_S = 'S'.charCodeAt(0);
var KEY_A = 'A'.charCodeAt(0);
var KEY_D = 'D'.charCodeAt(0);


var g_paddle1 = new Paddle({
    cx : 200,
    cy : 370,
    count : 0,
    countAdded : 10,
    color: 'black',

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


    g_ball.update(du);
    g_ball2.update(du);

    g_paddle1.update(du);

}

// =================
// RENDER SIMULATION
// =================

function renderSimulation(ctx) {
    clearCanvas(ctx);

    g_ball.render(ctx);
    g_ball2.render(ctx);

    g_wall.render(ctx);
    g_paddle1.render(ctx);
    checkDeadOrWin(ctx);

}

var KEY_RESTART  = 'H'.charCodeAt(0);
function checkDeadOrWin(ctx){
        if(g_wall.bricksLeft === false ){
            ctx.font="bold 40px Arial";
    ctx.fillStyle= 'green';
    ctx.textAlign = 'center';
    ctx.fillText("YOU WIN", g_canvas.width/2,g_canvas.height/2);
    ctx.fillStyle = 'black';
    ctx.strokeText("YOU WIN", g_canvas.width/2,g_canvas.height/2);
    ctx.font="bold 20px Arial";
    ctx.fillStyle= 'green';
    ctx.textAlign = 'center';
    ctx.fillText("Congratulations !", (g_canvas.width/2),(g_canvas.height+40)/2);
    ctx.fillStyle = 'black';
    ctx.strokeText("Congratulations!", (g_canvas.width/2),(g_canvas.height)+40/2);
    g_isUpdatePaused = true;

    }
    if(g_ball.dead && g_ball2.dead){
    ctx.font="bold 40px Arial";
    ctx.fillStyle= 'yellow';
    ctx.textAlign = 'center';
    ctx.fillText("GAME OVER", g_canvas.width/2,g_canvas.height/2);
    ctx.fillStyle = 'black';
    ctx.strokeText("GAME OVER", g_canvas.width/2,g_canvas.height/2);
    ctx.font="bold 20px Arial";
    ctx.fillStyle= 'red';
    ctx.textAlign = 'center';
    ctx.fillText("YOU LOOSE", (g_canvas.width/2),(g_canvas.height+40)/2);
    ctx.fillStyle = 'black';
    ctx.strokeText("YOU LOOSE", (g_canvas.width/2),(g_canvas.height)+40/2);
    g_isUpdatePaused = true;
    if(g_keys[KEY_RESTART]){
            var possHighScore = localStorage.getItem('breakouthighscore') || 0;
    document.getElementById("breakouthighscore").innerHTML = localStorage.getItem("breakouthighscore");

    document.getElementById("breakouthighscore").innerHTML = localStorage.getItem("breakouthighscore");
    document.getElementById("yourscore").innerHTML = g_paddle1.count;

    if(g_paddle1.count > possHighScore){


        localStorage.setItem("breakouthighscore", g_paddle1.count);
        document.getElementById("breakouthighscore").innerHTML = localStorage.getItem("breakouthighscore");

    }
        g_paddle1.count = 0;
        g_isUpdatePaused = false;
        g_ball.reset();
        g_ball2.reset();
    }
    }
}



g_main.init();
