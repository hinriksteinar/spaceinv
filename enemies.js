//----------------------------------------------------------
//  ENEMIES
//
//----------------------------------------------------------

function Enemy(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
    this.xVel = 0.75;
    this.yVel = 50;

}

Enemy.prototype.render = function(ctx){
  // STUFF
  this.sprite.drawAt(ctx, this.cx,
                          this.cy);
}


Enemy.prototype.update = function () {
  //console.log(this.cx - 25);
  var nextX = this.cx + this.xVel;
  if(nextX < 0 || nextX + 50 > g_canvas.width){
    turnAround();
    return;
  }
  else {
    this.cx += this.xVel;
  }


}
