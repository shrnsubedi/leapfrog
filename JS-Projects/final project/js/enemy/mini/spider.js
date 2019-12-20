class SpiderEnemy {
    constructor() {
        this.frame = 0;
        this.id = setInterval(this.animateEnemy.bind(this), 75);
        this.animate = [];
        this.state = {
            dead: 0,
            alive: 1,
            current: 1
        }
        this.animateMoveRight = [
            {
                sourceX: 8,
                sourceY: 20
            },
            {
                sourceX: 39,
                sourceY: 20
            },
            {
                sourceX: 72,
                sourceY: 20
            },
            {
                sourceX: 104,
                sourceY: 20
            },
            {
                sourceX: 136,
                sourceY: 20
            }
        ];
        this.animateMoveLeft = [
            {
                sourceX: 8,
                sourceY: 277
            },
            {
                sourceX: 39,
                sourceY: 277
            },
            {
                sourceX: 72,
                sourceY: 277
            },
            {
                sourceX: 104,
                sourceY: 277
            },
            {
                sourceX: 136,
                sourceY: 277
            }
        ];
        this.animateDead = [
            {
                sourceX: 107,
                sourceY: 216
            }
        ];
        this.animate = this.animateMoveLeft;
        this.width = 20;
        this.height = 20;
        this.posGen = Math.floor(Math.random() * Math.floor(3));
        this.posGenValues = [318, 640, 960];
        this.xDest = this.posGenValues[this.posGen];
        this.yDest = 122;
        this.widthDest = 30;
        this.heightDest = 30;
        this.moveDist = 10;
        this.heroX;
        this.heroY;

        this.health = 22;
    }

    getHeroPosition = (heroX, heroY) => {
        this.heroX = heroX;
        this.heroY = heroY;
    }

    animateEnemy = () => {
        this.frame++;
    }

    moveEnemy = () => {
        if (this.heroX >= this.xDest) {
            this.xDest++;
            this.animate = this.animateMoveRight;
            if (this.heroY > this.yDest) {
                this.yDest++;
            }
            else if (this.heroY < this.yDest) {
                this.yDest--;
            }
        }
        else if (this.heroX <= this.xDest) {
            this.xDest--;
            this.animate = this.animateMoveLeft;
            if (this.heroY > this.yDest) {
                this.yDest++;
            }
            else if (this.heroY < this.yDest) {
                this.yDest--
            }
        }
    }

    drawEnemy = () => {
        if (this.health == 0) {
            this.state.current = 0;
            this.animate = this.animateDead;
            this.frame = this.animate.length - 1;
            clearInterval(this.id);

        }
        else if (this.health != 0) {
            if (this.frame >= this.animate.length) {
                this.frame = 0;
            }
        }
        ctx.drawImage(spiderImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }
}