class Wave { //Control wave properties from here ie enemy count, type etc
	constructor() {
		this.waveNo = 1;
		this.waveInfo = [
			{
				//wave 1
				enemyCount: 1,
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
				cobraCount: 4,
				fireECount: 0,
				buffTCount: 0,
				frogCount: 0,
				impCount: 0,
				spiderCount: 0,
				witchCount: 0,
				wormCount: 3,
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
				enemyCount: 20,
				batCount: 1,
				cobraCount: 2,
				fireECount: 8,
				buffTCount: 7,
				frogCount: 2,
				impCount: 0,
				spiderCount: 0,
				witchCount: 0,
				wormCount: 0,
				fireTCount: 0
			},
			{
				//wave 6
				enemyCount: 22,
				batCount: 1,
				cobraCount: 1,
				fireECount: 6,
				buffTCount: 6,
				frogCount: 6,
				impCount: 2,
				spiderCount: 0,
				witchCount: 0,
				wormCount: 0,
				fireTCount: 0
			},
			{
				//wave 7
				enemyCount: 24,
				batCount: 1,
				cobraCount: 1,
				fireECount: 3,
				buffTCount: 3,
				frogCount: 4,
				impCount: 6,
				spiderCount: 2,
				witchCount: 2,
				wormCount: 0,
				fireTCount: 0
			},
			{
				//wave 8
				enemyCount: 26,
				batCount: 1,
				cobraCount: 1,
				fireECount: 1,
				buffTCount: 1,
				frogCount: 1,
				impCount: 6,
				spiderCount: 2,
				witchCount: 0,
				wormCount: 3,
				fireTCount: 10
			},
			{
				//wave 9
				enemyCount: 28,
				batCount: 0,
				cobraCount: 0,
				fireECount: 0,
				buffTCount: 2,
				frogCount: 0,
				impCount: 6,
				spiderCount: 2,
				witchCount: 8,
				wormCount: 2,
				fireTCount: 8
			},
			{
				//wave 10
				enemyCount: 30,
				batCount: 3,
				cobraCount: 3,
				fireECount: 3,
				buffTCount: 3,
				frogCount: 3,
				impCount: 3,
				spiderCount: 3,
				witchCount: 3,
				wormCount: 3,
				fireTCount: 3
			},
		];
	}

	writeWaveText = () => {
		ctx.font = "bold 20px sans-serif ";
		ctx.fillStyle = "white";
		ctx.strokeText("Wave:" + this.waveNo, 650, 390);
	}

}