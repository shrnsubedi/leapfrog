const bg = {
    sourceX: 0,
    sourceY: 0,
    width: 275,
    height: 226,
    xDest: 0,
    yDest: cvs.height - 226,

    drawBackground: function () {
        ctx.drawImage(spriteImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.width, this.height);
        ctx.drawImage(spriteImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest + this.width, this.yDest, this.width, this.height);
    }
}

const fg = {
    sourceX: 276,
    sourceY: 0,
    width: 224,
    height: 112,
    xDest: 0,
    yDest: cvs.height - 112,
    dx: 2,

    drawForeground: function () {
        ctx.drawImage(spriteImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.width, this.height);
        ctx.drawImage(spriteImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest + this.width, this.yDest, this.width, this.height);
    },

    moveForeground: function () {
        if (gameStates.currentState == gameStates.playing) {
            this.xDest = (this.xDest - this.dx) % (this.width / 2);
        }
    }
}

