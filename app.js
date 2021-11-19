"use strict";
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const slide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const mainSlide =
  document.querySelectorAll(".main-slide div").length * 100 - 100;
let activeSlideIndex = 0;

sidebar.style.top = `-${mainSlide}vh`;
upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (
      activeSlideIndex === document.querySelectorAll(".main-slide div").length
    ) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex =
        document.querySelectorAll(".main-slide div").length - 1;
    }
  }
  const height = container.clientHeight;
  slide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
