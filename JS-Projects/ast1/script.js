var imgArray = document.images;
var imageCount = imgArray.length;
var index = 0;
var widthImage = 400;
var moveImagePixel = 400;
var heightImage = 200;

var carouselContainer = document.getElementById('carousel-container');
var carouselImageWrapper = document.getElementById('carousel-image-wrapper');
console.log(carouselContainer);
console.log(carouselImageWrapper);
console.log(imageCount);

carouselContainer.style.width = widthImage + 'px';
carouselContainer.style.height = heightImage + 'px';

carouselImageWrapper.style.width = imageCount * widthImage;

setInterval(function () {
  if (index == imageCount) {
    index = 0;
    clearInterval();
  }
  else {
    carouselImageWrapper.style.left = index * -moveImagePixel + 'px';
    carouselImageWrapper.style.transition = "all 2s";
    index++;
  }
}, 2000);