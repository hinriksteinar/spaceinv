// ============
// TANK STUFF
// ============

// COMMON TANK STUFF


// A generic contructor which accepts an arbitrary descriptor object
function Tank(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

// Add these properties to the prototype, where they will serve as
// shared defaults, in the absence of an instance-specific overrides.

Tank.prototype.halfWidth = 25;
Tank.prototype.halfHeight = 25;

Tank.prototype.update = function () {


    if(g_keys[this.GO_RIGHT] && this.cx + this.halfWidth < g_canvas.width){
        if(g_keys[this.GO_FAST]){
        this.cx += 7.5;
    }
    else {
        this.cx +=5.0;
    }

    }

    else if(g_keys[this.GO_LEFT] && this.cx - this.halfWidth > 0){
                if(g_keys[this.GO_FAST]){
        this.cx -= 7.5;
    }
        else {
            this.cx -= 5.0;
        }
    }

};

Tank.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    //ctx.fillStyle = this.color;
    this.sprite.drawAt(ctx,
                 this.cx-this.halfWidth,
                 this.cy-this.halfHeight);

};

Tank.prototype.collidesWith = function (prevX, prevY,
                                          nextX, nextY,
                                          r) {
    var tankEdge = this.cy;

    if ((prevY +r <= tankEdge && nextY +r> tankEdge) ||
     (prevY - r >tankEdge && nextY - r <=tankEdge)){

        if(nextX >= this.cx - this.halfWidth &&
           nextX <=this.cx + this.halfWidth ){
            return true;
        }
    }
    return false;
};
