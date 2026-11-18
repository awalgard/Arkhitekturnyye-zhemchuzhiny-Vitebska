// Модалка записи: открытие, закрытие, валидация и отправка формы
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
