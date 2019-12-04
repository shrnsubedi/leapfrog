const bird = {
    sourceX: 276,
    sourceY: 139,
    xDest: 50,
    yDest: 150,
    width: 34,
    height: 26,

    radius: 12,
    frame: 0,
    gravity: 0.25,
    jump: 4.6,
    speed: 0,

    drawBird: function () {
        ctx.drawImage(spriteImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest - this.width / 2, this.yDest - this.height / 2, this.width, this.height);
    },

    birdJump: function () {
        this.speed = -this.jump;
    },

    birdUpdate: function () {
        if (gameStates.currentState == gameStates.beforeStart) {
            this.yDest = 150;
        }
        else {
            this.speed += this.gravity;
            this.yDest += this.speed;

            if (this.yDest + this.height / 2 >= cvs.height - fg.height) {
                this.yDest = cvs.height - fg.height - this.height / 2;
                if (gameStates.currentState == gameStates.playing) {
                    gameStates.currentState = gameStates.gameOver;
                }
            }
        }

    },
    resetBird: function () {
        this.speed = 0;
    }
}