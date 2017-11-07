var g_wall = {
 yBase : 400,
 xBase : 132,
 bricksLeft : true,

  brickWidth : 10,
  brickHeight : 5,

  // Here's my 2d array:

  bricks : [
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1]
    ]

  // array of bricks...

};
var g_wall2 = {
 yBase : 400,
 xBase : 354,
 bricksLeft : true,

  brickWidth : 10,
  brickHeight : 5,

  // Here's my 2d array:

  bricks : [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1]
    ]

  // array of bricks...

};
var g_wall3 = {
 yBase : 400,
 xBase : 576,
 bricksLeft : true,

  brickWidth : 10,
  brickHeight : 5,

  // Here's my 2d array:

  bricks : [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1]
    ]

  // array of bricks...

};
g_wall.render = function(ctx){
  this.bricksLeft = false;
  for(var i = 0; i<this.bricks.length; i++){
    for(var j = 0; j<this.bricks[i].length; j++){
        if(this.bricks[i][j]>=1){
            this.bricksLeft = true;
            if(this.bricks[i][j]===1){ctx.fillStyle = 'green';}

        ctx.fillRect(
                j *this.brickWidth+this.xBase,
                i *this.brickHeight+this.yBase,
                this.brickWidth,
                this.brickHeight
            );



    }
    }
  }
};

g_wall2.render = function(ctx){
  this.bricksLeft = false;
  for(var i = 0; i<this.bricks.length; i++){
    for(var j = 0; j<this.bricks[i].length; j++){
        if(this.bricks[i][j]>=1){
            this.bricksLeft = true;
            if(this.bricks[i][j]===1){ctx.fillStyle = 'green';}

        ctx.fillRect(
                j *this.brickWidth+this.xBase,
                i *this.brickHeight+this.yBase,
                this.brickWidth,
                this.brickHeight
            );


    }
    }
  }
};

g_wall3.render = function(ctx) {

  // render bricks
  // ...

  this.bricksLeft = false;
  for(var i = 0; i<this.bricks.length; i++){
    for(var j = 0; j<this.bricks[i].length; j++){
        if(this.bricks[i][j]>=1){
            this.bricksLeft = true;
            if(this.bricks[i][j]===1){ctx.fillStyle = 'green';}
        ctx.fillRect(
                j *this.brickWidth+this.xBase,
                i *this.brickHeight+this.yBase,
                this.brickWidth,
                this.brickHeight
            );



    }
    }
  }
};
// hægt  að nota fyrir skot seinna með

       g_wall.collidesWithBall = function(brickX, brickY) {
        if ((brickX >= this.xBase/this.brickWidth) && (brickX < this.xBase+this.bricks[brickX].length*this.brickWidth/this.brickWidth))
        {
            if ((brickY >= this.yBase/this.brickHeight) && (brickY < this.yBase +this.bricks.length*this.brickHeight/this.brickHeight)){
                if(this.bricks[brickY][brickX] >= 1){
                  this.bricks[brickY][brickX]--;
                  return true;
            }
            }
        }
        return false;
    };
