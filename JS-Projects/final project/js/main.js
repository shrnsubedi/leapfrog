class Game {
    constructor() {
        this.hero = new Hero();
        this.bg = new Bg();
        this.bat = new BatEnemy();
        this.go = new GameOver();
        this.loopFunction();
    }

    createEmeny = () => {
        //create enemy here in a loop

    }
    drawFunction = () => {
        if (gameStates.currentState == gameStates.playing) {
            this.bg.drawBackground();
            this.hero.drawHero();
            this.bat.drawEnemy();
        }
        if (gameStates.currentState == gameStates.gameEnd) {
            this.go.drawGameOver();
        }


    }
    collisionCheck = () => {
        // Check collision with walls and hero attack and other enemies
    }

    broadcastHeroPos = () => {
        this.bat.getHeroPosition(this.hero.xDest, this.hero.yDest);
    }

    updateFunction = () => {
        if (this.bat.state.current == 0) {

        }
        else {
            this.bat.moveEnemy();
        }
    }

    inflictDame = () => {
        if (this.bat.state.current == 0) {

        }
        else {
            if (this.bat.xDest == this.hero.xDest && this.bat.yDest == this.hero.yDest) {
                if (this.hero.heroHealth == 0) {
                    gameStates.currentState = 2
                }
                else {
                    this.hero.heroHealth--;
                    if (this.hero.keyPressed['a']) {
                        this.bat.health = this.bat.health - this.hero.swordDamage;
                    }
                }
            }
        }
    }

    loopFunction = () => {
        this.broadcastHeroPos();
        this.drawFunction();
        this.updateFunction();
        this.inflictDame();
        requestAnimationFrame(this.loopFunction);
    }
}

var gameInstance = new Game;




