function elegirLucha() {
   
    
        document.getElementById("mensajeAviso").innerHTML = "Veo que tiene un CV impresionante...<br>Ha obtenido muy buenas notas en su centro EUSA y tiene conocimientos en Inglés.<br>No obstante...Dejenos hacerle una ultima prueba de conocimientos en lenguaje de programación.";
        setTimeout(function(){ 
            window.location.href ='memoria.html';
        },11000);
        
}
function elegirPokemon() {
    
        document.getElementById("mensajeAviso").innerHTML = "¿Pokemon?¿Qué te hace pensar esa tontería?<br>Venga,centrate y tomatelo en serio.";
        setTimeout(function(){ 
            window.location.href ='entrevista.html';
        },4000);
    }
    function elegirMochila() {
    
        class Comida {
            constructor(tipo, caducidad,tieneCafeina, energia) {
                this.tipo = tipo;
                this.tieneCafeina=tieneCafeina;
                this.caducidad = caducidad;
                this.energia = energia;
            }
            estaCaducado() {
                let date = new Date();
                resultado = "date.getFullYear() - this.caducidad";
                if (date.getFullYear() - this.caducidad < 0) { resultado = "Esta Caducado" } else { resultado = "Esta Perfecto" }
                return resultado;
            }

        }
        let Tab = new Comida("Refresco",2009,false,-20);
        let Cafe = new Comida("Bebida Caliente",2022,true,20);
        let Chocobom= new Comida("Dulce",2023,false,20);
        let Manzana = new Comida("Fruta",2022,true,100);
        document.getElementById("inventario").style.width ="44%";
        document.getElementById("inventario").style.height ="22%";
        document.getElementById("inventario").innerHTML = "<br><p>Tab: "+Tab.energia+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Café: "+Cafe.energia+"</p><p>Manzana: "+Manzana.energia+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chocobom: "+Chocobom.energia+"</p>";
    }
    
    function elegirHuir() {
        document.getElementById("mensajeAviso").innerHTML = "Centrate! No es momento de huir.Tú puedes!!";
        setTimeout(function(){ 
            window.location.href ='entrevista.html';
        },3000);
    }


function mensajeNegativa(){
    document.getElementById("mensajeAviso").innerHTML = "No creo que el momento de comer sea en medio de una entrevista. Se profesional<br> Mejor enseñale el CV.";
    setTimeout(function(){ 
        window.location.href ='entrevista.html';
    },4000);
}
