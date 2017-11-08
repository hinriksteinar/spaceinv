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
    this.xVel = 0.5;
    this.yVel = 40;

}

Enemy.prototype.render = function(ctx){
  // STUFF
  this.sprite.drawAt(ctx, this.cx,
                          this.cy);

}




Enemy.prototype.update = function (du) {
  //console.log(this.cx - 25);

  var nextX = this.cx + this.xVel;
  if(nextX < 0 || nextX + 25 > g_canvas.width){
    turnAround();
    return;
  }
  else {

    this.cx += this.xVel;

  }


}
