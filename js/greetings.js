const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  location.replace('main.html');
  greeting.innerText = `Hello ${username}`;
  greetings.innerText = `Hello ${username}`;
}

loginForm.addEventListener('submit', onLoginSubmit);
