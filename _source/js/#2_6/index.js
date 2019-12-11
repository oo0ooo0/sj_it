


const title = document.querySelector("h1");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(200, 73, 94)";

const superEventHandler = {};


//click


function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
    title.innerHTML = "Hi click!"
  } else {
    title.style.color = BASE_COLOR;
    title.innerHTML = "Hi click!!!"

  }
  console.log(title.style.color);
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
  //   title.addEventListener("mouseenter", handleClick);
}

init();






// handleResize
function handleResize() {
  title.innerHTML = "Hi handleResize!"
}

window.addEventListener("resize", handleResize);



//mouse over out
title.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "orange";
  title.innerHTML = "Hi mouse!"

});


title.addEventListener("mouseout", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "olive";
  title.innerHTML = "bye mouse!"

});



function handleOnline() {
  console.log("welcome back");
}
window.addEventListener("online", handleOnline);
