class Game {
	constructor() {
		//object creation for non looping elements
		this.hero = new Hero();
		this.bg = new Background();
		this.go = new GameOver();
		this.wave = new Wave();

		//Count wave number to generate equivalent wavecontroller properties
		this.waveCount = 0;

		//Counter to generate powerups at a certain interval
		this.powerUpCounter = 0;
		this.powerUpArray = [];
		this.powerUpInterval = 500;
		this.powerUpno = 2;

		//Bat array consists of all mini enemies that are generated not just bats
		this.batArray = [];

		//Declaring mini enemy variables and their counts
		this.bat;
		this.noOfbat = 0;
		this.cobra;
		this.noOfCobra = 0;
		this.spider;
		this.noOfSpider = 0;
		this.frog;
		this.noOfFrog = 0;
		this.fireT;
		this.noOfFireT = 0;
		this.fireE;
		this.noOfFireE = 0;
		this.buffT;
		this.noOfBuffT = 0;
		this.worm;
		this.noOfWorm = 0;
		this.witch;
		this.noOfWitch = 0;
		this.imp;
		this.noOfImp = 0;

		//Variable to store the generated boss objects
		this.sorcerer;

		//Arrow variables
		this.arrowArray = [];
		this.arrowCount = 5;
		this.maxArrows = 5;

		//flags
		this.bossSpawnFlag = false;
		this.bossFlag = false;
		this.waveDisplayFlag = true;
		this.arrowShootFlag = false;
		this.arrowReloadFlag = true;
		this.powerUpFlag = false;

		//potion Flags
		this.invinciblePotionFlag = false;

		//Interval to generate enemies every 2 seconds
		this.id2 = setInterval(this.createEnemy.bind(this), 2000);

		//Call loopfunction once to loop it in request animation frame
		this.loopFunction();
	}

	//Create enemy in an interval and the number varies according to wave controller
	createEnemy = () => {
		if (this.noOfbat == this.wave.waveInfo[this.waveCount].batCount) { //check if no of enemies matches that of controller's number

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

		if (this.noOfFireE == this.wave.waveInfo[this.waveCount].fireECount) {

		}
		else {
			this.fireE = new FireleEnemy();
			this.noOfFireE++;
			this.batArray.push(this.fireE);
		}

		if (this.noOfBuffT == this.wave.waveInfo[this.waveCount].buffTCount) {

		}
		else {
			this.buffT = new BuffTotemEnemy();
			this.noOfBuffT++;
			this.batArray.push(this.buffT);
		}

		if (this.noOfImp == this.wave.waveInfo[this.waveCount].impCount) {

		}
		else {
			this.imp = new ImpEnemy();
			this.noOfImp++;
			this.batArray.push(this.imp);
		}

		if (this.noOfWitch == this.wave.waveInfo[this.waveCount].witchCount) {

		}
		else {
			this.witch = new WitchEnemy();
			this.noOfWitch++;
			this.batArray.push(this.witch);
		}

		if (this.noOfWorm == this.wave.waveInfo[this.waveCount].wormCount) {

		}
		else {
			this.worm = new WormEnemy();
			this.noOfWorm++;
			this.batArray.push(this.worm);
		}

		if (this.noOfFireT == this.wave.waveInfo[this.waveCount].fireTCount) {

		}
		else {
			this.fireT = new FiretEnemy();
			this.noOfFireT++;
			this.batArray.push(this.fireT);
		}

		//generate the boss enemy if the no of enemy per wave is generated
		if (this.batArray.length == this.wave.waveInfo[this.waveCount].enemyCount) { //condition for boss battles
			this.bossFlag = true;
			this.bossSpawnFlag = true;
			this.createBoss();
			clearInterval(this.id2);
		}
	}

	//Create Boss enemy according to the wave number
	createBoss = () => {
		if (this.bossFlag == false) {

		}
		else {
			switch (this.waveCount) {
				case 0:
					this.sorcerer = new Minotaur();
					break;
				case 1:
					this.sorcerer = new Gladiator();
					break;
				case 2:
					this.sorcerer = new Cyclops();
					break;
				case 3:
					this.sorcerer = new Sorcerer();
					break;
				case 4:
					this.sorcerer = new DwarfEnemy();
					break;
				case 5:
					this.sorcerer = new Minotaur();
					break;
				case 6:
					this.sorcerer = new Gladiator();
					break;
				case 7:
					this.sorcerer = new Cyclops();
					break;
				case 8:
					this.sorcerer = new Sorcerer();
					break;
				case 9:
					this.sorcerer = new DwarfEnemy();
					break;
				case 10:
					gameStates.currentState = gameStates.GameOver;
			}
			this.bossFlag = false;
		}
	}

	//Display wave number when each wave ends
	waveDisplay = () => {
		ctx.font = "bold 60px sans-serif ";
		ctx.fillStyle = "white";
		ctx.fillText("Wave:" + this.wave.waveNo, 550, 390);
		setTimeout(() => {
			this.waveDisplayFlag = false
		}, 1500);
	}

	//All elements are drawn from this function
	draw = () => {
		if (gameStates.currentState == gameStates.playing) {
			this.bg.drawBackground();
			this.hero.drawHero();
			for (let k = 0; k < this.powerUpArray.length; k++) {
				if (this.waveDisplayFlag == false) {
					this.powerUpArray[k].drawPower();
				}
			}

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
			ctx.fillText(parseInt(this.hero.heroHealth), cvs.width - 1000, cvs.height - 60);
			ctx.drawImage(healthIconImg, 0, 0, 260, 260, cvs.width - 1034, cvs.height - 80, 30, 30);

			ctx.fillText(this.arrowCount, cvs.width - 260, cvs.height - 60);
			ctx.drawImage(arrowIconImg, 0, 0, 16, 16, cvs.width - 300, cvs.height - 80, 30, 30);

			ctx.font = "bold 20px sans-serif ";
			ctx.fillStyle = "white";
			ctx.fillText('XP:' + this.hero.xp, cvs.width - 1000, cvs.height - 10);

			if (this.bossSpawnFlag) {
				this.sorcerer.drawEnemy();
			}
		}

		if (gameStates.currentState == gameStates.gameEnd) {
			this.go.drawGameOver();
			document.addEventListener('click', this.restartFunction.bind(this), false);
		}
	}

	collisionCheck = () => {
		//Check collision with the bat and the arrow
		for (let i = 0; i < this.batArray.length; i++) {
			for (let j = 0; j < this.arrowArray.length; j++) {
				if (
					this.batArray[i].xDest < this.arrowArray[j].xDest + this.arrowArray[j].widthDest &&
					this.batArray[i].xDest + this.batArray[i].widthDest > this.arrowArray[j].xDest &&
					this.batArray[i].yDest < this.arrowArray[j].yDest + this.arrowArray[j].heightDest &&
					this.batArray[i].yDest + this.batArray[i].heightDest > this.arrowArray[j].yDest) {
					if (this.batArray[i].health == 0) {

					}
					else {
						this.batArray[i].health = this.batArray[i].health - this.hero.arrowDamage;
						this.arrowArray.pop();
					}
				}
			}
		}
		//Check collision with boss enemy and the arrow
		if (this.bossSpawnFlag) {
			for (let j = 0; j < this.arrowArray.length; j++) {
				if (
					this.sorcerer.xDest < this.arrowArray[j].xDest + this.arrowArray[j].widthDest &&
					this.sorcerer.xDest + this.sorcerer.widthDest > this.arrowArray[j].xDest &&
					this.sorcerer.yDest < this.arrowArray[j].yDest + this.arrowArray[j].heightDest &&
					this.sorcerer.yDest + this.sorcerer.heightDest > this.arrowArray[j].yDest) {
					if (this.sorcerer.health == 0) {
						this.bossIsDead();
						break;
					}
					else {
						this.sorcerer.health = this.sorcerer.health - this.hero.arrowDamage;
						this.arrowArray.pop();
					}
				}
			}
		}

		//Check if hero has stepped on powerups
		for (let k = 0; k < this.powerUpArray.length; k++) {
			if (this.powerUpArray[k].xDest < this.hero.xDest + this.hero.widthDest &&
				this.powerUpArray[k].xDest + this.powerUpArray[k].widthDest > this.hero.xDest &&
				this.powerUpArray[k].yDest < this.hero.yDest + this.hero.heightDest &&
				this.powerUpArray[k].yDest + this.powerUpArray[k].heightDest > this.hero.yDest) {

				this.powerUpCounter = 0;
				this.powerUpno++;

				//According to the powerup type changes are made to the game
				switch (this.powerUpArray[k].itemSelector) {
					case 0:
						this.invinciblePotionFlag = true;
						setTimeout(() => {
							this.invinciblePotionFlag = false;
						}, 4000);
						break;

					case 1:
						this.hero.swordDamage = 40
						setTimeout(() => {
							this.hero.swordDamage = 5;
						}, 4000);
						break;

					case 2:
						this.hero.heroHealth = 100;
						break;

					case 3:
						this.arrowCount = this.maxArrows;
						break;
				}
				this.powerUpArray.splice(k, 1);
			}
		}
	}

	//Provide the hero's position to other enemy classes if they require
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

	//Call function after each wave to reset no of enemies 
	resetFunction = () => {
		this.noOfCobra = 0;
		this.noOfbat = 0;
		this.noOfSpider = 0;
		this.noOfFrog = 0;
		this.noOfFireT = 0;
		this.noOfFireE = 0;
		this.noOfBuffT = 0;
		this.noOfWorm = 0;
		this.noOfWitch = 0;
		this.noOfImp = 0;
		this.powerUpno = 2;
		this.healthReduceCounter = 0;
		for (let i = 0; i < this.batArray.length; i++) {
			this.batArray.splice(0, i + 1);
		}
	}

	//Call function after game ends to restart the game
	restartFunction = () => {
		gameStates.currentState = gameStates.playing;
		document.removeEventListener('click', this.resetFunction.bind(this), false);
		this.noOfCobra = 0;
		this.noOfbat = 0;
		this.noOfSpider = 0;
		this.noOfFrog = 0;
		this.noOfFireT = 0;
		this.noOfFireE = 0;
		this.noOfBuffT = 0;
		this.noOfWorm = 0;
		this.noOfWitch = 0;
		this.noOfImp = 0;
		this.powerUpno = 2;
		this.waveCount = 0;
		this.wave.waveNo = 1;

		this.bossSpawnFlag = false;
		this.bossFlag = false;
		this.waveDisplayFlag = true;
		this.arrowShootFlag = false;
		this.arrowReloadFlag = true;
		this.powerUpFlag = false;

		this.hero.health = 100;
		this.arrowCount = 5;
		this.maxArrows = 5;

		this.healthReduceCounter = 0;

		for (let i = 0; i < this.batArray.length; i++) {
			this.batArray.splice(0, i + 1);
		}
	}

	//Update function produces changes in position of all enemies that are generated in arena
	updateEnemy = () => {
		//Traverse the batArray variable to move all enemies inside it
		for (let i = 0; i < this.batArray.length; i++) {
			if (this.batArray[i].state.current == this.batArray[i].state.dead) {

			}
			else {
				this.batArray[i].moveEnemy();
			}
		}
		//If boss is present then move boss
		if (this.bossSpawnFlag) {
			if (this.sorcerer.state.current == this.sorcerer.state.dead) {

			}
			else {
				this.sorcerer.moveEnemy();
			}
		}
	}

	//This function is looped continuosly but powerups are generated if time and the count matches condition
	powerUpGenerate = () => {
		this.powerUpCounter++;
		if (this.powerUpCounter % this.powerUpInterval == 0 && this.powerUpno != 0) {
			this.powerup = new Powerup();
			this.powerUpArray.push(this.powerup);
			this.powerUpno--;
			this.powerUpFlag = true;
		}
	}

	//This function produces arrows after user presses the required key
	shootArrow = () => {
		if (this.arrowReloadFlag == false) { //Only generate arrow when reload time ends

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

	//After generating arrows this function moves the arrow and generates it's direction accordingly.
	updateArrow = () => {
		for (let i = 0; i < this.arrowArray.length; i++) {
			this.arrowArray[i].getHeroPosition(this.hero.xDest, this.hero.yDest);
			this.arrowArray[i].getArrowDirection(this.hero.keyPressed);
			setTimeout(() => {
				this.arrowReloadFlag = true;
			}, 1000);
		}
	}

	//Check damage infliction on mini enemies and bosses
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
						if (this.invinciblePotionFlag) {

						}
						else {
							this.hero.heroHealth = this.hero.heroHealth - 0.15;
						}
						if (this.hero.keyPressed['a']) {
							this.batArray[i].health = this.batArray[i].health - this.hero.swordDamage;
						}
					}
				}
			}
		}

		//Check damage inflict with the boss
		if (this.bossSpawnFlag) {
			if (this.sorcerer.health == 0) {
				this.bossIsDead();
			}
			if (this.sorcerer.xDest < this.hero.xDest + this.hero.widthDest &&
				this.sorcerer.xDest + this.sorcerer.widthDest > this.hero.xDest &&
				this.sorcerer.yDest < this.hero.yDest + this.hero.heightDest &&
				this.sorcerer.yDest + this.sorcerer.heightDest > this.hero.yDest) {
				if (this.hero.heroHealth == 0) {
					gameStates.currentState = 2
				}
				else {

					this.hero.health = this.hero.health - this.sorcerer.damageDone;
					this.sorcerer.animate = this.sorcerer.animateAttack;
					if (this.hero.keyPressed['a']) {
						this.sorcerer.health = this.sorcerer.health - this.hero.swordDamage;
					}
				}
			}
		}
	}

	//This function is called if the health of boss is zero
	bossIsDead = () => {
		this.hero.xp = this.hero.xp + 100 + this.batArray.length * 20;
		if (this.hero.xp % 200) {
			this.hero.health += 10;
			this.maxArrows += 1;
		}
		this.waveDisplayFlag = true; //Display the wave no
		this.waveCount = this.waveCount + 1;
		this.wave.waveNo++;
		this.bossSpawnFlag = false; //When false no operations on boss are run
		this.resetFunction();
		this.id2 = setInterval(this.createEnemy.bind(this), 2000); //Re run interval to generate enemies
	}

	//This is the main loop function of the game
	loopFunction = () => {
		this.draw();
		this.updateEnemy();
		this.broadcastHeroPos();
		this.powerUpGenerate();
		this.shootArrow();
		this.collisionCheck();
		this.inflictDamage();

		requestAnimationFrame(this.loopFunction);
	}
}






