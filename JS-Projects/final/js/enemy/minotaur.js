class Minotaur {
  constructor() {
    this.frame = 0;
    this.id3 = setInterval(this.animateEnemy.bind(this), 75);
    this.animate = [];
    this.animateAttack = [];
    this.state = {
      dead: 0,
      alive: 1,
      current: 1
    }
    this.animateMoveRight = [
      {
        sourceX: 24,
        sourceY: 116
      },
      {
        sourceX: 119,
        sourceY: 116
      },
      {
        sourceX: 216,
        sourceY: 116
      },
      {
        sourceX: 308,
        sourceY: 116
      },
      {
        sourceX: 407,
        sourceY: 116
      },
      {
        sourceX: 502,
        sourceY: 116
      },
      {
        sourceX: 601,
        sourceY: 116
      },
      {
        sourceX: 119,
        sourceY: 116
      }
    ];
    this.animateMoveLeft = [
      {
        sourceX: 15,
        sourceY: 1076
      },
      {
        sourceX: 110,
        sourceY: 1076
      },
      {
        sourceX: 204,
        sourceY: 1076
      },
      {
        sourceX: 297,
        sourceY: 1076
      },
      {
        sourceX: 394,
        sourceY: 1076
      },
      {
        sourceX: 490,
        sourceY: 1076
      },
      {
        sourceX: 585,
        sourceY: 1076
      },
      {
        sourceX: 684,
        sourceY: 1076
      }
    ];

    this.animateAttackLeft = [
      {
        sourceX: 35,
        sourceY: 1252
      },
      {
        sourceX: 101,
        sourceY: 1252
      },
      {
        sourceX: 20,
        sourceY: 1252
      },
      {
        sourceX: 290,
        sourceY: 1253
      },
      {
        sourceX: 398,
        sourceY: 1257
      },
      {
        sourceX: 597,
        sourceY: 1257
      },
      {
        sourceX: 683,
        sourceY: 1257
      }
    ];
    this.animateAttackRight = [
      {
        sourceX: 5,
        sourceY: 288
      },
      {
        sourceX: 106,
        sourceY: 288
      },
      {
        sourceX: 204,
        sourceY: 288
      },
      {
        sourceX: 309,
        sourceY: 288
      },
      {
        sourceX: 409,
        sourceY: 288
      },
      {
        sourceX: 502,
        sourceY: 288
      },
      {
        sourceX: 786,
        sourceY: 288
      }
    ];

    this.animateDead = [
      {
        sourceX: 514,
        sourceY: 899
      }
    ];

    this.animate = this.animateMoveRight;
    this.width = 78;
    this.height = 70;
    this.posGen = 318;
    this.xDest = this.posGen;
    this.yDest = 122;
    this.widthDest = 80;
    this.heightDest = 80;
    this.moveDist = 20;
    this.heroX;
    this.heroY;

    this.health = 60;
    this.damageDone = 10;
  }

  getHeroPosition = (heroX, heroY) => {
    this.heroX = heroX;
    this.heroY = heroY;
  }
  animateEnemy = () => {
    this.frame++;
  }

  moveEnemy = () => {
    if (this.heroX >= this.xDest) {
      this.xDest++;
      if (this.heroY > this.yDest) {
        this.yDest++;
      }
      else if (this.heroY < this.yDest) {
        this.yDest--;
      }
      this.animate = this.animateMoveRight;
      this.animateAttack = this.animateAttackRight;
    }
    else if (this.heroX <= this.xDest) {
      this.xDest--;
      if (this.heroY > this.yDest) {
        this.yDest++;
      }
      else if (this.heroY < this.yDest) {
        this.yDest--
      }
      this.animate = this.animateMoveLeft;
      this.animateAttack = this.animateAttackLeft;
    }
  }

  drawEnemy = () => {
    if (this.health == 0) {
      this.state.current = 0;
      clearInterval(this.id3);
      this.animate = this.animateDead;
      this.frame = this.animate.length - 1;

    }
    else if (this.health != 0) {
      if (this.frame >= this.animate.length) {
        this.frame = 0;
      }
    }
    ctx.drawImage(minotaurImage, this.animate[this.frame].sourceX, this.animate[this.frame].sourceY, this.width, this.height, this.xDest, this.yDest, this.widthDest, this.heightDest);
  }
}