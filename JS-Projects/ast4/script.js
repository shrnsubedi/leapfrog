; (function () {
	function Player(parentElement) {
		//Variable Declaration
		this.moveRoadBy = 10;
		this.leftPos = 250;
		this.rightPos = 0;
		this.height = 100;
		this.width = 100;
		this.y = 425;
		this.parentElement = parentElement;
		this.element = null;
		document.addEventListener("keydown", keyDownHandler.bind(this), false);

		//Player Car
		this.generatePlayer = function () {
			var playerCar = document.createElement('div');
			playerCar.style.height = this.height + 'px';
			playerCar.style.width = this.width + 'px';
			playerCar.style.top = this.y + 'px';
			playerCar.classList.add('player-car');
			this.parentElement.appendChild(playerCar);
			this.element = playerCar;
			this.drawCar();

		}
		//Move background
		this.moveBackground = function () {
			this.parentElement.style.backgroundPositionY = this.moveRoadBy + 'px';
			this.moveRoadBy = this.moveRoadBy + 5;
		}

		setInterval(this.moveBackground.bind(this), 10);

		//Move player car after recieving keystroke

		this.move = function (l, r) {
			this.rightPos += r;
			this.leftPos += l;
			this.drawCar();
		}

		this.drawCar = function () {
			this.element.style.left = this.leftPos + 'px';
			this.element.style.right = this.rightPos + 'px';
		}
		//Function for event listener

		function keyDownHandler(e) {
			console.log('event handler called');
			if (e.key == "Right" || e.key == "ArrowRight") {
				if (this.leftPos == 425) {
					this.move(0, 0);
				}
				else {
					this.move(175, 0);
				}
			}
			else if (e.key == "Left" || e.key == "ArrowLeft") {
				if (this.leftPos == 75) {
					this.move(0, 0);
				}
				else {
					this.move(-175, 0);
				}
			}
		}
	}
	//------------------------------------>opponent cars class<---------------
	function Opponent(parentElement) {

		this.element2 = null;
		this.lanePosition;
		this.lane1 = 75;
		this.lane2 = 250;
		this.lane3 = 425;
		this.opponentCarSpeed = 1;
		this.height = 100;
		this.width = 100;
		this.parentElement = parentElement;

		this.generateLanePosition = function () {
			var result = Math.floor(Math.random() * 3);
			if (result == 0) {
				this.lanePosition = 75;
				this.drawOpponentCar(this.lane1);
			}
			else if (result == 1) {
				this.lanePosition = 250;
				this.drawOpponentCar(this.lane2);
			}
			else if (result == 2) {
				this.lanePosition = 425;
				this.drawOpponentCar(this.lane3);
			}
		}

		this.generateOpponentCars = function () {
			var opponentCar = document.createElement('div');
			opponentCar.style.height = this.height + 'px';
			opponentCar.style.width = this.width + 'px';
			opponentCar.classList.add('opponent-car');
			this.parentElement.appendChild(opponentCar);
			this.element2 = opponentCar;
			this.element2.style.top = 0 + 'px';
			this.generateLanePosition();
		}

		this.drawOpponentCar = function (lane) {
			this.element2.style.left = lane + 'px';
			this.moveOpponentCar();
		}

		this.moveOpponentCar = function () {
			this.element2.style.top = this.opponentCarSpeed + 'px';
			this.opponentCarSpeed += 1;
		}

		this.removeOpponentCar = function () {
			this.parentElement.removeChild(this.element2);
		}

		setInterval(this.moveOpponentCar.bind(this), 10);
	}
	//---------------------------------Game Class---------
	function GameMenu(parentElement) {
		this.parentElement = parentElement;
		this.score = 0;
		this.oc;
		this.carArray = [];
		var that = this;
		var id;
		//this.car = '';

		var scoreShow = document.createElement('h2');
		parentElement.appendChild(scoreShow);

		that.carCreate = function () {
			this.car = new Player(parentElement);
			this.car.generatePlayer();
		};

		this.checkCollision = function () {
			for (var i = 0; i < this.carArray.length; i++)
				if (this.car.leftPos < this.carArray[i].lanePosition + this.carArray[i].width &&
					this.car.leftPos + this.car.width > this.carArray[i].lanePosition &&
					this.car.y < this.carArray[i].opponentCarSpeed + this.carArray[i].height &&
					this.car.y + this.car.height > this.carArray[i].opponentCarSpeed) {
					this.gameOver();
				}
		}

		this.opponentLoop = function () {
			this.oc = new Opponent(parentElement);
			this.oc.opponentCarSpeed = 1;
			this.oc.generateOpponentCars();
			this.carArray.push(this.oc);
			this.checkCollision();
			this.updateScore();
		}
		id = setInterval(this.opponentLoop.bind(this), 2200);

		this.updateScore = function () {
			if (that.carArray[0].opponentCarSpeed >= 500) {
				that.carArray[0].removeOpponentCar();
				that.carArray.splice(0, 1);
				that.score++;
				scoreShow.innerHTML = 'Score=' + this.score;
			}
		}

		this.gameOver = function () {
			alert('Game OVER!');
			clearInterval(id);
			this.score = 0;
			document.location.reload();
		}
	}
	//------------------------------->Generate Game from here

	var parentElement = document.getElementById('app-container');
	new GameMenu(parentElement).carCreate();
})();