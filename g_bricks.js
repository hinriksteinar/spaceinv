// ============
// BRICK STUFF
// ============

var g_wall = {
 yBase : 0,
 xBase : 0,
 bricksLeft : true,

  brickWidth : 40,
  brickHeight : 20,

  // Here's my 2d array:

  bricks : [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,3,3,3,3,3,3,3,3,0],
    [0,3,2,2,2,2,2,2,3,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,3,1,1,1,1,1,1,3,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,3,2,2,2,2,2,2,3,0],
    [0,3,3,3,3,3,3,3,3,0],
    [0,0,0,0,3,3,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
    ]

  // array of bricks...

};

g_wall.render = function(ctx) {

  // render bricks
  // ...

  this.bricksLeft = false;
  for(var i = 0; i<this.bricks.length; i++){
    for(var j = 0; j<this.bricks[i].length; j++){
        if(this.bricks[i][j]>=1){
            this.bricksLeft = true;
            if(this.bricks[i][j]===1){ ctx.fillStyle = 'cyan';}
            else if(this.bricks[i][j]===2){ctx.fillStyle = 'yellow';}
            else if(this.bricks[i][j]===3){ctx.fillStyle = 'black';}
        ctx.fillRect(
                j *this.brickWidth+this.xBase,
                i *this.brickHeight+this.yBase,
                this.brickWidth,
                this.brickHeight
            );

        ctx.fillStyle = 'Orange';
        ctx.strokeRect(
                j *this.brickWidth+this.xBase,
                i *this.brickHeight+this.yBase,
                this.brickWidth,
                this.brickHeight
            );
    }
    }
  }
};

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
