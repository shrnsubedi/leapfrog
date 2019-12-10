class Game {
    constructor() {
        document.addEventListener("keydown", this.myEventHandler.bind(this), false);
        this.loopFunction();
    }

    myEventHandler = (e) => {
        console.log("You Entered Handler!");
        const keyCode = e.keyCode;
        console.log(e.keyCode);
        if (keyCode == 38) {
            e.preventDefault();
            console.log("You pressed Up!"); //fix this
            hero.yDest -= 10
            if (keyCode == 39) {
                hero.xDest += 10;
            }
        }
        else if (keyCode == 40) {
            e.preventDefault();
            console.log("You pressed down!"); //-------->creating methods might be better?
            hero.yDest += 10
        }
        else if (keyCode == 39) {
            e.preventDefault();
            console.log("You pressed right!");
            hero.xDest += 10
        }
        else if (keyCode == 37) {
            e.preventDefault();
            console.log("You pressed left!");
            hero.xDest -= 10
        }
        else if (keyCode == 32) {
            console.log("You pressed space!");
        }

    }

    drawFunction = () => {
        bg.drawBackground();
        hero.drawHero();
    }
    loopFunction = () => {
        this.drawFunction();
        requestAnimationFrame(this.loopFunction);
    }


}

var gameInstance = new Game;




