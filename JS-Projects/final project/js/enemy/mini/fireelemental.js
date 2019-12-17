class FireleEnemy {
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
                sourceY: 178
            },
            {
                sourceX: 37,
                sourceY: 178
            },
            {
                sourceX: 70,
                sourceY: 178
            },
            {
                sourceX: 98,
                sourceY: 178
            },
            {
                sourceX: 133,
                sourceY: 178
            },
            {
                sourceX: 165,
                sourceY: 178
            },
            {
                sourceX: 200,
                sourceY: 178
            },
            {
                sourceX: 230,
                sourceY: 178
            }
        ];
        this.animateMoveLeft = [
            {
                sourceX: 11,
                sourceY: 17
            },
            {
                sourceX: 43,
                sourceY: 17
            },
            {
                sourceX: 75,
                sourceY: 17
            },
            {
                sourceX: 106,
                sourceY: 17
            },
            {
                sourceX: 139,
                sourceY: 17
            },
            {
                sourceX: 171,
                sourceY: 17
            }
        ];
        this.animateAttackLeft = [
            {
                sourceX: 66,
                sourceY: 83
            },
            {
                sourceX: 35,
                sourceY: 83
            },
            {
                sourceX: 5,
                sourceY: 84
            }
        ];
        this.animateAttackRight = [
            {
                sourceX: 170,
                sourceY: 246
            },
            {
                sourceX: 202,
                sourceY: 246
            },
            {
                sourceX: 233,
                sourceY: 246
            }
        ];
        this.animateDead = [
            {
                sourceX: 171,
                sourceY: 314
            }
        ];

        this.animate = this.animateMoveLeft;
        this.width = 24;
        this.height = 17;
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
        ctx.drawImage(fireEImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }
}