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
cyclopsImage.src = "img/cyclopsAll.png";

const minotaurImage = new Image();
minotaurImage.src = 'img/minotaurAll.png';

const gladiatorImage = new Image();
gladiatorImage.src = 'img/gladiatorAll.png';

const dwarfImage = new Image();
dwarfImage.src = 'img/dwarfAll.png';

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
cvs.width = 1280 || window.innerWidth;
cvs.height = 720 || window.innerHeight;

const menuScreen = document.getElementById('loading-screen');
const playButton = document.createElement('button');
menuScreen.appendChild(playButton);
playButton.classList.add('play');
playButton.innerHTML = "Start";
playButton.onclick = function () {
	let gameInstance = new Game;
	cvs.style.display = 'block';
	menuScreen.style.display = 'none';
}

const instructionButton = document.createElement('button');
menuScreen.appendChild(instructionButton);
instructionButton.classList.add('help');
instructionButton.innerHTML = "Instructions";
instructionButton.onclick = function () {
	const helpScreen = document.createElement('div');
	menuScreen.appendChild(helpScreen);
	helpScreen.classList.add('help-screen');
	helpScreen.style.display = 'block';
	helpScreen.onclick = function () {
		helpScreen.style.display = 'none';
	}
}

ctx.font = "bold 20px sans-serif ";
ctx.fillStyle = "white";