//Instrucciones para el control

alert('Utiliza las flechas para moverte por el agua...Solo te queda un anzuelo, así que elige sabiamente que deseas');
alert('Para lanzar la caña, debes pulsar doble click sobre el anzuelo. Cuando estes sobre aquello que deseas,gira la rueda del raton.');
alert('Estamos pescando y ya hemos cogido suficientes peces...A lo mejor aquello que brilla al fondo es importante...');

//Función para lanzar el anzuelo de forma random
function lanzarCaña() {
    valor2 = 140;
    valor = Math.floor(Math.random() * 1080)

    document.getElementById("anzuelo").style.marginLeft = valor + "px";
    document.getElementById("anzuelo").style.marginTop = valor2 + "px";
    var movimientoVaca = setInterval(myCallback, 1000);
    function myCallback() {

        //Coordenadas por medio del valor para conocer la posición anzuelo y la colisión con los peces
        if (anzuelo.style.marginTop <= 430 + "px") {
            if (valor > 150 && valor <= 200 && valor2 > 190 && valor2 <= 245) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 150 && valor < 225 && valor2 > 280 && valor2 <= 335) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 375 && valor < 450 && valor2 > 345 && valor2 < 410) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 350 && valor < 425 && valor2 > 255 && valor2 < 315) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 375 && valor < 475 && valor2 > 175 && valor2 < 250) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 500 && valor < 625 && valor2 > 230 && valor2 < 305) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 575 && valor < 650 && valor2 > 135 && valor2 < 180) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 625 && valor < 700 && valor2 > 300 && valor2 < 350) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 675 && valor < 750 && valor2 > 200 && valor2 < 250) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 750 && valor < 850 && valor2 > 270 && valor2 < 365) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 875 && valor < 950 && valor2 > 245 && valor2 < 300) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 925 && valor < 975 && valor2 > 160 && valor2 < 215) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 950 && valor < 1050 && valor2 > 315 && valor2 < 375) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }
            if (valor > 1025 && valor < 1075 && valor2 > 255 && valor2 < 305) {
                document.getElementById("anzuelo").remove();
                alert("Lo siento, tu último anzuelo se lo llevo un pez...Mejor quedate tumbado al sol...");
                window.location.href ='gameover.html';

            }


            console.log("El valor anzuelo es:" + valor + " y el otro valor: " + valor2);
            valor2 = valor2 + 5;
            document.getElementById("anzuelo").style.transitionDuration = "1s";
            document.getElementById("anzuelo").style.marginTop = valor2 + "px";
        }


    }
}
//Función para recoger el sedal después de llegar al objeto
function recogerSedal(){
if (valor> 105 && valor<= 140  && valor2> 405  && valor2<= 430 ) {
    $('#anzuelo').hide();
    document.getElementById("contenedor").style.background = "url('../images/botella.jpg')";
    document.getElementById("contenedor").style.backgroundSize = "1300px 500px";
    setTimeout(function(){ 
        //Función para cambiar el fondo y emitir el mensaje
    document.getElementById("mensajeCompilar").innerHTML = "´Protagonista: ¿Compilar?Debo aprender que es eso...";
},2500);
setTimeout(function(){ 
    document.getElementById("mensajeCompilar").innerHTML = "Protagonista: ¿Compilar?Debo aprender que es eso...<br>Y así es como nuestro heroe decidió emprender su carrera como programador en EUSA...";
},2500);
setTimeout(function(){  
    window.location.href ='nuevasprofesiones.html';
},9500);
}
}
//Función para mover el sedal por el agua
document.onkeydown = moverSedal;
function moverSedal(e) {

    e = e || window.event;




    if (e.keyCode == '37' && anzuelo.style.marginLeft > 0 + "px") {
        valor = -25 + valor;
        anzuelo.style.marginLeft = valor + "px";
        console.log(anzuelo.style.marginLeft);


        // Flecha Izquierdo
    }
    if (e.keyCode == '39' && valor < 1080) {
        valor = 25 + valor;
        anzuelo.style.marginLeft = valor + "px";


        // Flecha Derecho
    }
    if (e.keyCode == '40' && anzuelo.style.marginTop < 420 + "px") {
        valor2 = valor2 + 25;
        anzuelo.style.marginTop = valor2 + "px";
    }
    if (e.keyCode == '38' && anzuelo.style.marginTop > 140 + "px") {
        valor2 = -25 + valor2;
        anzuelo.style.marginTop = valor2 + "px";
    }




}

