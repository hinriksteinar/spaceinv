


function Sprite(image){
  this.image = image;
  this.width = 50;
  this.height = 50;
  //this.scale = 1;
}

Sprite.prototype.drawAt = function (ctx, x, y){
  ctx.drawImage(this.image,x,y, this.width, this.height);
}
