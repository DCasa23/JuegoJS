
function lanzarCaña() {
    valor2 = 140;
    valor = Math.floor(Math.random() * 1080)
    
    document.getElementById("anzuelo").style.marginLeft = valor + "px";
    document.getElementById("anzuelo").style.marginTop = valor2 + "px";
    var movimientoVaca = setInterval(myCallback, 1000);
    function myCallback() {

        if (anzuelo.style.marginTop<= 430 + "px") {
             if (valor> 150 && valor<= 200  && valor2> 190  && valor2<= 245 ) {
                 location.href = "http://www.abc.com";
         
             }
             if (valor> 150 && valor< 225  && valor2> 280  && valor2<= 335 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 375 && valor< 450  && valor2> 345  && valor2<410 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 350 && valor< 425  && valor2> 255  && valor2<315 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 375 && valor< 475  && valor2> 175  && valor2<250 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 500 && valor< 625  && valor2> 230  && valor2<305 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 575 && valor< 650  && valor2> 135  && valor2<180 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 625 && valor< 700  && valor2> 300  && valor2<350 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 675 && valor< 750  && valor2> 200  && valor2<250 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 750 && valor< 850  && valor2> 270  && valor2<365 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 875 && valor< 950  && valor2> 245  && valor2<300 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 925 && valor< 975  && valor2> 160  && valor2<215 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 950 && valor< 1050  && valor2> 315  && valor2<375 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 1025 && valor< 1075  && valor2> 255  && valor2<305 ) {
                location.href = "http://www.abc.com";
        
            }
            if (valor> 105 && valor<= 140  && valor2> 405  && valor2<= 430 ) {
                location.href = "http://www.lidl.com";
        
            }
             /*
             if (valor > 1294) {
                 location.href = "http://www.marca.com";
         
             }*/

            console.log("El valor Vaca es:" + valor + " y el valor real: " + valor2);
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
        if (e.keyCode == '39'&& valor < 1080 ) {
            valor = 25 + valor;
            anzuelo.style.marginLeft = valor + "px";


            // right arrow
        }
        if (e.keyCode == '40'&& anzuelo.style.marginTop < 420 + "px") {
            valor2 = valor2 + 25;
            anzuelo.style.marginTop = valor2 + "px";
        }
        if (e.keyCode == '38' && anzuelo.style.marginTop > 140 + "px") {
            valor2 = -25 + valor2;
            anzuelo.style.marginTop = valor2 + "px";
        }


        
    
}

/*
function showCoords(event) {
  var bounds = event.target.getBoundingClientRect();
  var x = event.clientX - bounds.left;
  var y = event.clientY - bounds.top;
    var coords = "X coords: " + x + ", Y coords: " + y;
    
    console.log(coords);
    
    if (event.clientX>=250&&event.clientX<=280){
        location.href = "http://www.google.com";
    }
    
  }
*/





/*
if(document.getElementById("player").style.marginLeft<document.getElementById("player").style.marginLeft-140){
    location.href ="http://www.google.com";
}
*/
