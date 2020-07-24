class WormEnemy {
	constructor() {
		this.frame = 0;
		this.id = setInterval(this.animateEnemy.bind(this), 200);
		this.animate = [];
		this.state = {
			dead: 0,
			alive: 1,
			current: 1
		}
		this.animateHole = [
			{
				sourceX: 39,
				sourceY: 238
			},
			{
				sourceX: 6,
				sourceY: 148
			}
		];
		this.animateWormAttack = [
			{
				sourceX: 41,
				sourceY: 49
			},
			{
				sourceX: 10,
				sourceY: 47
			},
			{
				sourceX: 73,
				sourceY: 14
			},
			{
				sourceX: 41,
				sourceY: 105
			},
			{
				sourceX: 477,
				sourceY: 109
			},
			{
				sourceX: 9,
				sourceY: 74
			}
		];
		this.animateDead = [
			{
				sourceX: 172,
				sourceY: 112
			}
		];
		this.animate = this.animateWormAttack;
		this.width = 24;
		this.height = 17;
		this.xDest = Math.floor((Math.random() * 700) + 210);
		this.yDest = Math.floor((Math.random() * 500) + 100);
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
		ctx.drawImage(wormImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest + 2, this.yDest - 10, this.widthDest, this.heightDest);
		ctx.drawImage(wormImage, this.animateHole[1].sourceX, this.animateHole[1].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
	}
}