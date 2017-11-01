//---------------------
//   preloaded images
//---------------------
// Let's preload the images the naive way
// in an object

var g_images = {

  enemy_1       : preloadIMG("enemy_1.png"),
  enemy_1_lazer : preloadIMG("enemy_1_lazer.png"),
  enemy_2       : preloadIMG("enemy_2.png"),
  enemy_2_lazer : preloadIMG("enemy_2_lazer.png"),
  enemy_3       : preloadIMG("enemy_3.png"),
  enemy_3_lazer : preloadIMG("enemy_3_lazer.png"),
  background    : preloadIMG("invaders.png"),
  tank_missile  : preloadIMG("tank_missile.png"),
  tank          : preloadIMG("tank.png")

}


// preloads and returns the image

function preloadIMG(x) {

  var img = new Image(50,50);
  img.src = "images/" + x;

  return img;

}

var img = new Image(100,100);
img.src = "images/tank.png";

//var img1 =new Image(100,100);
//mg1.src = "images/invaders.png";

//var g_enemy = new Sprite(img);
