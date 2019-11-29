function Carousel(carouselContainer, carouselImageWrapper, widthImage, heightImage, delay, transitionTime, imageCount) {
  this.carouselContainer = carouselContainer;
  this.carouselImageWrapper = carouselImageWrapper;
  this.dotArray = [];
  this.widthImage = widthImage;
  this.heightImage = heightImage;
  this.imageCount = imageCount;
  var id;
  this.moveImagePixel = -400;
  this.index = 0;
  this.delay = delay;
  this.transitionTime = transitionTime;

  this.init = function () {
    this.carouselContainer.style.width = this.widthImage + 'px';
    this.carouselContainer.style.height = this.heightImage + 'px';
    this.carouselImageWrapper.style.width = this.imageCount * this.widthImage;
    generateDots();
  }

  this.generateDots = function () {
    var dotVar = document.createElement('div');
    this.carouselContainer.appendChild(dotVar);
    dotVar.setAttribute('class', 'dot-buttons');
    dotVar.style.textAlign = 'center';
    for (var j = 0; j < imageCount; j++) {
      this.dotArray[j] = document.createElement("span");
      this.dotArray[j].setAttribute('id','id'+j);
    }
  }

  this.debugFunction = function () {
    console.log(this.carouselContainer);
    console.log(this.carouselImageWrapper);
    console.log(this.dots);
    console.log(this.widthImage);
    console.log(this.heightImage);
    console.log(this.imageCount);
    console.log(this.moveImagePixel);
    console.log(this.index);
    console.log(this.delay);
  }

  this.changeImage = function (imgIndex) {
    this.index = imgIndex
    if (this.index == this.imageCount) {
      this.index = 0;
    }
    else {
      this.carouselImageWrapper.style.left = this.index * this.moveImagePixel + 'px';
      this.carouselImageWrapper.style.transition = this.delay;
      this.carouselImageWrapper.style.transition.delay = this.delay;
      for (var i = 0; i < this.imageCount; i++) {
        this.dotsArray[i].setAttribute('class', 'inactive');
      }
      this.dotsArray[index].setAttribute('class', 'active');
      this.index = this.index + 1;
    }
  }

  this.dotOnclick = function (clickedId) {
    idInt = parseInt(clickedId);
    switch (idInt) {
      case 0:
        clearInterval(id);
        intervalFunction(idInt);
        break;
      case 1:
        clearInterval(id);
        intervalFunction(idInt);
        break;
      case 2:
        clearInterval(id);
        intervalFunction(idInt);
        break;
      case 3:
        clearInterval(id);
        intervalFunction(idInt);
    }
  }

  this.intervalFunction = function (dotIndex) {
    id = setInterval(this.changeImage(dotIndex), this.transitionTime);
  }

}

var carouselContainerOut = document.getElementById('carousel-container');
var carouselImageWrapperOut = document.getElementById('carousel-image-wrapper');
var widthImage = 400;
var heightImage = 200;
var transitionTime = 1000;
var delay = "1s";
var imgArray = document.images;
imageCount = imgArray.length;

var newCarousel = new Carousel(carouselContainerOut, carouselImageWrapperOut, widthImage, heightImage, delay, transitionTime, imageCount)
newCarousel.init();
newCarousel.intervalFunction();
newCarousel.debugFunction();
