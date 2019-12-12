class Game {
    constructor() {
        this.hero = new Hero();
        this.bg = new bg();
        this.bat = new batEnemy();
        this.loopFunction();
    }

    createEmeny = () => {
        //create enemy here in a loop

    }
    drawFunction = () => {
        this.bg.drawBackground();
        this.hero.drawHero();
        this.bat.drawEnemy();
    }
    collisionCheck = () => {
        // Check collision with walls and hero attack and other enemies
    }
    broadcastHeroPos = () => {
        this.bat.getHeroPosition(this.hero.xDest, this.hero.yDest);
    }
    updateFunction = () => {
        this.bat.moveEnemy();
    }

    loopFunction = () => {
        this.broadcastHeroPos();
        this.drawFunction();
        this.updateFunction();
        requestAnimationFrame(this.loopFunction);
    }
}

var gameInstance = new Game;




