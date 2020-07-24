class Powerup {
	constructor() {
		this.itemSelector = Math.floor(Math.random() * 4);
		this.icons = [
			{
				//red potion
				sourceX: 3,
				sourceY: 6
			},
			{
				//green potion
				sourceX: 27,
				sourceY: 6
			},
			{
				//health food
				sourceX: 2,
				sourceY: 52
			},
			{
				//arrow
				sourceX: 50,
				sourceY: 50
			}
		];

		this.width = 20;
		this.height = 20;
		this.xDest = Math.floor((Math.random() * 700) + 230);
		this.yDest = Math.floor((Math.random() * 500) + 100);
		this.xMove;
		this.yMove;
		this.widthDest = 20;
		this.heightDest = 20;
	}
	drawPower = () => {
		ctx.drawImage(powerupImage, this.icons[this.itemSelector].sourceX, this.icons[this.itemSelector].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
	}
}