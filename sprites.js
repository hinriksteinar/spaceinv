


function Sprite(image){
  this.image = image;
  this.width = 40;
  this.height = 20;
  //this.scale = 1;
}

Sprite.prototype.drawAt = function (ctx, x, y){
  ctx.drawImage(this.image,x,y, this.width, this.height);
}
