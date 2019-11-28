var imgArray = document.images;
var imageCount = imgArray.length;
var index;
var widthImage = 400;
var moveImagePixel = 400; //Used for JS only transition effect
var heightImage = 200;
var id;

var carouselContainer = document.getElementById('carousel-container');
var carouselImageWrapper = document.getElementById('carousel-image-wrapper');

carouselContainer.style.width = widthImage + 'px';
carouselContainer.style.height = heightImage + 'px';

carouselImageWrapper.style.width = imageCount * widthImage;

var dots = document.getElementsByTagName('span');

//Code to implement image switch with dot press
function dotOnclick(clickedId) {
  console.log(clickedId);
  idInt = parseInt(clickedId);
  switch (idInt) {
    case 0:
      clearInterval(id);
      changeImage(idInt);
      break;
    case 1:
      clearInterval(id);
      changeImage(idInt);
      break;
    case 2:
      clearInterval(id);
      changeImage(idInt);
      break;
    case 3:
      clearInterval(id);
      changeImage(idInt);
  }
}

function buttonPrev() {
  clearInterval(id);
  carouselImageWrapper.style.left = 1 * -moveImagePixel + 'px';
  changeImage(index - 1);
}

function buttonNext() {
  clearInterval(id);
  carouselImageWrapper.style.right = 1 * moveImagePixel + 'px';
  changeImage(index);
}

function changeImage(imgIndex) {
  index = imgIndex;
  id = setInterval(function () {
    if (index == imageCount) {
      index = 0;
    }
    else {
      carouselImageWrapper.style.left = index * -moveImagePixel + 'px';
      carouselImageWrapper.style.transition = 'all 0.5s';
      for (i = 0; i < imageCount; i++) {
        dots[i].setAttribute('class', 'inactive');
      }
      dots[index].setAttribute('class', 'active');
      index++;
    }
  }, 1000);
}

changeImage(index);
