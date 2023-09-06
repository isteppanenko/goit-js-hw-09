import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const { delay, step, amount } = form.elements;
form.addEventListener('submit', createPromise);
let position = 0;
let stepValue = 0;
function createPromise(e) {
  e.preventDefault();
  // вилик першого елементу
  setTimeout(() => {
    newPromise(position, Number(delay.value));
    stepValue += Number(delay.value);
  }, delay.value);
  // вилик решти елементів
  setTimeout(() => {
    for (let index = 0; index < amount.value - 1; index += 1) {
      position += 1;
      stepValue += Number(step.value);
      newPromise(position, stepValue);
    }
  }, delay.value);
  // оновлення значення після завершення діЇ
  setTimeout(() => {
    position = 1;
    stepValue = 0;
  }, 0);
}

//створення промісів
function newPromise(position, stepValue) {
  // створення і обробка промісів
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
