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
function Bullet(descr) {
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


Bullet.prototype.update = function (du) {

    // TODO: Implement this


    this.collidesWith();

    if(this.cy < 0){
      bullets.splice(bullets.indexOf(this),1);
      g_shotsFired = false;
    }



    this.cy -= this.velY;



};


Bullet.prototype.collidesWith = function () {
    /*if(nextY > highestY) {
      return;
    }*/

    for(var i = 0; i < badguys.length; i++){
      var a = badguys[i];
      var b = this;
      if(a.cx < b.x2 && a.x2 > b.cx && a.cy < b.y2 && a.y2 > b.cy){
        console.log("hello");
        badguys.splice(i,1);
        bullets.splice(bullets.indexOf(b),1);
        g_shotsFired = false;

      }
    }



}



Bullet.prototype.render = function (ctx) {

    this.sprite.drawAt(ctx, this.cx, this.cy);



};
