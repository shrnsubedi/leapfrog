const backgroundImage = new Image();
backgroundImage.src = 'img/backgroundImage.png';

const heroImage = new Image();
heroImage.src = 'img/knightAll.png';

const batImage = new Image();
batImage.src = 'img/bat.png';

const gameOverImg = new Image();
gameOverImg.src = 'img/gameover.png';

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

ctx.font = "bold 20px sans-serif "
ctx.fillStyle = "white"