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

  if (this.cy + 100 > g_canvas.height){
    if(g_lives == 0) {
      g_main.gameOver();

    }
    else{
      g_lives--;
    }
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
