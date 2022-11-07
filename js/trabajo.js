function aceptarTrabajo(){
    document.getElementById("contenedor").style.background="url('../images/vencedor.jpeg')";
    document.getElementById("contenedor").style.backgroundSize = "1500px 800px";
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src = "https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3";
    audio.play();
    document.body.appendChild(audio);
}