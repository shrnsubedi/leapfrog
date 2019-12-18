class Powerup {
    constructor() {
        this.icons = [
            {
                sourceX: 1.8,
                sourceY: 4.0
            }
        ];

        this.width = 22;
        this.height = 24;
        this.xDest = Math.floor((Math.random() * 1000) + 200);
        this.yDest = Math.floor((Math.random() * 500) + 100);
        this.xMove;
        this.yMove;
        this.widthDest = 20;
        this.heightDest = 20;
    }
    drawPower = () => {
        ctx.drawImage(powerupImage, this.icons[0].sourceX, this.icons[0].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }
}