class Helix {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.phase = 0;
		this.time = 0.03;
		this.radiusMax = 7;
		this.frames = 0;
		this.rows = 15;
		this.cols = 15;
		this.numStrands = 1;
		this.yPos;
		this.xPos = 0
		this.gapY = 16;
		this.gapX = 50;
		setInterval(this.calculate.bind(this), 20);
	}

	calculate() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.xPos = 0
		this.frames++;
		this.phase = this.frames * this.time;


		for (let i = 0; i < this.cols; i++) {
			this.xPos = this.xPos + this.gapX;
			this.colShift = (i * 2 * Math.PI) / 10;
			for (let j = 0; j < this.rows; j++) {
				this.yPos = this.canvas.height / 7 + j * this.gapY + Math.sin(this.phase + this.colShift) * 50;
				this.radiusSizeVar = (Math.cos(this.phase - (j * 0.1) + i) + 1) * 0.5;
				this.radiusDrawSize = this.radiusSizeVar * this.radiusMax;
				this.drawCircle();
			}
		}
	}
	drawCircle() {
		this.ctx.beginPath();
		this.ctx.arc(this.xPos, this.yPos, this.radiusDrawSize, 0, Math.PI * 2, false);
		this.ctx.fillStyle = 'white';
		this.ctx.fill();
		this.ctx.closePath();
	}
}
var canvas1 = document.getElementById('mainCanvas');
var ctx1 = canvas1.getContext('2d');
var hlx = new Helix(canvas1, ctx1);

var canvas2 = document.getElementById('mainCanvas2');
var ctx2 = canvas2.getContext('2d');
var hlx2 = new Helix(canvas2, ctx2);
