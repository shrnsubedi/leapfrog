class Game {
	constructor() {
		//object creation for non looping elements
		this.hero = new Hero();
		this.bg = new Background();
		this.go = new GameOver();
		this.wave = new Wave();
		this.powerup = new Powerup();

		this.waveCount = 0;

		this.batArray = [];

		this.bat;
		this.noOfbat = 0;

		this.cobra;
		this.noOfCobra = 0;

		this.spider;
		this.noOfSpider = 0;

		this.frog;
		this.noOfFrog = 0;

		this.sorcerer;
		this.cyclops;

		this.arrowArray = [];
		this.arrowCount = 5;
		this.arrowReloadFlag = true;



		//flags
		this.bossSpawnFlag = false;
		this.bossFlag = false;
		this.waveDisplayFlag = true;
		this.arrowShootFlag = false;

		this.count = 0;

		this.id2 = setInterval(this.createEnemy.bind(this), 2000);
		this.loopFunction();
		let that = this;
	}

	createEnemy = () => {
		if (this.noOfbat == this.wave.waveInfo[this.waveCount].batCount) {

		}
		else {
			this.bat = new BatEnemy();
			this.noOfbat++;
			this.batArray.push(this.bat);
		}

		if (this.noOfCobra == this.wave.waveInfo[this.waveCount].cobraCount) {

		}
		else {
			this.cobra = new CobraEnemy();
			this.noOfCobra++;
			this.batArray.push(this.cobra);
		}

		if (this.noOfSpider == this.wave.waveInfo[this.waveCount].spiderCount) {

		}
		else {
			this.spider = new SpiderEnemy();
			this.noOfSpider++;
			this.batArray.push(this.spider);
		}

		if (this.noOfFrog == this.wave.waveInfo[this.waveCount].frogCount) {

		}
		else {
			this.frog = new FrogEnemy();
			this.noOfFrog++;
			this.batArray.push(this.frog);
		}

		if (this.batArray.length == this.wave.waveInfo[this.waveCount].enemyCount) { //condition for boss battles
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
			//this.sorcerer = new Sorcerer();
			this.sorcerer = new Cyclops();
			this.bossFlag = false;
		}
	}

	waveDisplay = () => {
		ctx.font = "bold 60px sans-serif ";
		ctx.fillStyle = "white";
		ctx.fillText("Wave:" + this.wave.waveNo, 550, 390);
		setTimeout(() => {
			this.waveDisplayFlag = false
		}, 1500);
	}

	draw = () => {
		if (gameStates.currentState == gameStates.playing) {
			this.bg.drawBackground();
			this.hero.drawHero();

			this.powerup.drawPower();

			if (this.waveDisplayFlag) {
				this.waveDisplay();
			}
			for (let j = 0; j < this.arrowArray.length; j++) {
				this.arrowArray[j].drawArrow();
			}

			for (let i = 0; i < this.batArray.length; i++) {
				this.batArray[i].drawEnemy();
			}

			ctx.font = "bold 20px sans-serif ";
			ctx.fillStyle = "white";
			ctx.fillText(this.hero.heroHealth, 285, 650);
			ctx.drawImage(healthIconImg, 0, 0, 260, 260, 250, 630, 30, 30);

			ctx.fillText(this.arrowCount, 1010, 650);
			ctx.drawImage(arrowIconImg, 0, 0, 16, 16, 971, 630, 30, 30);

			if (this.bossSpawnFlag) {
				this.sorcerer.drawEnemy();
			}
		}

		if (gameStates.currentState == gameStates.gameEnd) {
			this.go.drawGameOver();
		}
	}

	collisionCheck = () => {
		for (let i = 0; i < this.batArray.length; i++) {
			for (let j = 0; j < this.arrowArray.length; j++) {
				if (this.batArray[i].xDest == this.arrowArray[j].xDest && this.batArray[i].yDest == this.arrowArray[j].yDest) {
					if (this.batArray[i].health == 0) {

					}
					else {
						this.batArray[i].health = this.batArray[i].health - 20;
						this.arrowArray.splice(i, 1);
					}
				}
			}
		}

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
	resetFunction = () => {
		this.noOfCobra = 0;
		this.noOfbat = 0;
		this.noOfSpider = 0;
		this.noOfFrog = 0;
		for (let i = 0; i < this.batArray.length; i++) {
			this.batArray.splice(0, i + 1);
		}

	}

	updateEnemy = () => {
		for (let i = 0; i < this.batArray.length; i++) {
			if (this.batArray[i].state.current == this.batArray[i].state.dead) {

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

	shootArrow = () => {
		if (this.arrowReloadFlag == false) {

		}
		else {
			if (this.hero.keyPressed['s']) {
				if (this.arrowCount <= 0) {

				}
				else {
					this.arrow = new Arrow();
					this.arrowArray.push(this.arrow);
					this.arrowCount--;
					this.arrowReloadFlag = false;
					this.updateArrow();
				}
			}
		}
	}

	updateArrow = () => {
		for (let i = 0; i < this.arrowArray.length; i++) {
			this.arrowArray[i].getHeroPosition(this.hero.xDest, this.hero.yDest);
			this.arrowArray[i].getArrowDirection(this.hero.keyPressed);
			setTimeout(() => {
				this.arrowReloadFlag = true;
			}, 1000);
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
			if (this.sorcerer.health == 0) {
				setTimeout(() => {
					this.waveDisplayFlag = true;
					this.waveCount = this.waveCount + 1;
					this.wave.waveNo++;
					this.bossSpawnFlag = false;
					this.resetFunction();
					this.id2 = setInterval(this.createEnemy.bind(this), 2000);
				}, 2000);

			}
			if (this.sorcerer.xDest == this.hero.xDest && this.sorcerer.yDest == this.hero.yDest) {
				if (this.hero.heroHealth == 0) {
					gameStates.currentState = 2
				}
				else {
					//this.hero.heroHealth--;
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
		this.shootArrow();
		this.collisionCheck();

		requestAnimationFrame(this.loopFunction);
	}
}






