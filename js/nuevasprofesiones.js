//Función para dibujar cursor pensando
function mouseEspera(e){
    document.getElementById("titulo").style.cursor='wait';
    document.getElementById("mensajeDLC").style.cursor='wait';
    }
//Función para emitir mensaje
setTimeout(function(){
    
    document.getElementById("mensajeDLC").innerHTML = "Uuupss...Pero la pagina se encuentra en versión Beta<br>Si lo desea puede obtener nuestra versión de prueba por apenas 20€ y así saber la historia de nuestro protagonista en EUSA.";

},2500);
//Función para emitir mensaje
setTimeout(function(){
    
    document.getElementById("mensajeDLC").innerHTML = "Lo lamentamos...Pero la pagina se encuentra en versión Beta<br>Si lo desea puede obtener nuestra versión de prueba por apenas 20€ y así saber la historia en EUSA<br><br>¿Qué prefiere esperar?Bueno, pues le pasamos al último módulo del programa: La Entrevista Laboral";
    
    
},7500);
//Para enviar a la siguiente página
setTimeout(function(){
    
    window.location.href ='entrevista.html';
    
    
},17500);