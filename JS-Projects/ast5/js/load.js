const spriteImage = new Image();
spriteImage.src = 'img/sprite.png';

this.frames = 0;

const cvs = document.getElementById('canvas-wraper');
const ctx = cvs.getContext('2d');

const gameStates = {
    currentState: 0,
    beforeStart: 0,
    playing: 1,
    gameOver: 2
}