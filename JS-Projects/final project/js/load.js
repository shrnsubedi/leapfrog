//UI images
const backgroundImage = new Image();
backgroundImage.src = 'img/backgroundImage.png';

const gameOverImg = new Image();
gameOverImg.src = 'img/gameover.png';

//Hero Image
const heroImage = new Image();
heroImage.src = 'img/knightAll.png';

//Mini enemies
const batImage = new Image();
batImage.src = 'img/bat.png'; //done

const cobraImage = new Image();
cobraImage.src = 'img/CobraAll.png'; //done

const spiderImage = new Image();
spiderImage.src = 'img/spiderSheet.png'; //done

const buffTImage = new Image();
buffTImage.src = 'img/bufftotemAll.png'; //done

const impImage = new Image();
impImage.src = 'img/impAll.png'; //done

const fireTImage = new Image();
fireTImage.src = 'img/fireTotemAll.png'; //done

const fireEImage = new Image();
fireEImage.src = 'img/fireElementalAll.png'; //done

const frogImage = new Image();
frogImage.src = 'img/frogAll.png'; //done

const wormImage = new Image();
wormImage.src = 'img/wormAll.png';

const witchImage = new Image();
witchImage.src = 'img/witchAll.png';

//Boss enemies
const sorcerer = new Image();
sorcerer.src = 'img/KnightEnemy.png'; //done


const gameStates = {
	currentState: 1,
	beforeStart: 0,
	playing: 1,
	gameEnd: 2
}

const cvs = document.getElementById('main-canvas');
const ctx = cvs.getContext('2d');

// var f = new FontFace('Press Start 2P', 'url(fonts/PressStart2P-Regular.ttf)');
// f.load().then(function () {
// 	ctx.font = "bold 30px Press Start 2P";
// });

ctx.font = "bold 20px sans-serif ";
ctx.fillStyle = "white";