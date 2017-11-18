function Exp2(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

}

function explodedrop(x,y){
      explosions.push(new Exp2({
        cx : x,
        cy : y,
        xVel : 0,
        yVel : -5,
        y : 30
      }));

      explosions.push(new Exp2({
      	cx : x,
        cy : y,
        xVel : -3.5,
        yVel : -5,
        r : 10
      }));

      explosions.push(new Exp2({
        cx : x,
        cy : y,
        xVel : -10,
        yVel : -10,
        r    : 3,
      }));

      explosions.push(new Exp2({
        cx : x,
        cy : y,
        xVel : 10,
        yVel : -7,
        r    : 3
      }));

      explosions.push(new Exp2({
        cx : x,
        cy : y,
        xVel : 15,
        yVel : -7,
        r    : 3
      }));

      explosions.push(new Exp2({
        cx : x,
        cy : y,
        xVel : -15,
        yVel : -7,
        r   : 3
      }));


}

Exp2.prototype.update = function (){

     if(Math.abs(this.xVel) < 0.5){
       explosions.splice(explosions.indexOf(this), 1);
     }
     else{
	         this.cx += this.xVel;
           this.cy += this.yVel;
         }
         this.xVel /= 2;

}

Exp2.prototype.render = function (){
	fillCircle2(g_ctx, this.cx, this.cy, this.r, 'red');
  fillCircleY(g_ctx, this.cx, this.cy, this.y, 'yellow');

}
