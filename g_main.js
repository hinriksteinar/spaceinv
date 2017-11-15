var g_main = {

    _frameTime_ms : null,
    _frameTimeDelta_ms : null,

};

g_main.iter = function (frameTime) {

    this._updateClocks(frameTime);

    this._iterCore(this._frameTimeDelta_ms);

    this._debugRender(g_ctx);

    if (!this._isGameOver) this._requestNextIteration();
};

g_main._updateClocks = function (frameTime) {


    if (this._frameTime_ms === null) this._frameTime_ms = frameTime;

    this._frameTimeDelta_ms = frameTime - this._frameTime_ms;
    this._frameTime_ms = frameTime;
};

g_main._iterCore = function (dt) {

    if (requestedQuit()) {
        this.gameOver();
        return;
    }

    gatherInputs();
    update(dt);
    render(g_ctx);

};

g_main._isGameOver = false;

g_main.gameOver = function () {
    g_isUpdatePaused = !g_isUpdatePaused;
    g_doRender       = !g_doRender;
    g_doClear        = !g_doClear;
    clearCanvas(g_ctx);
    g_main.drawGameOverScreen()
};

var isGameOverScreen = false;

var KEY_RESTART = 'N'.charCodeAt(0);
g_main.drawGameOverScreen = function () {

  isGameOverScreen = !isGameOverScreen;
  enableMute();
  g_ctx.drawImage(g_images.gameOverBackground, 0, 0, g_canvas.width, g_canvas.height);

  gameover.play();

  var oldFont = g_ctx.font;
  var oldStyle = g_ctx.fillStyle;
  g_ctx.font = "50px Sans Serif";
  g_ctx.fillStyle = "white";
  g_ctx.fillText("YOUR SCORE : " + g_score, 195,75);
  g_ctx.fillText("PRESS 'N' TO TRY AGAIN", 100,450);
  g_ctx.font = oldFont;
  g_ctx.fillStyle = oldStyle;

}

// Simple voluntary quit mechanism
//
var KEY_QUIT = 'Q'.charCodeAt(0);
function requestedQuit() {
    return g_keys[KEY_QUIT];
}

// Annoying shim for cross-browser compat
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

// This needs to be a "global" function, for the "window" APIs to callback to
function mainIterFrame(frameTime) {
    g_main.iter(frameTime);
}

g_main._requestNextIteration = function () {
    window.requestAnimationFrame(mainIterFrame);
};

// Mainloop-level debug-rendering

var TOGGLE_TIMER_SHOW = 'T'.charCodeAt(0);

g_main._doTimerShow = false;

g_main._debugRender = function (ctx) {

    if (eatKey(TOGGLE_TIMER_SHOW)) this._doTimerShow = !this._doTimerShow;

    if (!this._doTimerShow) return;

    var y = 350;
    ctx.fillText('FT ' + this._frameTime_ms, 50, y+10);
    ctx.fillText('FD ' + this._frameTimeDelta_ms, 50, y+20);
    ctx.fillText('UU ' + g_prevUpdateDu, 50, y+30);
    ctx.fillText('FrameSync ON', 50, y+40);
};

g_main.init = function () {

    // Grabbing focus is good, but it sometimes screws up jsfiddle,
    // so it's a risky option during "development"
    //
    //window.focus(true);

    this._requestNextIteration();
};

function mainIter() {
    if (!requestedQuit()) {
      //g_main.gameOver();
    } else {
        window.clearInterval(intervalID);
    }
}


var intervalID = window.setInterval(mainIter, 16.666);
