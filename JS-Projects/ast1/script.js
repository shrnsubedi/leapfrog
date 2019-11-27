var imgArray = document.images;
var imageCount = imgArray.length;
var index = 0;
var widthImage = 400;
var moveImagePixel = 400;
var heightImage = 200;
var direction = "right";

var carouselContainer = document.getElementById('carousel-container');
var carouselImageWrapper = document.getElementById('carousel-image-wrapper');

carouselContainer.style.width = widthImage + 'px';
carouselContainer.style.height = heightImage + 'px';

carouselImageWrapper.style.width = imageCount * widthImage;

var dots = document.getElementsByTagName("span")
console.log(dots);
/* Code to implement image switch with dot press
function dotOnclick(clickedId) {
  console.log(clickedId);
  switch (clickedId) {
    case 1:
      index = 0;
      break;
    case 2:
      index = 1;
      break;
    case 3:
      index = 2;
      break;
    case 4:
      index = 3;
  }
}
*/
function setDirectionLeft() {
  direction = "left";
}

function setDirectionRight() {
  direction = "right";
}

setInterval(function () {
  if (direction == "left") {
    if (index == imageCount) {
      index = 0;
    }
    else {
      carouselImageWrapper.style.left = index * -moveImagePixel + 'px';
      carouselImageWrapper.style.transition = "all 2s";
      dots[index].setAttribute("class", "inactive");
      index++;
      dots[index].setAttribute("class", "active");
    }
  }

  else {
    if (index == imageCount) {
      index = 0;
    }
    else {
      carouselImageWrapper.style.right = index * -moveImagePixel + 'px';
      carouselImageWrapper.style.left = "";
      carouselImageWrapper.style.transition = "all 2s";
      dots[index].setAttribute("class", "inactive");
      index++;
      dots[index].setAttribute("class", "active");
    }
  }
}, 2000);