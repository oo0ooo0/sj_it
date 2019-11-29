// // #2-4 Events and event handlers

// //first mission
// const title = document.querySelector("#title");
// function handleResize() {
//     console.log("i have been resized");
// }

// window.addEventListener("resize", handleResize);




//2 mission
const title = document.querySelector("#title");
    
function handleClick() {
title.style.color = "red";
}

title.addEventListener("click", handleClick);
