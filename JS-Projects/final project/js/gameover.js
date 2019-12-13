class GameOver {
    constructor() {
        this.sourceX = 0;
        this.sourceY = 0;
        this.width = 1280;
        this.height = 1280;
        this.xDest = 0;
        this.yDest = 0;
        this.widthDest = 1280;
        this.heightDest = 720;
    }

    drawGameOver = () => {
        ctx.drawImage(gameOverImg, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }
}