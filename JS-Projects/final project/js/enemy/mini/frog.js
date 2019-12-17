class FrogEnemy {
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
                sourceX: 52,
                sourceY: 92
            },
            {
                sourceX: 84,
                sourceY: 92
            },
            {
                sourceX: 116,
                sourceY: 92
            },
            {
                sourceX: 148,
                sourceY: 92
            },
            {
                sourceX: 180,
                sourceY: 92
            }
        ];
        this.animateMoveLeft = [
            {
                sourceX: 229,
                sourceY: 92
            },
            {
                sourceX: 260,
                sourceY: 92
            },
            {
                sourceX: 293,
                sourceY: 92
            },
            {
                sourceX: 325,
                sourceY: 92
            },
            {
                sourceX: 358,
                sourceY: 92
            }
        ];
        this.animateDead = [
            {
                sourceX: 148,
                sourceY: 192
            }
        ]
        this.animate = this.animateMoveLeft;
        this.width = 15;
        this.height = 15;
        this.posGen = Math.floor(Math.random() * Math.floor(3));
        this.posGenValues = [318, 640, 960];
        this.xDest = this.posGenValues[this.posGen];
        this.yDest = 122;
        this.widthDest = 30;
        this.heightDest = 30;
        this.moveDist = 10;
        this.heroX;
        this.heroY;

        this.health = 20;
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
            if (this.frame >= this.animate.length) {
                this.frame = this.animate.length - 1;
                clearInterval(this.id);
            }
        }
        else if (this.health != 0) {
            if (this.frame >= this.animate.length) {
                this.frame = 0;
            }
        }
        ctx.drawImage(frogImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }
}