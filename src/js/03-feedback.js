import throttle from 'lodash.throttle';

const emailWindow = document.querySelector('.feedback-form input');
const messageWindow = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
  const result = {
    email: emailWindow.value,
    message: messageWindow.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(result));
});

let stored = localStorage.getItem('feedback-form-state');
let parsed = stored ? JSON.parse(stored) : {};

emailWindow.value = parsed.email || '';
messageWindow.value = parsed.message || '';

function send(event) {
  if (emailWindow.value === '' || messageWindow.value === '') {
    emailWindow.setAttribute('placeholder', 'Fill it!');
    messageWindow.setAttribute('placeholder', 'Fill it!');
  } else {
    event.preventDefault();
    console.log(parsed);
    form.reset();
  }
}

form.addEventListener('submit', send);
