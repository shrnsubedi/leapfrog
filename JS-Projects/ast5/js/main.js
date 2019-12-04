function Game() {

    function drawFunction() {
        ctx.fillStyle = "#70c5ce";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        bg.drawBackground();
        fg.drawForeground();
    }

    function updateFunction() {
        fg.moveForeground();
    }

    function loop() {
        drawFunction();
        updateFunction();
        this.frames++;
        requestAnimationFrame(loop);
    }
    loop();
}

new Game();
