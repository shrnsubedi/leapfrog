class FiretEnemy {
	constructor() {
		this.frame = 0;
		this.id = setInterval(this.animateEnemy.bind(this), 75);
		this.animate = [];
		this.state = {
			dead: 0,
			alive: 1,
			current: 1
		}
		this.animateMoveRight = [
			{
				sourceX: 9,
				sourceY: 206
			},
			{
				sourceX: 40,
				sourceY: 206
			},
			{
				sourceX: 71,
				sourceY: 206
			},
			{
				sourceX: 105,
				sourceY: 206
			},
			{
				sourceX: 135,
				sourceY: 206
			},
			{
				sourceX: 169,
				sourceY: 206
			}
		];
		this.animateMoveLeft = [
			{
				sourceX: 136,
				sourceY: 19
			},
			{
				sourceX: 167,
				sourceY: 19
			},
			{
				sourceX: 198,
				sourceY: 19
			},
			{
				sourceX: 231,
				sourceY: 19
			},
			{
				sourceX: 264,
				sourceY: 19
			},
			{
				sourceX: 297,
				sourceY: 19
			}
		];
		this.animateDead = [
			{
				sourceX: 220,
				sourceY: 338
			}
		];
		this.animateAttack = [
			{
				sourceX: 74,
				sourceY: 361
			}
		];
		this.animateDisappear = [
			{
				sourceX: 180,
				sourceY: 242
			},
			{
				sourceX: 132,
				sourceY: 242
			},
			{
				sourceX: 83,
				sourceY: 242
			},
			{
				sourceX: 39,
				sourceY: 242
			},
			{
				sourceX: 8,
				sourceY: 242
			}
		];

		this.animate = this.animateMoveLeft;
		this.width = 20;
		this.height = 24;
		this.posGen = Math.floor(Math.random() * Math.floor(3));
		this.posGenValues = [318, 640, 960];
		this.xDest = this.posGenValues[this.posGen];
		this.yDest = 122;
		this.widthDest = 30;
		this.heightDest = 30;
		this.moveDist = 10;
		this.heroX;
		this.heroY;

		this.health = 20;
	}

	getHeroPosition = (heroX, heroY) => {
		this.heroX = heroX;
		this.heroY = heroY;
	}

	animateEnemy = () => {
		this.frame++;
	}

	moveEnemy = () => {
		if (this.heroX >= this.xDest) {
			this.xDest++;
			this.animate = this.animateMoveRight;
			if (this.heroY > this.yDest) {
				this.yDest++;
			}
			else if (this.heroY < this.yDest) {
				this.yDest--;
			}
		}
		else if (this.heroX <= this.xDest) {
			this.xDest--;
			this.animate = this.animateMoveLeft;
			if (this.heroY > this.yDest) {
				this.yDest++;
			}
			else if (this.heroY < this.yDest) {
				this.yDest--
			}
		}
	}

	drawEnemy = () => {
		if (this.health == 0) {
			this.state.current = 0;
			this.animate = this.animateDead;
			if (this.frame >= this.animate.length) {
				this.frame = this.animate.length - 1;
				clearInterval(this.id);
			}
		}
		else if (this.health != 0) {
			if (this.frame >= this.animate.length) {
				this.frame = 0;
			}
		}
		ctx.drawImage(fireTImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
	}
}