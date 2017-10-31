// ============
// PADDLE STUFF
// ============

// COMMON PADDLE STUFF


// A generic contructor which accepts an arbitrary descriptor object
function Paddle(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

// Add these properties to the prototype, where they will serve as
// shared defaults, in the absence of an instance-specific overrides.

Paddle.prototype.halfWidth = 50;
Paddle.prototype.halfHeight = 10;

Paddle.prototype.update = function () {


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

Paddle.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillStyle = this.color;
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
    ctx.font="bold 40px Arial";
    ctx.fillStyle= 'black';
    ctx.fillText('Score',20,35);
    ctx.fillText(g_paddle1.count.toString(),150,35);
};

Paddle.prototype.collidesWith = function (prevX, prevY,
                                          nextX, nextY,
                                          r) {
    var paddleEdge = this.cy;

    if ((prevY +r <= paddleEdge && nextY +r> paddleEdge) || (prevY - r >paddleEdge && nextY - r <=paddleEdge)){

        if(nextX >= this.cx - this.halfWidth && nextX <=this.cx + this.halfWidth ){
            return true;
        }
    }
    return false;
};
