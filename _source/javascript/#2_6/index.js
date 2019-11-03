const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(70, 73, 94)";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
  console.log(title.style.color);
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
  //   title.addEventListener("mouseenter", handleClick);
}

init();

// wifi handeler
function handleOffline() {
  console.log("lalalalal");
}

function handleOnline() {
  console.log("welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
