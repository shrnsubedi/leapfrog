const bg = {
    sourceX: 0,
    sourceY: 0,
    width: 1280,
    height: 720,
    xDest: 0,
    yDest: 0,
    widthDest: 1280,
    heightDest: 720,

    drawBackground: function () {
        //console.log(backgroundImage);
        ctx.drawImage(backgroundImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }
}
