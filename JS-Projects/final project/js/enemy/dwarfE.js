class DwarfEnemy {
    constructor() {
        this.frame = 0;
        this.id3 = setInterval(this.animateEnemy.bind(this), 75);
        this.animate = [];
        this.state = {
            dead: 0,
            alive: 1,
            current: 1
        }
        this.animateMoveRight = [
            {
                sourceX: 5,
                sourceY: 42
            },
            {
                sourceX: 35,
                sourceY: 42
            },
            {
                sourceX: 70,
                sourceY: 42
            },
            {
                sourceX: 103,
                sourceY: 42
            },
            {
                sourceX: 133,
                sourceY: 42
            },
            {
                sourceX: 165,
                sourceY: 42
            },
            {
                sourceX: 195,
                sourceY: 42
            },
            {
                sourceX: 230,
                sourceY: 42
            }
        ];
        this.animateMoveLeft = [
            {
                sourceX: 4,
                sourceY: 198
            },
            {
                sourceX: 32,
                sourceY: 198
            },
            {
                sourceX: 62,
                sourceY: 198
            },
            {
                sourceX: 96,
                sourceY: 198
            },
            {
                sourceX: 128,
                sourceY: 198
            },
            {
                sourceX: 163,
                sourceY: 198
            },
            {
                sourceX: 224,
                sourceY: 198
            }
        ];

        this.animateAttackLeft = [
            {
                sourceX: 3,
                sourceY: 232
            },
            {
                sourceX: 37,
                sourceY: 226
            },
            {
                sourceX: 69,
                sourceY: 226
            },
            {
                sourceX: 95,
                sourceY: 226
            },
            {
                sourceX: 131,
                sourceY: 226
            },
            {
                sourceX: 165,
                sourceY: 226
            }
        ];
        this.animateAttackRight = [
            {
                sourceX: 5,
                sourceY: 74
            },
            {
                sourceX: 38,
                sourceY: 68
            },
            {
                sourceX: 69,
                sourceY: 69
            },
            {
                sourceX: 100,
                sourceY: 69
            },
            {
                sourceX: 134,
                sourceY: 73
            },
            {
                sourceX: 164,
                sourceY: 74
            },
            {
                sourceX: 196,
                sourceY: 75
            }
        ];

        this.animateDead = [
            {
                sourceX: 161,
                sourceY: 302
            }
        ];

        this.animate = this.animateMoveRight;
        this.width = 28;
        this.height = 23;
        this.posGen = 318;
        this.xDest = this.posGen;
        this.yDest = 122;
        this.widthDest = 50;
        this.heightDest = 50;
        this.moveDist = 20;
        this.heroX;
        this.heroY;

        this.health = 60;
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
            if (this.heroY > this.yDest) {
                this.yDest++;
            }
            else if (this.heroY < this.yDest) {
                this.yDest--;
            }
            this.animate = this.animateMoveRight;
            this.animateAttack = this.animateAttackRight;
        }
        else if (this.heroX <= this.xDest) {
            this.xDest--;
            if (this.heroY > this.yDest) {
                this.yDest++;
            }
            else if (this.heroY < this.yDest) {
                this.yDest--
            }
            this.animate = this.animateMoveLeft;
            this.animateAttack = this.animateAttackLeft;
        }
    }

    drawEnemy = () => {
        if (this.health == 0) {
            this.state.current = 0;
            this.animate = this.animateDead;
            this.frame = this.animate.length - 1;
            clearInterval(this.id3);

        }
        else if (this.health != 0) {
            if (this.frame >= this.animate.length) {
                this.frame = 0;
            }
        }
        ctx.drawImage(dwarfImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }
}