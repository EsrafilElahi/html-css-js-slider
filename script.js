let slides = document.querySelectorAll(".slide");
let nextBtn = document.querySelector(".btn-right");
let backBtn = document.querySelector(".btn-left");

let slideIndex = 0;
let maxIndex = slides.length - 1;

console.log(backBtn)

nextBtn.addEventListener("click", () => {

  if (slideIndex === maxIndex) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
  })
})

backBtn.addEventListener("click", () => {

  if (slideIndex === 0) {
    slideIndex = maxIndex
  } else {
    slideIndex--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`
  })
})