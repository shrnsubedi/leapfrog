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
				sourceX: 359,
				sourceY: 8
			},
			{
				sourceX: 439,
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
		this.animate = this.animateLeft;
		this.width = 55;
		this.height = 80;
		this.xDest = 670;
		this.yDest = 420;
		this.widthDest = 55;
		this.heightDest = 80;
		this.heroMoveDist = 10;

		document.addEventListener("keydown", this.myEventHandler.bind(this), false);
		document.addEventListener('keyup', (event) => {
			this.frame = 0;
			delete this.keyPressed[event.key];
		});

	}

	myEventHandler = (e) => {
		const keyCode = e.key;
		this.keyPressed[keyCode] = true;

		//console.log(this.keyPressed);
		if (this.keyPressed['ArrowUp'] && this.keyPressed['ArrowRight']) {
			e.preventDefault();
			this.moveHero(this.heroMoveDist, -this.heroMoveDist);
		}
		else if (this.keyPressed['ArrowUp'] && this.keyPressed['ArrowLeft']) {
			e.preventDefault();
			this.moveHero(-this.heroMoveDist, -this.heroMoveDist);
		}
		else if (this.keyPressed['ArrowDown'] && this.keyPressed['ArrowRight']) {
			e.preventDefault();
			this.moveHero(this.heroMoveDist, this.heroMoveDist);
		}
		else if (this.keyPressed['ArrowDown'] && this.keyPressed['ArrowLeft']) {
			e.preventDefault();
			this.moveHero(-this.heroMoveDist, this.heroMoveDist);
		}
		if (this.keyPressed['ArrowDown']) {
			e.preventDefault();
			this.frame++;
			this.animate = this.animateDown;
			this.moveHero(0, this.heroMoveDist);
		}
		else if (this.keyPressed['ArrowUp']) {
			this.frame++;
			this.animate = this.animateUp;
			e.preventDefault();
			this.moveHero(0, -this.heroMoveDist);
		}
		else if (this.keyPressed['ArrowRight']) {
			e.preventDefault();
			this.frame++;
			this.animate = this.animateRight;
			this.moveHero(this.heroMoveDist, 0);

		}
		else if (this.keyPressed['ArrowLeft']) {
			e.preventDefault();
			this.frame++;
			this.animate = this.animateLeft;
			this.moveHero(-this.heroMoveDist, 0);
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