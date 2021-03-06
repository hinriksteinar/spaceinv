// ============
// TANK STUFF
// Handles the tank movements and the fire mechanic. 
// ============

"use strict";

// A generic contructor which accepts an arbitrary descriptor object
function Tank(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}


Tank.prototype.halfWidth = 25;
Tank.prototype.halfHeight = 25;
Tank.prototype.KEY_FIRE = ' '.charCodeAt(0);




Tank.prototype.update = function () {





    if(g_keys[this.KEY_FIRE] && !g_shotsFired){
      g_shotsFired = true;
      shoot_from_spaceship.play();


      bullets.push(new Bullet({
        cx     : this.cx,
        cy     : this.cy,
        width  : 5,
        height : 20,
        velY   : 10,
        sprite : new Sprite(g_images.tank_missile, 5,20)
      }));

      if(powerUpEnabled){
          bullets.push(new Bullet({
            cx     : this.cx+10,
            cy     : this.cy,
            width  : 5,
            height : 20,
            velY   : 10,
            sprite : new Sprite(g_images.tank_missile, 5,20)
          }));

          bullets.push(new Bullet({
            cx     : this.cx-10,
            cy     : this.cy,
            width  : 5,
            height : 20,
            velY   : 10,
            sprite : new Sprite(g_images.tank_missile, 5,20)
          }));
        }
    }


    if(g_keys[this.GO_RIGHT] && this.cx + this.halfWidth < g_canvas.width){
        if(g_keys[this.GO_FAST]){

        this.cx += 7.5;
        takeoff.play();

    }
    else {
        this.cx +=5.0;
    }

    }

    else if(g_keys[this.GO_LEFT] && this.cx - this.halfWidth > 0){
                if(g_keys[this.GO_FAST]){
        this.cx -= 7.5;
      takeoff.play();

    }
        else {
            this.cx -= 5.0;
        }
    }

};




Tank.prototype.render = function (ctx) {
    this.sprite.drawAt(ctx,
                 this.cx-this.halfWidth,
                 this.cy-this.halfHeight);
};
