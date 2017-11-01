//----------------------------------------------------------
//  ENEMIES
//
//----------------------------------------------------------

function Enemy(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

}

Enemy.prototype.render = function(ctx){
  // STUFF
  this.sprite.drawAt(ctx, this.cx,
                          this.cy);
}


Enemy.prototype.update = function () {

  this.cx += 0.75;


}
