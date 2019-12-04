function Game() {

    function drawFunction() {
        ctx.fillStyle = "#70c5ce";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        bg.drawBackground();
        fg.drawForeground();
        bird.drawBird();
        gameOverScreen.drawGameOver();
        pipes.drawPipes();
    }

    function updateFunction() {
        fg.moveForeground();
        bird.birdUpdate();
        pipes.updatePipes();
    }

    cvs.addEventListener('click', function (event) {
        switch (gameStates.currentState) {
            case gameStates.beforeStart:
                if (bird.yDest - bird.radius <= 0) return;
                gameStates.currentState = gameStates.playing;
                break;
            case gameStates.playing:
                bird.birdJump();
                break;
            case gameStates.gameOver:
                pipes.resetPipes();
                bird.resetBird();
                gameStates.currentState = gameStates.beforeStart;
                break;
        }
    });

    function loop() {
        drawFunction();
        updateFunction();
        this.frames++;
        requestAnimationFrame(loop);
    }
    loop();
}

new Game();
