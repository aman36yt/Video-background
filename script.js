const btn = document.querySelector(".btn");
const video = document.querySelector(".back-vid");
const icon = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click",()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        video.play(); //INbuilt function to play video
    }else{
        btn.classList.add("pause");
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        video.pause(); //Inbuilt Function to Pause video
    }
});

window.addEventListener("load",()=>{
    preloader.style.zIndex = "-2";
});