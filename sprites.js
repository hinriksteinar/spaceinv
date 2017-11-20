
/*
*  Just a sprite constructor 
*/
function Sprite(image, width, height){
  this.image = image;
  this.width = width;
  this.height = height;
}

Sprite.prototype.drawAt = function (ctx, x, y){
  ctx.drawImage(this.image,x,y, this.width, this.height);
}
