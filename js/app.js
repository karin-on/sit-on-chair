const slides = document.querySelectorAll('.banner-slide');
const showNextBtn = document.querySelector('#banner-next');
const showPrevBtn = document.querySelector('#banner-prev');
let currSlideIndex = 0;


function showNext() {
    slides[currSlideIndex].classList.remove('banner-slide-active');

    if (currSlideIndex === slides.length - 1) {
        currSlideIndex = 0;
    } else {
        currSlideIndex++;
    }

    slides[currSlideIndex].classList.add('banner-slide-active');
}

function showPrev() {
    slides[currSlideIndex].classList.remove('banner-slide-active');

    if (currSlideIndex === 0) {
        currSlideIndex = slides.length - 1;
    } else {
        currSlideIndex--;
    }

    slides[currSlideIndex].classList.add('banner-slide-active');
}

showNextBtn.addEventListener('click', showNext);
showPrevBtn.addEventListener('click', showPrev);
slides[currSlideIndex].classList.add('banner-slide-active');