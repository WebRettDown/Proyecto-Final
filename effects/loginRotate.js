var images = new Array(['../src/IMG/LoginStyle/playing.jpeg'], ['../src/IMG/LoginStyle/smiling.jpeg'], ['../src/IMG/LoginStyle/studying.jpeg'], ['../src/IMG/LoginStyle/watching.jpeg'])
const div = document.getElementById("background");

let count = 0;

function cambiarImagenDeFondo() {
    div.style.backgroundImage = `url(${images[count]})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    count = (count + 1) % images.length;
}

setInterval(cambiarImagenDeFondo, 2000);
