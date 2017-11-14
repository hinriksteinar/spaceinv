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



     var nextY = this.cy - this.velY;
     for(var i = 0; i < badguys.length; i++){
       var a = badguys[i];
       if(nextY - this.height/2 <= a.cy+a.height/2 && nextY + this.height/2 <= a.cy - a.height/2
         && this.cx >= a.cx-a.width/2 && this.cx <= a.cx + a.width/2){

         explode(a.cx, a.cy);
         badguys.splice(badguys.indexOf(a),1);
         bullets.splice(bullets.indexOf(this),1);
         g_shotsFired = false;
         explotion.play();
         //console.log("collision");
         return;
       }
     }

  /*  for(var i = 0; i < badguys.length; i++){
      var a = badguys[i];
      var aCheck = a.cx < this.x2;
      var bCheck = a.x2 > this.cx;
      var cCheck = a.cy < this.y2;
      var dCheck = a.y2 > this.cy;
      //console.log(aCheck);
      //console.log(bCheck);
      //console.log(cCheck);
      //console.log(dCheck);
      if( aCheck && bCheck && cCheck && dCheck ) {

        badguys.splice(badguys.indexOf(a),1);
        bullets.splice(bullets.indexOf(this),1);
        g_shotsFired = false;
        return;

      }
    }*/
};



Bullet.prototype.render = function (ctx) {

    this.sprite.drawAt(ctx, this.cx-this.width/2, this.cy-this.height/2);



};
