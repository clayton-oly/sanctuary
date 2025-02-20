window.addEventListener("load", () => {
    let video = window.document.querySelector("#video");
    video.play();
    video.loop = true;
});

//temas
const btnClaro = document.getElementById("lightMode");
const btnEscuro = document.getElementById("darkMode");
const body = document.body;
body.classList.add("lightMode");
btnClaro.style.display = "inline";
btnEscuro.style.display = "none";

btnClaro.addEventListener('click', () => {
    body.classList.remove("lightMode");
    body.classList.add("darkMode");
    btnClaro.style.display = "none";
    btnEscuro.style.display = "inline";
});

btnEscuro.addEventListener('click', () => {
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
    btnEscuro.style.display = "none";
    btnClaro.style.display = "inline";
});

