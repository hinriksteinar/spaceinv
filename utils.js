// =====
// UTILS
// =====

function clearCanvas(ctx) {
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = oldStyle;
    ctx.drawImage(g_images.background, 0, 0,ctx.canvas.width, ctx.canvas.height);
}

function fillCircle(ctx, x, y, r, style) {
    ctx.beginPath();
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = oldStyle;
}

function fillBox(ctx, x, y, w, h, style) {
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = oldStyle;
}




function fillCircle2(ctx, x, y, r, style) {
    ctx.beginPath();
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = oldStyle;
}
function fillCircleY(ctx, x, y, r, style) {
    ctx.beginPath();
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = oldStyle;
}
