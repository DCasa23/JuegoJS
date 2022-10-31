pasos=false;
valor=0;
function mover(){
    document.getElementById("fugitivo").style.margin = "50px";
    document.getElementById("fugitivo").innerHTML = "Uy,perdón, me he movido sin querer. Da sobre mi";
    document.getElementById("fugitivo").onmouseenter = mover2;
    function mover2(){
        document.getElementById("fugitivo").style.marginTop = "350px";
        document.getElementById("fugitivo").innerHTML = "Jope,fallo mio, no se volvera a repetir...";
        document.getElementById("fugitivo").onmouseenter = mover3;
        function mover3() {
            document.getElementById("fugitivo").style.marginLeft = "1150px";
            document.getElementById("fugitivo").innerHTML = "No, en serio, me estaré quieto hazlo una ultima vez";
            document.getElementById("fugitivo").onmouseenter = mover4;
            function mover4() {
                document.getElementById("fugitivo").style.margin = "250px 400px";
                document.getElementById("fugitivo").innerHTML = "Vale,mejor empezamos la historia, perdona...";
                document.getElementById("fugitivo").onmouseenter = vaca;
            }
            function vaca(){
                document.getElementById("fugitivo").style.margin = "10px 100px";
                var el = document.getElementById("fugitivo");
                el.innerHTML="<img src=https://img.freepik.com/fotos-premium/divertida-hermosa-vaca-amigable-marron-blanca-cadena-arnes-retrato-primer-plano-vaca-pasto-ucrania-primavera-2020_462005-457.jpg?w=2000\" width=\"1300px\" height=\"600px\">";
                document.getElementById("fugitivo").onmouseenter = vaca;
            }
        }
    }


}

    document.onkeydown = correr;
    
    function correr(e) {
       
    
    e = e || window.event;
    
    
    
   
    if (e.keyCode == '37') {
        valor=valor+20;
        pasos=true;
        
        
        // up arrow
    }
    if (e.keyCode == '39'&& pasos==true) {
        valor=valor+70;
        pasos=false;
        
        
        // down arrow
    }
    if (e.keyCode == '40') {
       // left arrow
    }
    if (e.keyCode == '38') {
       // right arrow
    }


   
document.getElementById("player").style.marginLeft=valor+"px";
}
    


