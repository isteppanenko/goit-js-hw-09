import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const elTimer = {
  inputDate: document.querySelector('input#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  valueDays: document.querySelector('.value[data-days]'),
  valueHours: document.querySelector('.value[data-hours]'),
  valueMinutes: document.querySelector('.value[data-minutes]'),
  valueSeconds: document.querySelector('.value[data-seconds]'),
};

elTimer.btnStart.addEventListener('click', handlerBtnStart);
elTimer.btnStart.disabled = true;

let timerNeedTime;
let interval;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const nowDate = new Date();
    if (selectedDates[0] - nowDate < 0) {
      elTimer.btnStart.setAttribute('disabled', '');
      Notify.failure('Please choose a date in the future');
    } else {
      timerNeedTime = Math.ceil((selectedDates[0] - nowDate) / 1000);
      elTimer.btnStart.removeAttribute('disabled');
    }
  },
});

function currentTime() {
  const days = Math.floor(timerNeedTime / 86400);
  const hours = Math.floor((timerNeedTime % 86400) / 3600);
  const minutes = Math.floor(((timerNeedTime % 86400) % 3600) / 60);
  const seconds = Math.floor(((timerNeedTime % 86400) % 3600) % 60);

  elTimer.valueDays.textContent = `${String(days).padStart(2, '0')}`;
  elTimer.valueHours.textContent = `${String(hours).padStart(2, '0')}`;
  elTimer.valueMinutes.textContent = `${String(minutes).padStart(2, '0')}`;
  elTimer.valueSeconds.textContent = `${String(seconds).padStart(2, '0')}`;

  timerNeedTime -= 1;

  if (timerNeedTime < 0) {
    clearInterval(interval);
  }
}

function handlerBtnStart(e) {
  currentTime();
  interval = setInterval(currentTime, 1000);
  elTimer.btnStart.disabled = true;
}
