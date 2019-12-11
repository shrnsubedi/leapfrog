const backgroundImage = new Image();
backgroundImage.src = 'img/backgroundImage.png';

const heroImage = new Image();
heroImage.src = 'img/heroAll.png';

const cvs = document.getElementById('main-canvas');
const ctx = cvs.getContext('2d');

//console.log(e.keyCode);
		// if (keyCode == 38) {
		// 	e.preventDefault();
		// 	//console.log("You pressed Up!"); //fix this
		// 	this.yDest -= 10
		// }
		// else if (keyCode == 40) {
		// 	e.preventDefault();
		// 	//console.log("You pressed down!"); //-------->creating methods might be better?
		// 	this.yDest += this.heroMoveDist;
		// }
		// else if (keyCode == 39) {
		// 	e.preventDefault();
		// 	//console.log("You pressed right!");
		// 	this.xDest += this.heroMoveDist;
		// }
		// else if (keyCode == 37) {
		// 	e.preventDefault();
		// 	//console.log("You pressed left!");
		// 	this.xDest -= this.heroMoveDist;
		// }
		// else if (keyCode == 32) {
		// 	console.log("You pressed space!");
		// }