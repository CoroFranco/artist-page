const images = document.querySelectorAll(".image");
const totalSlides = images.length;
let currentSlideIndex = 0;

const prev = document.querySelector("#carousel-prev");
const next = document.querySelector("#carousel-next");

function nextImg() {
    if (currentSlideIndex < totalSlides - 1) {
        images[currentSlideIndex].classList.add("hidden");
        currentSlideIndex++;
        images[currentSlideIndex].classList.remove("hidden");
    }
}
function prevImg() {
    if (currentSlideIndex > 0) {
        images[currentSlideIndex].classList.add("hidden");
        currentSlideIndex--;
        images[currentSlideIndex].classList.remove("hidden");
    }
}

prev.addEventListener("click", prevImg);
next.addEventListener("click", nextImg);