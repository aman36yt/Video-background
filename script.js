const btn = document.querySelector(".btn");
const video = document.querySelector(".back-vid");
const icon = document.querySelector(".fa");

btn.addEventListener("click",()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        video.play();
    }else{
        btn.classList.add("pause");
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        video.pause();
    }
});