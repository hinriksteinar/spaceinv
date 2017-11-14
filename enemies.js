//----------------------------------------------------------
//  ENEMIES
//
//----------------------------------------------------------

function Enemy(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
    this.x2 = this.cx + this.width;
    this.y2 = this.cy + this.height;
    this.xVel = 1;
    this.yVel = 40;

}

Enemy.prototype.render = function(ctx){
  // STUFF
  this.sprite.drawAt(ctx, this.cx,
                          this.cy);

}

Enemy.prototype.fireBullet = function (){
  enemyBullets.push(new Bullet2({
    cx     : this.cx,
    cy     : this.cy,
    width  : 20,
    height : 30,
    velY   : -4,
    sprite : this.lazer
  }));
}




Enemy.prototype.update = function (du) {
  var KEY_RESTART = 'R'.charCodeAt(0);
  if (eatKey(KEY_RESTART)) {
    g_main._isGameOver = true;
    location.reload();
  }
  //console.log(this.cx - 25);

  if (this.cy + 100 > g_canvas.height){

    g_main._isGameOver = true;
     location.reload();
    console.log("game over");
  }

  var nextX = this.cx + this.xVel;
  if(nextX < 0 || nextX + 25 > g_canvas.width){
    turnAround();
    return;
  }
  else {

    this.cx += this.xVel;

  }


}
