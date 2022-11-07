function aceptarTrabajo(){
    document.getElementById("contenedor").style.background="url('../images/vencedor.jpeg')";
    document.getElementById("contenedor").style.backgroundSize = "1500px 800px";
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src = "https://github.com/DCasa23/JuegoJS/blob/main/others/LongRoad.mp3";
    audio.play();
    document.body.appendChild(audio);
}