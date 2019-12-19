class Sorcerer {
	constructor() {
		this.frame = 0;
		this.id3 = setInterval(this.animateEnemy.bind(this), 75);
		this.animate = [];
		this.state = {
			dead: 0,
			alive: 1,
			current: 1
		}
		this.animateMoveRight = [
			{
				sourceX: 24,
				sourceY: 120
			},
			{
				sourceX: 88,
				sourceY: 120
			},
			{
				sourceX: 152,
				sourceY: 120
			},
			{
				sourceX: 213,
				sourceY: 120
			},
			{
				sourceX: 279,
				sourceY: 120
			},
			{
				sourceX: 342,
				sourceY: 120
			}
		];
		this.animateMoveLeft = [
			{
				sourceX: 24,
				sourceY: 200
			},
			{
				sourceX: 88,
				sourceY: 200
			},
			{
				sourceX: 152,
				sourceY: 200
			},
			{
				sourceX: 213,
				sourceY: 200
			},
			{
				sourceX: 279,
				sourceY: 200
			},
			{
				sourceX: 342,
				sourceY: 200
			}
		];
		this.animateAttack = [
			{
				sourceX: 34,
				sourceY: 20
			},
			{
				sourceX: 107,
				sourceY: 20
			},
			{
				sourceX: 182,
				sourceY: 20
			},
			{
				sourceX: 311,
				sourceY: 20
			},
			{
				sourceX: 379,
				sourceY: 20
			},
			{
				sourceX: 455,
				sourceY: 20
			}
		];
		this.animate = this.animateMoveRight;
		this.width = 48;
		this.height = 60;
		this.posGen = 318;
		this.xDest = this.posGen;
		this.yDest = 122;
		this.widthDest = 80;
		this.heightDest = 60;
		this.moveDist = 20;
		this.heroX;
		this.heroY;

		this.health = 60;
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
			if (this.heroY > this.yDest) {
				this.yDest++;
			}
			else if (this.heroY < this.yDest) {
				this.yDest--;
			}
			this.animate = this.animateMoveRight;
		}
		else if (this.heroX <= this.xDest) {
			this.xDest--;
			if (this.heroY > this.yDest) {
				this.yDest++;
			}
			else if (this.heroY < this.yDest) {
				this.yDest--
			}
			this.animate = this.animateMoveLeft;
		}
	}

	drawEnemy = () => {
		if (this.health == 0) {
			this.state.current = 0;
			clearInterval(this.id3);
		}
		else if (this.health != 0) {
			if (this.frame >= this.animate.length) {
				this.frame = 0;
			}
		}
		ctx.drawImage(sorcerer, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
	}
}