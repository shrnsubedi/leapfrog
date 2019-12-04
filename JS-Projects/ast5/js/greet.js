const beforeStart = {
    sourceX: 0,
    sourceY: 228,
    width: 173,
    height: 152,
    xDest: cvs.width / 2 - 173 / 2,
    yDest: 80,

    drawGreetingScreen: function () {
        if (gameStates.currentState == gameStates.beforeStart) {
            ctx.drawImage(spriteImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.width, this.height);
        }
    }
}

const gameOverScreen = {
    sourceX: 175,
    sourceY: 228,
    width: 225,
    height: 202,
    xDest: cvs.width / 2 - 225 / 2,
    yDest: 80,

    drawGameOver: function () {
        if (gameStates.currentState == gameStates.gameOver) {
            ctx.drawImage(spriteImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.width, this.height);
        }
    }
}