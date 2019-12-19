class Gladiator {
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
				sourceX: 4,
				sourceY: 38
			},
			{
				sourceX: 36,
				sourceY: 38
			},
			{
				sourceX: 68,
				sourceY: 38
			},
			{
				sourceX: 100,
				sourceY: 38
			},
			{
				sourceX: 132,
				sourceY: 38
			},
			{
				sourceX: 163,
				sourceY: 38
			},
			{
				sourceX: 195,
				sourceY: 38
			},
			{
				sourceX: 227,
				sourceY: 38
			}
		];
		this.animateMoveLeft = [
			{
				sourceX: 4,
				sourceY: 200
			},
			{
				sourceX: 36,
				sourceY: 200
			},
			{
				sourceX: 68,
				sourceY: 200
			},
			{
				sourceX: 100,
				sourceY: 200
			},
			{
				sourceX: 132,
				sourceY: 200
			},
			{
				sourceX: 163,
				sourceY: 200
			},
			{
				sourceX: 195,
				sourceY: 200
			},
			{
				sourceX: 227,
				sourceY: 200
			}
		];

		this.animateAttackLeft = [
			{
				sourceX: 5,
				sourceY: 234
			},
			{
				sourceX: 31,
				sourceY: 234
			},
			{
				sourceX: 96,
				sourceY: 234
			},
			{
				sourceX: 197,
				sourceY: 234
			}
		];
		this.animateAttackRight = [
			{
				sourceX: 5,
				sourceY: 73
			},
			{
				sourceX: 31,
				sourceY: 73
			},
			{
				sourceX: 96,
				sourceY: 73
			},
			{
				sourceX: 197,
				sourceY: 73
			}
		];

		this.animateDead = [
			{
				sourceX: 514,
				sourceY: 899
			}
		];

		this.animate = this.animateMoveRight;
		this.width = 78;
		this.height = 70;
		this.posGen = 318;
		this.xDest = this.posGen;
		this.yDest = 122;
		this.widthDest = 80;
		this.heightDest = 80;
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
			this.animateAttack = this.animateAttackRight;
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
			this.animateAttack = this.animateAttackLeft;
		}
	}

	drawEnemy = () => {
		if (this.health == 0) {
			this.state.current = 0;
			clearInterval(this.id3);
			this.animate = this.animateDead;
			this.frame = this.animate.length - 1;

		}
		else if (this.health != 0) {
			if (this.frame >= this.animate.length) {
				this.frame = 0;
			}
		}
		ctx.drawImage(gladiatorImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
	}
}