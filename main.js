'use strict';

var container = document.querySelector('.container');
var containerWidth = container.getBoundingClientRect().width;
var $slides = document.querySelector('.slides');
var $slide = $slides.querySelectorAll('.feature');
var $prevBtn = document.querySelector('.prev');
var $nextBtn = document.querySelector('.next');
// var slideWidth = 383;
var slideCount = $slide.length;
var currentIdx = 0;
var showNumber = 3;

if (matchMedia('screen and (min-width: 480px)').matches) {
  // 480px 이상에서 사용할 JavaScript
  $slide.forEach(function (slide) {
    slide.style.width = containerWidth * 0.333333 + 'px';
  });

  $slides.style.width = containerWidth * 0.333333 * slideCount + 'px';

  function moveSlide(num) {
    $slides.style.left = containerWidth * 0.333333 * -num + 'px';
    currentIdx = num;
  }
} else {
  // 480px 미만에서 사용할 JavaScript
  $slide.forEach(function (slide) {
    slide.style.width = containerWidth * 0.8 + 'px';
  });

  $slides.style.width = containerWidth * 0.8 * slideCount + 'px';

  function moveSlide(num) {
    $slides.style.left = containerWidth * 0.8 * -num + 'px';
    currentIdx = num;
  }
}

$nextBtn.addEventListener('click', function () {
  if (currentIdx >= slideCount - showNumber) {
    moveSlide(0);
  } else {
    moveSlide(currentIdx + 1);
  }
});
$prevBtn.addEventListener('click', function () {
  console.log(currentIdx);
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - showNumber);
  }
});
