class Background {
	sourceX = 0;
	sourceY = 0;
	width = 1280;
	height = 720;
	xDest = 0;
	yDest = 0;
	widthDest = cvs.width;
	heightDest = cvs.height;

	drawBackground = () => {
		ctx.drawImage(backgroundImage, this.sourceX, this.sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
	}
}
