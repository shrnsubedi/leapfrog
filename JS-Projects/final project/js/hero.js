class Hero {
	keyPressed = {};
	constructor() {
		this.sourceX = 6
		this.sourceY = 11
		this.width = 20
		this.height = 20
		this.xDest = 670
		this.yDest = 420
		this.widthDest = 30
		this.heightDest = 30
		this.heroMoveDist = 10

		document.addEventListener("keydown", this.myEventHandler.bind(this), false);
		document.addEventListener('keyup', (event) => {
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
			this.moveHero(0, this.heroMoveDist);
		}
		if (this.keyPressed['ArrowUp']) {
			e.preventDefault();
			this.moveHero(0, -this.heroMoveDist);
		}
		else if (this.keyPressed['ArrowRight']) {
			e.preventDefault();
			this.moveHero(this.heroMoveDist, 0);
		}
		else if (this.keyPressed['ArrowLeft']) {
			e.preventDefault();
			this.moveHero(-this.heroMoveDist, 0);
		}
	}

	moveHero = (x, y) => {
		this.xDest += x;
		this.yDest += y;

	}

	drawHero = () => {
		ctx.drawImage(heroImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
	}

}