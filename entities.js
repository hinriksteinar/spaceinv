//---------------------
//   preload things
//---------------------
var img = new Image(100,100);
img.src = "images/enemy_1.png";

var img1 =new Image(100,100);
img1.src = "images/invaders.png";
img1.style.transform = "rotate(270deg)";

var g_enemy = new Sprite(img);
