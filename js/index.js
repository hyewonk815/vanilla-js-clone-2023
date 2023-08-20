const logOut = document.querySelector('#logOut');
function handleLogOut() {
  window.localStorage.removeItem('userName');
  location.replace('index.html');
}

logOut.addEventListener('click', handleLogOut);

// localStorage.getItem("userName");
const savedUsername = localStorage.getItem('username');
if (savedUsername !== null) {
  greeting.innerText = `Hello ${savedUsername}`;
  greetings.innerText = `Hello ${savedUsername}`;
}
