import throttle from 'lodash.throttle';

const emailWindow = document.querySelector('.feedback-form input');
const messageWindow = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');
const listener = () => {
  const result = {
    email: emailWindow.value,
    message: messageWindow.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(result));
};
form.addEventListener('input', throttle(listener, 500));
let stored = localStorage.getItem('feedback-form-state');
let parsed = stored ? JSON.parse(stored) : {};

emailWindow.value = parsed.email || '';
messageWindow.value = parsed.message || '';

function send(event) {
  if (emailWindow.value.trim() === '' || messageWindow.value.trim() === '') {
    event.preventDefault();
    emailWindow.setAttribute('placeholder', 'Fill it!');
    messageWindow.setAttribute('placeholder', 'Fill it!');
  } else {
    const object = {
      email: emailWindow.value,
      message: messageWindow.value,
    };
    console.log(object);
    event.preventDefault();
    form.reset();
    localStorage.clear();
    emailWindow.removeAttribute('placeholder');
    messageWindow.removeAttribute('placeholder');
  }
}

form.addEventListener('submit', send);
