const from = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "crrentUser",
  SHOWING_ON = "showing";

function askForName() {}

function paintGreeting(text) {
  form.classlist.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const crrentUser = localStorage.getItem(USER_LS);

  if (crrentUser === null) {
    askForName();
  } else {
    paintGreeting(crrentUser);
  }
}

function init() {
  loadName();
}

init();
