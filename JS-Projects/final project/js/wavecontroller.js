class Wave {
    constructor() {
        this.waveNo = 1;
    }
    //Control wave properties from here ie enemy count, type etc
    writeWaveText = () => {
        ctx.font = "bold 20px sans-serif ";
        ctx.fillStyle = "white";
        ctx.strokeText("Wave:" + this.waveNo, 650, 390);
    }
}