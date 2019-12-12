class batEnemy {
    constructor() {
        this.frame = 0;
        setInterval(this.animateEnemy.bind(this), 75);
        this.animate = [
            {
                sourceX: 1,
                sourceY: 2
            },
            {
                sourceX: 16,
                sourceY: 2
            },
            {
                sourceX: 34,
                sourceY: 2
            },
            {
                sourceX: 50,
                sourceY: 2
            },
            {
                sourceX: 64,
                sourceY: 2
            },
        ]
        this.width = 15;
        this.height = 15;
        this.xDest = 500;
        this.yDest = 500;
        this.widthDest = 30;
        this.heightDest = 30;
        this.moveDist = 10;
        this.heroX;
        this.heroY;
    }

    getHeroPosition = (heroX, heroY) => {
        this.heroX = heroX;
        console.log('Hero position in bat class:' + heroX);
        this.heroY = heroY;
    }

    animateEnemy = () => {
        this.frame++;
    }

    moveEnemy = () => {
        if (this.heroX >= this.xDest) {
            this.xDest++;
            if (this.heroY > this.yDest) {
                this.yDest++;
            }
            else if (this.heroY < this.yDest) {
                this.yDest--;
            }
        }
        else if (this.heroX <= this.xDest) {
            this.xDest--;
            if (this.heroY > this.yDest) {
                this.yDest++;
            }
            else if (this.heroY < this.yDest) {
                this.yDest--
            }
        }
    }
    drawEnemy = () => {
        if (this.frame == this.animate.length) {
            this.frame = 0;
        }
        ctx.drawImage(batImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }

}