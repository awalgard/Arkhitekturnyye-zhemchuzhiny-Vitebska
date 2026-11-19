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


// Модалка записи: открытие, закрытие, отправка формы
const modal = document.getElementById('modal');
const form = document.getElementById('modal-form');
const success = document.getElementById('modal-success');

// Открытие: сбрасываем форму в исходное состояние
document.getElementById('modal-open').addEventListener('click', () => {
    form.hidden = false;
    success.hidden = true;
    modal.classList.add('modal--open');
});

// Закрытие: крестик, клик по фону, Esc
modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', () => modal.classList.remove('modal--open'));
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') modal.classList.remove('modal--open');
});

// submit срабатывает только если браузерная валидация (required, type="email", pattern) прошла
form.addEventListener('submit', e => {
    e.preventDefault();

    form.hidden = true;
    success.hidden = false;
});


// Появление секций при скролле
const revealBlocks = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
        }
    });
});

revealBlocks.forEach(block => observer.observe(block));
