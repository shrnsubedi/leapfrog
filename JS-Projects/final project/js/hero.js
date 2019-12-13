class Hero {
	keyPressed = {};
	constructor(frame) {
		this.frame = frame || 0;
		this.animateRight = [
			{
				sourceX: 527,
				sourceY: 95
			},
			{
				sourceX: 600,
				sourceY: 95
			},
			{
				sourceX: 16,
				sourceY: 176
			},

			{
				sourceX: 182,
				sourceY: 176
			},
			{
				sourceX: 263,
				sourceY: 176
			}
		];

		this.animateLeft = [
			{
				sourceX: 358,
				sourceY: 176
			},

			{
				sourceX: 430,
				sourceY: 176
			},
			{
				sourceX: 510,
				sourceY: 176
			},
			{
				sourceX: 15,
				sourceY: 257
			},
			{
				sourceX: 95,
				sourceY: 257
			}
		];
		this.animateUp = [
			{
				sourceX: 103,
				sourceY: 96
			},

			{
				sourceX: 183,
				sourceY: 96
			},
			{
				sourceX: 271,
				sourceY: 96
			},
			{
				sourceX: 359,
				sourceY: 96
			},
			{
				sourceX: 440,
				sourceY: 96
			}
		];
		this.animateDown = [
			{
				sourceX: 271,
				sourceY: 0
			},
			{
				sourceX: 439,
				sourceY: 8
			},
			{
				sourceX: 359,
				sourceY: 8
			},
			{
				sourceX: 529,
				sourceY: 8
			},
			{
				sourceX: 609,
				sourceY: 8
			}
		];
		this.attackDown = [
			{
				sourceX: 191,
				sourceY: 255
			},

			{
				sourceX: 270,
				sourceY: 255
			},
			{
				sourceX: 336,
				sourceY: 255
			}
		];
		this.attackUp = [
			{
				sourceX: 440,
				sourceY: 255
			},

			{
				sourceX: 518,
				sourceY: 255
			},
			{
				sourceX: 582,
				sourceY: 255
			}
		];
		this.attackRight = [
			{
				sourceX: 14,
				sourceY: 344
			},

			{
				sourceX: 100,
				sourceY: 344
			},
			{
				sourceX: 167,
				sourceY: 344
			}
		];
		this.attackLeft = [
			{
				sourceX: 280,
				sourceY: 344
			},

			{
				sourceX: 335,
				sourceY: 344
			},
			{
				sourceX: 447,
				sourceY: 344
			}
		];
		this.animate = this.animateLeft;
		this.width = 55;
		this.height = 80;
		this.xDest = 670;
		this.yDest = 420;
		this.widthDest = 55;
		this.heightDest = 80;
		this.heroMoveDist = 20;

		this.heroHealth = 100;
		this.swordDamage = 5;

		document.addEventListener("keydown", this.myEventHandler.bind(this), false);
		document.addEventListener('keyup', (event) => {
			this.frame = 0;
			delete this.keyPressed[event.key];
		});

	}

	myEventHandler = (e) => {
		const keyCode = e.key;
		this.keyPressed[keyCode] = true;
		//Diagnol movement of hero
		if (this.keyPressed['ArrowUp'] && this.keyPressed['ArrowRight']) {
			e.preventDefault();
			if (this.yDest == 100 || this.xDest == 1010) {

			}
			else {
				this.moveHero(this.heroMoveDist, -this.heroMoveDist);
			}
		}

		else if (this.keyPressed['ArrowUp'] && this.keyPressed['ArrowLeft']) {
			e.preventDefault();
			if (this.yDest == 100 || this.xDest == 230) {

			}
			else {
				this.moveHero(-this.heroMoveDist, -this.heroMoveDist);
			}
		}

		else if (this.keyPressed['ArrowDown'] && this.keyPressed['ArrowRight']) {
			e.preventDefault();
			if (this.yDest == 580 || this.xDest == 1010) {

			}
			else {
				this.moveHero(this.heroMoveDist, this.heroMoveDist);
			}
		}

		else if (this.keyPressed['ArrowDown'] && this.keyPressed['ArrowLeft']) {
			e.preventDefault();
			if (this.yDest == 580 || this.xDest == 230) {

			}
			else {
				this.moveHero(-this.heroMoveDist, this.heroMoveDist);
			}
		}

		//Straight arrow Key functions with collision detection
		if (this.keyPressed['ArrowDown']) {
			e.preventDefault();
			if (this.yDest == 580) {

			}
			else {
				this.frame++;
				this.animate = this.animateDown;
				this.moveHero(0, this.heroMoveDist);
			}
		}
		else if (this.keyPressed['ArrowUp']) {
			e.preventDefault();
			if (this.yDest == 100) {

			}
			else {
				this.frame++;
				this.animate = this.animateUp;
				this.moveHero(0, -this.heroMoveDist);
			}
		}
		else if (this.keyPressed['ArrowRight']) {
			e.preventDefault();
			if (this.xDest == 1010) {

			}
			else {
				this.frame++;
				this.animate = this.animateRight;
				this.moveHero(this.heroMoveDist, 0);
			}
		}
		else if (this.keyPressed['ArrowLeft']) {
			e.preventDefault();
			if (this.xDest == 230) {

			}
			else {
				this.frame++;
				this.animate = this.animateLeft;
				this.moveHero(-this.heroMoveDist, 0);
			}
		}
		if (this.keyPressed['a']) {
			e.preventDefault();
			if (this.animate == this.animateDown) {
				this.animate = this.attackDown;
			}
			else if (this.animate == this.animateUp) {
				this.animate = this.attackUp;
			}
			else if (this.animate == this.animateLeft) {
				this.animate = this.attackLeft;
			}
			else if (this.animate == this.animateRight) {
				this.animate = this.attackRight;
			}
			this.frame++;
		}
	}

	moveHero = (x, y) => {
		this.xDest += x;
		this.yDest += y;
	}
	updateHero = () => {

	}

	drawHero = () => {
		if (this.frame == this.animate.length) {
			this.frame = 0;
		}
		ctx.drawImage(heroImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
	}

}