class BatEnemy {
    constructor() {
        this.frame = 0;
        this.id = setInterval(this.animateEnemy.bind(this), 75);
        this.animate = [];
        this.state = {
            dead: 0,
            alive: 1,
            current: 1
        }
        this.animateFly = [
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
        ];
        this.animateDead = [
            {
                sourceX: 0,
                sourceY: 52
            },
            {
                sourceX: 18,
                sourceY: 52
            },
            {
                sourceX: 34,
                sourceY: 56
            },
            {
                sourceX: 50,
                sourceY: 60
            },
            {
                sourceX: 64,
                sourceY: 66
            }
        ]
        this.animate = this.animateFly;
        this.width = 15;
        this.height = 15;
        this.xDest = 318;
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
        if (this.health == 0) {
            this.state.current = 0;
            this.animate = this.animateDead;
            if (this.frame == this.animate.length) {
                this.frame = 4;
                clearInterval(this.id);
            }
        }
        else if (this.health != 0) {
            if (this.frame == this.animate.length) {
                this.frame = 0;
            }
        }
        ctx.drawImage(batImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
    }

}