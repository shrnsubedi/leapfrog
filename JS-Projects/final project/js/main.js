class Game {
	constructor() {
		this.hero = new Hero();
		this.bg = new Background();
		this.go = new GameOver();
		this.wave = new Wave();
		this.bat;
		this.cobra;
		this.sorcerer;
		this.batArray = [];
		this.bossSpawnFlag = false;
		this.bossFlag = false;
		this.waveDisplayFlag = true;
		this.count = 0;
		this.id2 = setInterval(this.createEnemy.bind(this), 2000);
		this.waveDisplay();
		this.loopFunction();
		let that = this;
	}

	getWaveDetails = () => {

	}

	createEnemy = () => {
		this.bat = new BatEnemy();
		this.cobra = new CobraEnemy();
		this.spider = new SpiderEnemy();
		this.worm = new WormEnemy();

		this.batArray.push(this.worm);

		if (this.batArray.length == 4) { //condition for boss battles 
			this.bossFlag = true;
			this.bossSpawnFlag = true;
			this.createBoss();
			clearInterval(this.id2);
		}
	}

	createBoss = () => {
		if (this.bossFlag == false) {

		}
		else {
			this.sorcerer = new Sorcerer();
			this.bossFlag = false;
		}
	}

	waveDisplay = () => {
		if (this.waveDisplayFlag) {
			ctx.font = "bold 60px sans-serif ";
			ctx.fillStyle = "white";
			ctx.fillText("Wave:" + this.wave.waveNo, 550, 390);
		}
		setTimeout(() => {
			this.waveDisplayFlag = false
		}, 1500);


	}

	draw = () => {
		if (gameStates.currentState == gameStates.playing) {
			this.bg.drawBackground();
			this.hero.drawHero();
			this.waveDisplay();

			for (let i = 0; i < this.batArray.length; i++) {
				this.batArray[i].drawEnemy();
			}
			ctx.font = "bold 20px sans-serif ";
			ctx.fillStyle = "white";
			ctx.fillText("Health:" + this.hero.heroHealth, 250, 650);

			if (this.bossSpawnFlag) {
				this.sorcerer.drawEnemy();
			}
		}

		if (gameStates.currentState == gameStates.gameEnd) {
			this.go.drawGameOver();
		}
	}
	collisionCheck = () => {
		// Check collision with walls and hero attack and other enemies
	}

	broadcastHeroPos = () => {
		for (let i = 0; i < this.batArray.length; i++) {
			this.batArray[i].getHeroPosition(this.hero.xDest, this.hero.yDest);
		}
		if (this.bossSpawnFlag) {
			if (this.hero.animate == this.hero.animateLeft) {
				this.sorcerer.getHeroPosition(this.hero.xDest, this.hero.yDest, 'left');
			}
			else {
				this.sorcerer.getHeroPosition(this.hero.xDest, this.hero.yDest, 'right');
			}
		}

	}

	updateEnemy = () => {
		for (let i = 0; i < this.batArray.length; i++) {
			if (this.batArray[i].state.current == this.batArray[i].state.dead) {
				//this.batArray.splice(i, 1);

			}
			else {
				this.batArray[i].moveEnemy();
			}
		}
		if (this.bossSpawnFlag) {
			if (this.sorcerer.state.current == this.sorcerer.state.dead) {

			}
			else {
				this.sorcerer.moveEnemy();
			}
		}

	}

	inflictDamage = () => {
		for (let i = 0; i < this.batArray.length; i++) {
			if (this.batArray[i].state.current == 0) {

			}
			else {
				if (this.batArray[i].xDest == this.hero.xDest && this.batArray[i].yDest == this.hero.yDest) {
					if (this.hero.heroHealth == 0) {
						gameStates.currentState = 2
					}
					else {
						this.hero.heroHealth--;
						if (this.hero.keyPressed['a']) {
							this.batArray[i].health = this.batArray[i].health - this.hero.swordDamage;
						}
					}
				}
			}
		}
		if (this.bossSpawnFlag) {
			if (this.sorcerer.xDest == this.hero.xDest && this.sorcerer.yDest == this.hero.yDest) {
				if (this.hero.heroHealth == 0) {
					gameStates.currentState = 2
				}
				else {
					this.hero.heroHealth--;
					this.sorcerer.animate = this.sorcerer.animateAttack;
					if (this.hero.keyPressed['a']) {
						this.sorcerer.health = this.sorcerer.health - this.hero.swordDamage;
					}
				}
			}
		}
	}

	loopFunction = () => {
		this.draw();
		this.updateEnemy();
		this.broadcastHeroPos();
		this.inflictDamage();
		requestAnimationFrame(this.loopFunction);
	}
}

var gameInstance = new Game;




