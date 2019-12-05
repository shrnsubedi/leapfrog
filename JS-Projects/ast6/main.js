class Helix {
	constructor() {
		this.phase = 0;
		this.time = 0.03;
		this.radiusMax = 7;
		this.frames = 0;
		this.rows = 15;
		this.cols = 15;
		this.numStrands = 1;
		this.yPos;
		this.xPos = 0
		this.gapY = 20;
		this.gapX = 50;
		setInterval(this.calculate.bind(this), 20);
	}

	calculate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.xPos = 0
		this.frames++;
		this.phase = this.frames * this.time;

		for (let i = 0; i < this.cols; i++) {
			this.xPos = this.xPos + this.gapX;
			for (let j = 0; j < this.rows; j++) {
				this.yPos = canvas.height / 3 + j * this.gapY;
				this.radiusSizeVar = (Math.cos(this.phase - (j * 0.1) + i) + 1) * 0.5;
				this.radiusDraw = this.radiusSizeVar * this.radiusMax;
				this.drawCircle();
			}
		}
	}
	drawCircle() {
		ctx.beginPath();
		ctx.arc(this.xPos, this.yPos, this.radiusDraw, 0, Math.PI * 2, false);
		ctx.fillStyle = 'white';
		ctx.fill();
		ctx.closePath();
	}
}
var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');

var hlx = new Helix()
