import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const { delay, step, amount } = form.elements;
form.addEventListener('submit', createPromise);
let position = 0;
let stepValue = 0;

function createPromise(event) {
  event.preventDefault();

  setTimeout(() => {
    newPromise(position, Number(delay.value));
    stepValue += Number(delay.value);
  }, delay.value);

  setTimeout(() => {
    for (let index = 0; index < amount.value - 1; index += 1) {
      position += 1;
      stepValue += Number(step.value);
      newPromise(position, stepValue);
    }
  }, delay.value);

  setTimeout(() => {
    position = 1;
    stepValue = 0;
  }, 0);
}

function newPromise(position, stepValue) {
  setTimeout(() => {
    let a = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    });
    returnResult(a, position, stepValue);
  }, stepValue - Number(delay.value));
}

function returnResult(a, position, stepValue) {
  a.then(() => {
    Notify.success(`✅ Fulfilled promise ${position} in ${stepValue}ms`);
  }).catch(() => {
    Notify.failure(`❌ Rejected promise ${position} in ${stepValue}ms`);
  });
}

Notify.init({
  clickToClose: true,
  position: 'center-center',
  width: '600px',
  timeout: '10000',
  fontSize: '17px',
});

const formEl = document.querySelector('.form');
const formInputs = document.querySelectorAll('input');
const formLabels = document.querySelectorAll('label');
const formButton = document.querySelectorAll('button');

formEl.addEventListener('submit', handleForm);

function handleForm(evt) {
  evt.preventDefault();
  let promDelay = Number(evt.target.elements.delay.value);
  const promStep = Number(evt.target.elements.step.value);
  const promAmount = Number(evt.target.elements.amount.value);
  for (let i = 1; i <= promAmount; i += 1) {
    createPromise(i, promDelay)
      .then(({ position, delay }) => {
        Notify.success(`Успішний тест №${position} на ${delay} мс`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Помилка у тесті №${position} на ${delay} мс`);
      });
    promDelay += promStep;
  }
}
