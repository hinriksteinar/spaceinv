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
    this.yVel = 1.5;

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



  if (this.cy + 100 > g_canvas.height){
    if(g_lives == 0) {
      g_main.gameOver();

    }
    else{
      g_lives--;
    }
  }
  if(dropDown){
    this.cy += this.yVel;
  }

  var nextX = this.cx + this.xVel;
  if(nextX < 0 || nextX + 25 > g_canvas.width){
    dropDown = true;
    pausex();
    turnAround();
    return;
  }
  else {
    if(!dropDown){
    this.cx += this.xVel;
  }

  }


}
