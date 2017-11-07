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




    if(this.cy < 100){
      bullets.splice(bullets.indexOf(this),1);
      g_shotsFired = false;
    }

    this.cy -= this.velY;

};


Bullet.prototype.collidesWith = function () {

}



Bullet.prototype.render = function (ctx) {

    this.sprite.drawAt(ctx, this.cx, this.cy);



};
