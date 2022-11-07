//Instrucciones para saber como jugar.
alert('Utiliza las teclas izquierda y derecha para moverte...Corre por tu vida');
alert('No tendrás mas que 3 segundos antes de empezar a correr');
alert('Si te digo Run...RUN!!')
pasos = false;
valor = 0;
valor2 = 0;
document.onkeydown = correr;
//Función para correr pulsando izquierda y derecha
function correr(e) {

    
    e = e || window.event;




    if (e.keyCode == '37') {
        valor = valor + 7;
        pasos = true;


        // Flecha Izquierda
    }
    if (e.keyCode == '39' && pasos == true) {
        valor = valor + 15;
        pasos = false;


        // Flecha Derecha
    }
    

    //Permite regular la velocidad de transición del jugador
    document.getElementById("player").style.transitionDuration = "500ms";
    document.getElementById("player").style.marginLeft = valor + "px";
    
}
//Función que permite comprobar el espacio entre el jugador y el enemigo(la fisica de colisión)
setTimeout(function(){ 
	
    if(valor-100<valor2){
        console.log('La localizacion es:'+player.style.marginLeft)
        
    }
    
var movimientoVaca = setInterval(myCallback, 1000);

function myCallback() {
    if(valor-60<valor2){
        window.location.href ='gameover.html';
        
    }
    
    if(valor>=1110){
        console.log(valor);
        window.location.href ='doctor.html';
        
    }
    
    console.log("El valor Jugador es:"+player.style.marginLeft+"y el valor real: "+valor)
    console.log("El valor Vaca es:"+bigboss.style.marginLeft+"y el valor real: "+valor2);
    valor2 = valor2 + 120;
    document.getElementById("bigboss").style.transitionDuration = "2s";
    document.getElementById("bigboss").style.marginLeft = valor2 + "px";
}

}, 3000); 

