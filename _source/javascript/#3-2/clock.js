const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  // console.log(`${hours}:${minutes}`);

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  // if (seconds > 10) {
  //   seconds = `0${seconds}`;
  // }
  // if (minutes > 10) {
  //   minutes = `0${seconds}`;
  // }
  // if (hours > 10) {
  //   hours = `0${seconds}`;
  // }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
