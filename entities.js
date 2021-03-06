//---------------------
//   preloaded images
//---------------------
// Contains globals

var g_images = {

  enemy_1       : preloadIMG("enemy_1.png"),
  enemy_1_lazer : preloadIMG("enemy_1_lazer.png"),
  enemy_2       : preloadIMG("enemy_2.png"),
  enemy_2_lazer : preloadIMG("enemy_2_lazer.png"),
  enemy_3       : preloadIMG("enemy_3.png"),
  enemy_3_lazer : preloadIMG("enemy_3_lazer.png"),
  background    : preloadIMG("invaders.png"),
  tank_missile  : preloadIMG("tank_missile.png"),
  tank          : preloadIMG("tank.png"),
  explotion     : preloadIMG("test.png"),
  gameOverBackground    : preloadIMG("gameoverbackground.jpg"),
  welcomeScreenBackground    : preloadIMG("welcomescreenbackground.png")

}

function preloadIMG(x) {

  var img = new Image(50,50);
  img.src = "images/" + x;

  return img;

}


var g_level = 0;

var g_enemyXvel = 1;

var g_killCount = 0;

var powerUpEnabled = false;

var dropDown = false;

var xTimeOut;

var g_score = 0;

var g_lives = 3;

var tank;

var badguys = [];

var explosions = [];

var enemyBullets = [];

var lazers  = [];

var bullets = [];

var walls = [];

var myVar;
