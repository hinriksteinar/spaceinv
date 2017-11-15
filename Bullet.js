"use strict";


function Bullet(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

    this.halfWidth = this.width/2;
    this.halfHeight = this.height/2;
    this.x2 = this.cx + this.width;
    this.y2 = this.cy + this.height;
}


var g_shotsFired = false;

Bullet.prototype.update = function (du) {

    this.collidesWith();

    if(this.cy < 0){
      bullets.splice(bullets.indexOf(this),1);
      if(bullets.length == 0){
        g_shotsFired = false;
      }
    }
    this.cy -= this.velY;

};


Bullet.prototype.collidesWith = function () {



     var nextY = this.cy - this.velY;
     for(var i = 0; i < badguys.length; i++){
       var a = badguys[i];
       if(nextY - this.height/2 <= a.cy+a.height/2 && nextY + this.height/2 >= a.cy - a.height/2
         && this.cx >= a.cx && this.cx <= a.cx + a.width){
         explode(a.cx, a.cy);
         g_score += badguys[i].score;
         badguys.splice(badguys.indexOf(a),1);
         bullets.splice(bullets.indexOf(this),1);
         if(!powerUpEnabled) g_killCount++;
         if(bullets.length == 0){
           g_shotsFired = false;
         }
         explotion.play();
         return;
       }
     }

};

Bullet.prototype.render = function (ctx) {

    this.sprite.drawAt(ctx, this.cx-this.width/2, this.cy-this.height/2);

};
