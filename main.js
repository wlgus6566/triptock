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

$slide.forEach(function (slide) {
  slide.style.width = containerWidth * 0.333333 + 'px';
});

$slides.style.width = containerWidth * 0.333333 * slideCount + 'px';

function moveSlide(num) {
  $slides.style.left = containerWidth * 0.333333 * -num + 'px';
  currentIdx = num;
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
