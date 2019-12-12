class Game {
    constructor() {
        this.hero = new Hero();
        this.bg = new bg();
        this.bat = new batEnemy();
        this.loopFunction();
    }

    createEmeny = () => {

    }
    drawFunction = () => {
        this.bg.drawBackground();
        this.hero.drawHero();
        this.bat.drawEnemy();
    }
    collisionCheck = () => {
        // Check collision with walls and hero attack and other enemies
    }

    updateFunction = () => {

    }

    loopFunction = () => {
        this.drawFunction();
        requestAnimationFrame(this.loopFunction);
    }
}

var gameInstance = new Game;




