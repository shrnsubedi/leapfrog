const hero = {
    sourceX: 6,
    sourceY: 11,
    width: 20,
    height: 20,
    xDest: 670,
    yDest: 420,
    widthDest: 30,
    heightDest: 30,

    drawHero: function () {
        ctx.drawImage(heroImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    },

}