class Cyclops {
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
				sourceX: 16,
				sourceY: 88
			},
			{
				sourceX: 80,
				sourceY: 88
			},
			{
				sourceX: 143,
				sourceY: 88
			},
			{
				sourceX: 208,
				sourceY: 88
			},
			{
				sourceX: 272,
				sourceY: 88
			},
			{
				sourceX: 335,
				sourceY: 88
			},
			{
				sourceX: 400,
				sourceY: 88
			},
			{
				sourceX: 464,
				sourceY: 88
			},
			{
				sourceX: 529,
				sourceY: 88
			},
			{
				sourceX: 591,
				sourceY: 88
			},
			{
				sourceX: 650,
				sourceY: 88
			},
			{
				sourceX: 718,
				sourceY: 88
			}
		];
		this.animateMoveLeft = [
			{
				sourceX: 16,
				sourceY: 731
			},
			{
				sourceX: 80,
				sourceY: 731
			},
			{
				sourceX: 143,
				sourceY: 731
			},
			{
				sourceX: 208,
				sourceY: 731
			},
			{
				sourceX: 272,
				sourceY: 731
			},
			{
				sourceX: 335,
				sourceY: 731
			},
			{
				sourceX: 400,
				sourceY: 731
			},
			{
				sourceX: 464,
				sourceY: 731
			},
			{
				sourceX: 529,
				sourceY: 731
			},
			{
				sourceX: 591,
				sourceY: 731
			},
			{
				sourceX: 650,
				sourceY: 731
			},
			{
				sourceX: 718,
				sourceY: 731
			}
		];

		this.animateAttack = [
			{
				sourceX: 16,
				sourceY: 855
			},
			{
				sourceX: 81,
				sourceY: 855
			},
			{
				sourceX: 147,
				sourceY: 855
			},
			{
				sourceX: 208,
				sourceY: 855
			},
			{
				sourceX: 270,
				sourceY: 855
			},
			{
				sourceX: 332,
				sourceY: 855
			},
			{
				sourceX: 395,
				sourceY: 855
			},
			{
				sourceX: 458,
				sourceY: 855
			},
			{
				sourceX: 588,
				sourceY: 855
			},
			{
				sourceX: 650,
				sourceY: 855
			},
			{
				sourceX: 722,
				sourceY: 855
			},
			{
				sourceX: 787,
				sourceY: 855
			}
		];

		this.animateDead = [
			{
				sourceX: 459,
				sourceY: 1068
			}
		];

		this.animate = this.animateMoveRight;
		this.width = 44;
		this.height = 46;
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
			else if (this.heroY < this.yDest + this.height) {
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
			this.animate = this.animateDead;
			clearInterval(this.id3);
			this.frame = this.animate.length - 1;
			this.state.current = 0;
		}
		else if (this.health != 0) {
			if (this.frame >= this.animate.length) {
				this.frame = 0;
			}
		}
		ctx.drawImage(cyclopsImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
	}
}