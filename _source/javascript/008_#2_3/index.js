// 008_Events and event handlers 
// 바닐라 자바스크립트 #2-3 Modifying the DOM with JS 노마드 코더 Nomad Coders

const title = document.querySelector("#title");
    
function handleClick() {
title.style.color = "red";
}

title.addEventListener("click", handleClick);
