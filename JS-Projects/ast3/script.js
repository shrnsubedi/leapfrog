
; (function () {
  function Box(parentElement) {
    this.x = 10;
    this.y = 10;
    this.dx = 7;
    this.dy = -7;
    this.width = 20;
    this.height = 20;
    this.element = null;
    this.parentElement = parentElement;

    this.init = function () {
      var box = document.createElement('div');
      box.style.height = this.height + 'px';
      box.style.width = this.width + 'px';
      box.classList.add('box');
      this.parentElement.appendChild(box);
      this.element = box;
      this.element.onclick = this.boxClicked.bind(this);
      this.draw();
      return this;
    }

    this.setPostion = function (x, y) {
      this.x = x;
      this.y = y;
    }

    this.boxClicked = function () { //function for ant-smasher
      this.element.style.display = 'none';
    }

    this.draw = function () {
      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
    }

    this.move = function () {
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }

    this.checkOverlap = function () {
      if (this.x < boxes[i].x + boxes[i].width &&
        this.x + this.width > boxes[i].x &&
        this.y < boxes[i].y + boxes[i].height &&
        this.y + this.height > boxes[i].y) {
        return true;
      }
    }

    this.checkCollisionBorder = function (maxWidth, maxHeight) {
      if (this.x + this.dx > maxWidth - this.width || this.x + this.dx < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.dy > maxHeight - this.width || this.y + this.dy < 0) {
        this.dy = -this.dy;
      }
    }
    this.checkCollision = function (boxes) {
      for (var i = 0; i < boxes.length; i++) {
        if (this.x < boxes[i].x + boxes[i].width &&
          this.x + this.width > boxes[i].x &&
          this.y < boxes[i].y + boxes[i].height &&
          this.y + this.height > boxes[i].y) {
          this.dy = -this.dy;
          this.dx = -this.dx;
          boxes[i].dy = -boxes[i].dy;
          boxes[i].dx = -boxes[i].dx;
        }
      }
    }

  }
  //---------------Random Generator----------------->
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  //----------------Game class -------------------------->
  function Game(parentElement, boxCount) {
    var boxes = [];
    var MAX_WIDTH = 500;
    var MAX_HEIGHT = 500;
    this.parentElement = parentElement;
    this.boxCount = boxCount || 5;

    this.startGame = function () {
      for (var i = 0; i < this.boxCount; i++) {
        var box = new Box(parentElement).init();
        box.setPostion(
          getRandomArbitrary(0, MAX_WIDTH - 50),
          getRandomArbitrary(0, MAX_HEIGHT - 50)
        )
        box.draw();
        boxes.push(box);
      }

      setInterval(this.moveBoxes.bind(this), 100)
    }

    this.moveBoxes = function () {
      for (var i = 0; i < this.boxCount; i++) {
        boxes[i].checkCollisionBorder(MAX_WIDTH, MAX_HEIGHT);
        boxes[i].checkCollision(boxes);
        boxes[i].move();
      }
    }
  }

  //------------Call Game from here--------------------------------->

  var parentElement = document.getElementById('collision-boundary');
  new Game(parentElement).startGame();
})();