
// let const var ←変数（箱）

let slideIndex = 4;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 4000);

showSlide(slideIndex);

// ローディング画面を2.5秒後に非表示にする
setTimeout(() => {
    const intro = document.querySelector(".intro-screen");
    if (intro) intro.style.display = "none";
}, 4000);
