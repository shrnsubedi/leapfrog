class Game {
    constructor() {
        this.hero = new Hero();
        this.bg = new Background();
        this.go = new GameOver();
        this.bat;
        this.batArray = [];
        setInterval(this.createEnemy.bind(this), 2000);
        this.loopFunction();
    }
    createEnemy = () => {
        this.bat = new BatEnemy();
        this.batArray.push(this.bat);
    }

    draw = () => {
        if (gameStates.currentState == gameStates.playing) {
            this.bg.drawBackground();
            this.hero.drawHero();
            for (let i = 0; i < this.batArray.length; i++) {
                this.batArray[i].drawEnemy();
            }
            ctx.fillText("Health:" + this.hero.heroHealth, 250, 650);
        }
        if (gameStates.currentState == gameStates.gameEnd) {
            this.go.drawGameOver();
        }
    }
    collisionCheck = () => {
        // Check collision with walls and hero attack and other enemies
    }

    broadcastHeroPos = () => {
        for (let i = 0; i < this.batArray.length; i++) {
            this.batArray[i].getHeroPosition(this.hero.xDest, this.hero.yDest);
        }
    }

    updateEnemy = () => {
        for (let i = 0; i < this.batArray.length; i++) {
            if (this.batArray[i].state.current == this.batArray[i].state.dead) {

            }
            else {
                this.batArray[i].moveEnemy();
            }
        }
    }

    inflictDamage = () => {
        for (let i = 0; i < this.batArray.length; i++) {
            if (this.batArray[i].state.current == 0) {

            }
            else {
                if (this.batArray[i].xDest == this.hero.xDest && this.batArray[i].yDest == this.hero.yDest) {
                    if (this.hero.heroHealth == 0) {
                        gameStates.currentState = 2
                    }
                    else {
                        this.hero.heroHealth--;
                        if (this.hero.keyPressed['a']) {
                            this.batArray[i].health = this.batArray[i].health - this.hero.swordDamage;
                        }
                    }
                }
            }
        }
    }

    loopFunction = () => {
        this.draw();
        this.updateEnemy();
        this.broadcastHeroPos();
        this.inflictDamage();
        requestAnimationFrame(this.loopFunction);
    }
}

var gameInstance = new Game;




