// ===================================
//       Enemy Bullets
//   Differs slightly from bullets shot from the
//   ship.
// =================================
//
"use strict";



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

var g_shotsFired = false;


Bullet2.prototype.update = function (du) {

    // TODO: Implement this


    this.collidesWith();

    if(this.cy > g_canvas.height){
      //console.log(g_canvas.height);
      //console.log(this.cy + 'cy');

      //console.log(this.cx + 'cx');
        shoot_land.play();
        explodedrop(this.cx, this.cy);

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
          hit.play();
          explodedrop(this.cx-this.halfWidth, this.cy-this.halfHeight);
      }
  }

};

Bullet2.prototype.render = function (ctx) {

    this.sprite.drawAt(ctx, this.cx-this.width/2, this.cy-this.height/2);


};
