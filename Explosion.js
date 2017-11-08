function Exp(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

}



// Add these properties to the prototype, where they will serve as
// shared defaults, in the absence of an instance-specific overrides.

// PADDLE 1

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


}

Exp.prototype.update = function (){
  /*if(   this.cx > g_canvas.width
     || this.cx < 0
     || this.cy > g_canvas.height
     || this.cy < 0){
       explosions.splice(explosions.indexOf(this), 1);
     }*/
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
}
