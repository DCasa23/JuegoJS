
function lanzarCaña() {
    valor2 = 140;
    valor = Math.floor(Math.random() * 1200)
    document.getElementById("anzuelo").style.marginLeft = valor + "px";
    document.getElementById("anzuelo").style.marginTop = valor2 + "px";
    var movimientoVaca = setInterval(myCallback, 1000);
    function myCallback() {

        if (anzuelo.style.marginTop < 600 + "px") {
            /* if (valor - 100 < valor2) {
                 location.href = "http://www.google.com";
         
             }
             if (valor > 1294) {
                 location.href = "http://www.marca.com";
         
             }*/

            console.log("El valor Vaca es:" + anzuelo.style.marginLeft + "y el valor real: " + valor2);
            valor2 = valor2 + 5;
            document.getElementById("anzuelo").style.transitionDuration = "1s";
            document.getElementById("anzuelo").style.marginTop = valor2 + "px";
        }
    }

}
document.onkeydown = correr;
function correr(e) {

    e = e || window.event;

    


        if (e.keyCode == '37'&& anzuelo.style.marginLeft > 0 + "px") {
            valor = -25 + valor;
            anzuelo.style.marginLeft = valor + "px";
            console.log(anzuelo.style.marginLeft);


            // left arrow
        }
        if (e.keyCode == '39'&& valor < 1200) {
            valor = 25 + valor;
            anzuelo.style.marginLeft = valor + "px";


            // right arrow
        }
        if (e.keyCode == '40'&& anzuelo.style.marginTop < 600 + "px") {
            valor2 = valor2 + 25;
            anzuelo.style.marginTop = valor2 + "px";
        }
        if (e.keyCode == '38' && anzuelo.style.marginTop > 140 + "px") {
            valor2 = -25 + valor2;
            anzuelo.style.marginTop = valor2 + "px";
        }


        
    
}


function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
    if (event.clientX>=250&&event.clientX<=280){
        location.href = "http://www.google.com";
    }
  }






/*
if(document.getElementById("player").style.marginLeft<document.getElementById("player").style.marginLeft-140){
    location.href ="http://www.google.com";
}
*/
