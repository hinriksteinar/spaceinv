// GENERIC UPDATE LOGIC

// The "nominal interval" is the one that all of our time-based units are
// calibrated to e.g. a velocity unit is "pixels per nominal interval"
//
var NOMINAL_UPDATE_INTERVAL = 16.666;

// Dt means "delta time" and is in units of the timer-system (i.e. milliseconds)
//
var g_prevUpdateDt = null;

// Du means "delta u", where u represents time in multiples of our nominal interval
//
var g_prevUpdateDu = null;

// Track odds and evens for diagnostic / illustrative purposes
//
var g_isUpdateOdd = false;
var powerUpInterval;

function update(dt) {

    // Get out if skipping (e.g. due to pause-mode)
    //
    if(isGameOverScreen && g_keys[KEY_RESTART]) location.reload();

    if (shouldSkipUpdate()) return;

    if(g_killCount > 20){
      g_killCount = 0;
      powerUpEnabled = true;
      powerUpInterval = setTimeout(function(){
        powerUpEnabled = false;
      }, 10000);
    }


    // Remember this for later
    //
    var original_dt = dt;

    // Warn about very large dt values -- they may lead to error
    //
    //console.log(dt);
    //console.log(NOMINAL_UPDATE_INTERVAL);
    if (dt > 200) {
        console.log("Big dt =", dt, ": CLAMPING TO NOMINAL");

        dt = NOMINAL_UPDATE_INTERVAL;
    }

    // If using variable time, divide the actual delta by the "nominal" rate,
    // giving us a conveniently scaled "du" to work with.
    //

    var du = (dt / NOMINAL_UPDATE_INTERVAL);
    //console.log("du" + du);

    //console.log(du);
    updateSimulation(du);

    g_prevUpdateDt = original_dt;
    g_prevUpdateDu = du;

    g_isUpdateOdd = !g_isUpdateOdd;
}

// Togglable Pause Mode
//
var KEY_PAUSE = 'P'.charCodeAt(0);
var KEY_STEP  = 'O'.charCodeAt(0);
var mute = false;
var g_isUpdatePaused = false;
var clock_pause = false;
// til að pausa klukku fyrir enemybullet
function clockPause() {
  if(clock_pause==true) {
    clearTimeout(myVar);
console.log('clockstopp');
  }
   else {
    resetInterval();
    console.log('clockresume');
 }
}
 function soundmute() {
if (mute==true) {
  enableMute();
}
else { enablePlay();

}
    }


function shouldSkipUpdate() {

    if (eatKey(KEY_PAUSE)) {
        g_isUpdatePaused = !g_isUpdatePaused;
        clock_pause = !clock_pause;
        mute = !mute;
        clockPause(clock_pause);
        soundmute(mute);





    }

    return g_isUpdatePaused && !eatKey(KEY_STEP);
}
