// const clockContainer = document.querySelector(".js-clock");
// const clockTitle = clockContainer.querySelector("h1");
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  console.log(hours + ":" + minutes);
  clockTitle.innerText = `${hours}:${minutes}`;
}
function init() {
  getTime();
}

init();
