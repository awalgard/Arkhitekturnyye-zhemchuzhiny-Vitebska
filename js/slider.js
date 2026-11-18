// Слайдер: лента слайдов сдвигается через transform, анимация — transition в CSS
const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slider__slide');
const dotsContainer = document.querySelector('.slider__dots');

let currentIndex = 0;

// Точки генерируем по количеству слайдов, отдельной разметки не нужно
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('slider__dot');
    dot.type = 'button';
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slider__dot');

function goToSlide(index) {
    const count = slides.length;
    currentIndex = (index + count) % count; // зацикливание ленты по кругу

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('slider__dot--active'));
    dots[currentIndex].classList.add('slider__dot--active');
}

document.querySelector('.slider__btn--prev').addEventListener('click', () => goToSlide(currentIndex - 1));
document.querySelector('.slider__btn--next').addEventListener('click', () => goToSlide(currentIndex + 1));

goToSlide(0);
