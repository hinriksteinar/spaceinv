
function Sprite(image, width, height){
  this.image = image;
  //this.scale = 1;
  this.width = width;
  this.height = height;
}

Sprite.prototype.drawAt = function (ctx, x, y){
  ctx.drawImage(this.image,x,y, this.width, this.height);
}
