document.querySelector(".click").addEventListener("click", nuit);

function nuit(){
    document.querySelector(".bout").classList.toggle("droite");
    document.querySelector(".journee").classList.toggle("tourne");
    document.body.classList.toggle("nuit");
}