function Sprite(image){
  this.image = image;
  //this.width = image.width;
  //this.height = image.height;
  //this.scale = 1;
}

Sprite.prototype.drawAt = function (ctx, x, y){
  ctx.drawImage(this.image,x,y);
}
