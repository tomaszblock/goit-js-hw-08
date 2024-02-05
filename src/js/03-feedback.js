import throttle from 'lodash.throttle';

const emailWIndow = document.querySelector('.feedback-form input');
const messageWindow = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');

const result = {};

const emailFunc = () => {
  result.email = emailWIndow.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(result));
  //   console.log(result);
};
const messageFunc = () => {
  result.message = messageWindow.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(result));
  //   console.log(result);
};

emailWIndow.addEventListener('keyup', throttle(emailFunc, 500));
messageWindow.addEventListener('keyup', throttle(messageFunc, 500));
JSON.parse(localStorage.getItem('feedback-form-state'));

const stored = localStorage.getItem('feedback-form-state');
const parsed = JSON.parse(stored);

if (parsed.email !== null) {
  emailWIndow.value = parsed.email;
} else {
  return;
}
if (parsed.message !== null) {
  messageWindow.value = parsed.message;
} else {
  return;
}

function send(event) {
  event.preventDefault();
  console.log(parsed);
  form.reset();
}

form.addEventListener('submit', send);
