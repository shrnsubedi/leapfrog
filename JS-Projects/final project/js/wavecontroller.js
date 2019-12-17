class Wave {
    constructor() {
        this.waveNo = 1;
        this.waveInfo = [
            {
                //wave 1
                enemyCount: 7,
                batCount: 7,
                cobraCount: 0,
                fireECount: 0,
                buffTCount: 0,
                frogCount: 0,
                impCount: 0,
                spiderCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },

            {
                //wave 2
                enemyCount: 10,
                batCount: 3,
                cobraCount: 7,
                fireECount: 0,
                buffTCount: 0,
                frogCount: 0,
                impCount: 0,
                spiderCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },
            {
                //wave 3
                enemyCount: 14,
                batCount: 2,
                cobraCount: 5,
                spiderCount: 7,
                fireECount: 0,
                buffTCount: 0,
                frogCount: 0,
                impCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },
            {
                //wave 4
                enemyCount: 16,
                batCount: 4,
                cobraCount: 2,
                spiderCount: 2,
                frogCount: 8,
                fireECount: 0,
                buffTCount: 0,
                impCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },
            {
                //wave 5
                enemyCount: 7,
                batCount: 7,
                cobraCount: 0,
                fireECount: 0,
                buffTCount: 0,
                frogCount: 0,
                impCount: 0,
                spiderCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },
            {
                //wave 6
                enemyCount: 7,
                batCount: 7,
                cobraCount: 0,
                fireECount: 0,
                buffTCount: 0,
                frogCount: 0,
                impCount: 0,
                spiderCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },
            {
                //wave 7
                enemyCount: 7,
                batCount: 7,
                cobraCount: 0,
                fireECount: 0,
                buffTCount: 0,
                frogCount: 0,
                impCount: 0,
                spiderCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },
            {
                //wave 8
                enemyCount: 7,
                batCount: 7,
                cobraCount: 0,
                fireECount: 0,
                buffTCount: 0,
                frogCount: 0,
                impCount: 0,
                spiderCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },
            {
                //wave 9
                enemyCount: 7,
                batCount: 7,
                cobraCount: 0,
                fireECount: 0,
                buffTCount: 0,
                frogCount: 0,
                impCount: 0,
                spiderCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },
            {
                //wave 10
                enemyCount: 7,
                batCount: 7,
                cobraCount: 0,
                fireECount: 0,
                buffTCount: 0,
                frogCount: 0,
                impCount: 0,
                spiderCount: 0,
                witchCount: 0,
                wormCount: 0,
                fireTCount: 0
            },
        ];
    }
    //Control wave properties from here ie enemy count, type etc
    writeWaveText = () => {
        ctx.font = "bold 20px sans-serif ";
        ctx.fillStyle = "white";
        ctx.strokeText("Wave:" + this.waveNo, 650, 390);
    }

}