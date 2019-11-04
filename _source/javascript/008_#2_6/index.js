// 바닐라 자바스크립트 #2-6 노마드 코더 Nomad Coders


const title = document.querySelector("#title");

const BASE_CORLOR = "#00b894";

const OTHER_CORLOR = "#e17055";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor== BASE_CORLOR){
        currentColor = OTHER_CORLOR;
    }else{
        currentColor = BASE_CORLOR;
    }
}

function init(){
    title.style.color = BASE_CORLOR;
    title.addEventListener("click", handleClick);
}

init();