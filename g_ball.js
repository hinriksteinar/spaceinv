// ==========
// BALL STUFF
// ==========

// BALL STUFF

function Ball(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

var g_ball = new Ball({
    cx: 50,
    cy: 200,
    radius: 10,
    color : 'darkblue',
    countAdded: 10,
    dead: false,

    xVel: 4,
    yVel: 3.5
});

var g_ball2 = new Ball({
    cx: 50,
    cy: 200,
    radius: 10,
    color : 'darkred',
    countAdded: 10,
    dead : false,

    xVel: 2.5,
    yVel: 2.2
});

Ball.prototype.update = function () {
    // Remember my previous position
    var prevX = this.cx;
    var prevY = this.cy;

    // Compute my provisional new position (barring collisions)
    var nextX = prevX + this.xVel;
    var nextY = prevY + this.yVel;

    // Bounce off the paddles

    var fifthWidth = (g_paddle1.halfWidth*2)/5;

    if (g_paddle1.collidesWith(prevX, prevY, nextX, nextY, this.radius))
    {

        this.countAdded = 1;

        if ((this.xVel <0 && g_paddle1.cx + 2*fifthWidth < nextX ) || (this.xVel>0 && g_paddle1.cx - 2*fifthWidth > nextX)){
        this.xVel *= -1;
        this.yVel *= -1;

        }


        else {
            this.yVel *=-1;
        }
    }

    //bounce off bricks

    var brickX = Math.floor((nextX - g_wall.xBase) / g_wall.brickWidth);
    var brickY = Math.floor((nextY - g_wall.yBase ) / g_wall.brickHeight);

    var prevbrickX = Math.floor((prevX - g_wall.xBase) / g_wall.brickWidth);
    var prevbrickY = Math.floor((prevY - g_wall.yBase ) / g_wall.brickHeight);

    if(brickY !== prevbrickY){
        if(g_wall.collidesWithBall(brickX, brickY)){

            this.yVel *=-1;
            g_paddle1.count = g_paddle1.count +this.countAdded;
            this.countAdded ++;

        }
        }
    else if(brickX !== prevbrickX){
        if(g_wall.collidesWithBall(brickX, brickY)){

            this.xVel *=-1;
            g_paddle1.count = g_paddle1.count +this.countAdded;
            this.countAdded ++;
        }
    }



    // Bounce off top edges
    if (nextY < 0 ) {               // bottom edge
        this.yVel *= -1;
    }

    if(nextY > g_canvas.height +5){
        this.dead = true;
    }

    // Reset if we fall off the left or right edges
    // ...by more than some arbitrary `margin`
    //
    var margin = 4 * this.radius;
    if (nextX < 0) {
        this.xVel *= -1;
    }

        if (
        nextX > g_canvas.width) {
        this.xVel *= -1;
    }
    // *Actually* update my position
    // ...using whatever velocity I've ended up with
    //
    this.cx += this.xVel;
    this.cy += this.yVel;
};

Ball.prototype.reset = function () {
    this.cx = 50;
    this.cy =200;
    this.xVel = this.xVel;
    this.yVel = this.yVel;
    this.dead = false;
    this.color = this.color;
};

Ball.prototype.render = function (ctx) {
    ctx.fillStyle = this.color;
    fillCircle(ctx, this.cx, this.cy, this.radius);
};
