function aceptarTrabajo(){
    document.getElementById("contenedor").style.background="url('../images/vencedor.jfif')";
    document.getElementById("contenedor").style.backgroundSize = "1500px 800px";
    const audio = new Audio("../others/LongRoad.mp3");
    audio.play();
    setTimeout(function(){ 
        document.getElementById("mensajeFinal").innerHTML = "Bienvenido al primer día de tu nueva vida.";
    },5000);
    
}