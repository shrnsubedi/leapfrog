//UI images
const backgroundImage = new Image();
backgroundImage.src = 'img/backgroundImage.png';

const gameOverImg = new Image();
gameOverImg.src = 'img/gameover.png';

const healthIconImg = new Image();
healthIconImg.src = 'img/healthicon.png';

const arrowIconImg = new Image();
arrowIconImg.src = 'img/arrowIcon.png';

//Hero Image
const heroImage = new Image();
heroImage.src = 'img/knightAll.png';

//Mini enemies
const batImage = new Image();
batImage.src = 'img/bat.png';

const cobraImage = new Image();
cobraImage.src = 'img/CobraAll.png';

const spiderImage = new Image();
spiderImage.src = 'img/spiderSheet.png';

const buffTImage = new Image();
buffTImage.src = 'img/bufftotemAll.png';

const impImage = new Image();
impImage.src = 'img/impAll.png';

const fireTImage = new Image();
fireTImage.src = 'img/fireTotemAll.png';

const fireEImage = new Image();
fireEImage.src = 'img/fireElementalAll.png';

const frogImage = new Image();
frogImage.src = 'img/frogAll.png';

const wormImage = new Image();
wormImage.src = 'img/wormAll.png';

const witchImage = new Image(); //Left to implement
witchImage.src = 'img/witchAll.png';

//Boss enemies
const sorcerer = new Image();
sorcerer.src = 'img/KnightEnemy.png';

const cyclopsImage = new Image();
cyclopsImage.src = "img/cyclopsAll.png"

//Weapon Hero
const arrowImage = new Image();
arrowImage.src = 'img/arrowWeapon.png';

//Powerup
const powerupImage = new Image();
powerupImage.src = 'img/itemPack.png';


const gameStates = {
	currentState: 1,
	beforeStart: 0,
	playing: 1,
	gameEnd: 2
}

const cvs = document.getElementById('main-canvas');
const ctx = cvs.getContext('2d');

const menuScreen = document.getElementById('loading-screen');
const playButton = document.createElement('button');
menuScreen.appendChild(playButton);
playButton.classList.add('play');
playButton.innerHTML = "Start";
playButton.onclick = function () {
	var gameInstance = new Game;
	cvs.style.display = 'block';
	menuScreen.style.display = 'none';
}
// var f = new FontFace('Press Start 2P', 'url(fonts/PressStart2P-Regular.ttf)');
// f.load().then(function () {
// 	ctx.font = "bold 30px Press Start 2P";
// });

ctx.font = "bold 20px sans-serif ";
ctx.fillStyle = "white";