function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const el = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let setColor = null;
el.body.classList.add('styles-body');
el.startButton.classList.add('start-btm');
el.stopButton.classList.add('stop-btm');

function color() {
  el.body.style.backgroundColor = `${getRandomHexColor()}`;
}

function swapButtonAttribute() {
  if (el.stopButton.hasAttribute('disabled')) {
    el.stopButton.removeAttribute('disabled');
    el.startButton.setAttribute('disabled', '');
  } else {
    el.startButton.removeAttribute('disabled');
    el.stopButton.setAttribute('disabled', '');
  }
}

el.startButton.addEventListener('click', () => {
  setColor = setInterval(color, 1000);
  swapButtonAttribute();
});

el.stopButton.addEventListener('click', () => {
  clearInterval(setColor);
  swapButtonAttribute();
});

el.stopButton.setAttribute('disabled', '');
