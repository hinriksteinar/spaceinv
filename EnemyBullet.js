// ======
// BULLET
// ======
//
"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

/*
0        1         2         3         4         5         6         7         8
12345678901234567890123456789012345678901234567890123456789012345678901234567890
*/




// A generic contructor which accepts an arbitrary descriptor object
function Bullet2(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

    this.halfWidth = this.width/2;
    this.halfHeight = this.height/2;
    this.x2 = this.cx + this.width;
    this.y2 = this.cy + this.height;
}

// Initial, inheritable, default values
//
// (You might want these to assist with early testing,
//  even though they are unnecessary in the "real" code.)
//
/*Bullet.prototype.rotation = 0;
Bullet.prototype.cx = 200;
Bullet.prototype.cy = 200;
Bullet.prototype.velX = 1;
Bullet.prototype.velY = 1;*/
var g_shotsFired = false;

// Convert times from seconds to "nominal" time units.


Bullet2.prototype.update = function (du) {

    // TODO: Implement this


    this.collidesWith();

    if(this.cy > g_canvas.height){
        shoot_land.play();
      enemyBullets.splice(enemyBullets.indexOf(this),1);
    }
    this.cy -= this.velY;

};


Bullet2.prototype.collidesWith = function () {


    var nextY = this.cy + this.velY;
    if(this.cy >= tank.cy - tank.height/2 &&
       this.cy <= tank.cy + tank.height &&
       this.cx >= tank.cx - tank.width/2 &&
       this.cx <= tank.cx + tank.width/2){
      if(g_lives == 0){
        g_main.gameOver();

      }
      else{
          g_lives--;
          enemyBullets = [];
          tank.cx = 400;
          tank.cy = 470;
      }
  }

};



Bullet2.prototype.render = function (ctx) {

    this.sprite.drawAt(ctx, this.cx-this.width/2, this.cy-this.height/2);





};
