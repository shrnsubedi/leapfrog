//Note:
//Create Sprites for each direction

class Arrow {
    constructor() {
        this.sourceX = 0;
        this.sourceY = 0;
        this.width = 16;
        this.height = 16;
        this.xDest;
        this.yDest;
        this.xMove;
        this.yMove;
        this.widthDest = 20;
        this.heightDest = 20;
        this.id = setInterval(this.moveArrow.bind(this), 30);
    }

    getHeroPosition = (heroX, heroY) => {
        this.xDest = heroX;
        this.yDest = heroY;
    }

    getArrowDirection = (keyPressed) => {
        if (keyPressed['ArrowUp'] && keyPressed['ArrowRight']) {
            this.xMove = 10;
            this.yMove = -10;
        }
        else if (keyPressed['ArrowDown'] && keyPressed['ArrowRight']) {
            this.xMove = 10;
            this.yMove = 10;
        }
        else if (keyPressed['ArrowUp'] && keyPressed['ArrowLeft']) {
            this.xMove = -10;
            this.yMove = -10;
        }
        else if (keyPressed['ArrowDown'] && keyPressed['ArrowLeft']) {
            this.xMove = -10;
            this.yMove = -10;
        }
        else if (keyPressed['ArrowUp']) {
            this.yMove = -10;
            this.xMove = 0;
        }
        else if (keyPressed['ArrowDown']) {
            this.yMove = 10;
            this.xMove = 0;
        }
        else if (keyPressed['ArrowLeft']) {
            this.yMove = 0;
            this.xMove = -10;
        }
        else if (keyPressed['ArrowRight']) {
            this.yMove = 0;
            this.xMove = 10;
        }
    }

    moveArrow = () => {
        if (this.yDest >= 650 || this.yDest <= 110 || this.xDest >= 1050 || this.xDest <= 220) {

        }
        else {
            this.yDest = this.yDest + this.yMove;
            this.xDest = this.xDest + this.xMove;
        }

    }

    drawArrow = () => {
        ctx.drawImage(arrowImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }



}