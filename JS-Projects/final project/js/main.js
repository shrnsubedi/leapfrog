class Game {
    constructor() {
        this.hero = new Hero();
        this.loopFunction();
    }

    drawFunction = () => {
        bg.drawBackground();
        this.hero.drawHero();
    }
    updateFunction = () => {

    }

    loopFunction = () => {
        this.drawFunction();
        requestAnimationFrame(this.loopFunction);
    }
}

var gameInstance = new Game;




