function Exp(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

}

function explode(x,y){
      explosions.push(new Exp({
        cx : x,
        cy : y,
        xVel : -7.5,
        yVel : 5,
        r : 5
      }));

      explosions.push(new Exp({
      	cx : x,
        cy : y,
        xVel : 7.5,
        yVel : 5,
        r : 5
      }));

      explosions.push(new Exp({
        cx : x,
        cy : y,
        xVel : -15,
        yVel : 5,
        r    : 5,
      }));

      explosions.push(new Exp({
        cx : x,
        cy : y,
        xVel : 15,
        yVel : 5,
        r    : 5
      }));

      explosions.push(new Exp({
        cx : x,
        cy : y,
        xVel : -15,
        yVel : 2.5,
        r    : 5
      }));

      explosions.push(new Exp({
        cx : x,
        cy : y,
        xVel : 15,
        yVel : 2.5,
        r    : 5
      }));

      explosions.push(new Exp({
        cx : x,
        cy : y,
        xVel : 0,
        yVel : 0.1,
        y    : 10
      }));

      explosions.push(new Exp({
        cx : x,
        cy : y,
        xVel : 0,
        yVel : 0.2,
        s    : 5
      }));


}

Exp.prototype.update = function (){

     if(Math.abs(this.xVel) < 2){
       explosions.splice(explosions.indexOf(this), 1);
     }
     else{
	         this.cx += this.xVel;
           this.cy += this.yVel;
         }
         this.xVel /= 1.02;

}

Exp.prototype.render = function (){
	fillCircle(g_ctx, this.cx, this.cy, this.r, 'blue');
  fillCircleY(g_ctx, this.cx, this.cy, this.y, 'yellow');
  fillCircle2(g_ctx, this.cx, this.cy, this.s, 'red');

}
