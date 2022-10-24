function mover(){
    document.getElementById("fugitivo").style.margin = "50px";
    document.getElementById("fugitivo").innerHTML = "Uy,perdón, me he movido sin querer. Da sobre mi";
    document.getElementById("fugitivo").onmouseenter = mover2;
    function mover2(){
        document.getElementById("fugitivo").style.marginTop = "350px";
        document.getElementById("fugitivo").innerHTML = "Jope,fallo mio, no se volvera a repetir...";
        document.getElementById("fugitivo").onmouseenter = mover3;
        function mover3() {
            document.getElementById("fugitivo").style.marginLeft = "1550px";
            document.getElementById("fugitivo").innerHTML = "No, en serio, me estaré quieto hazlo una ultima vez";
            document.getElementById("fugitivo").onmouseenter = mover4;
            function mover4() {
                document.getElementById("fugitivo").style.margin = "650px 800px";
                document.getElementById("fugitivo").innerHTML = "Vale,mejor empezamos la historia, perdona...";
                document.getElementById("fugitivo").onmouseenter = vaca;
            }
            function vaca(){
                document.getElementById("fugitivo").style.margin = "10px 100px";
                var el = document.getElementById("fugitivo");
                el.innerHTML="<img src=https://img.freepik.com/fotos-premium/divertida-hermosa-vaca-amigable-marron-blanca-cadena-arnes-retrato-primer-plano-vaca-pasto-ucrania-primavera-2020_462005-457.jpg?w=2000\" width=\"1700px\" height=\"850px\">";
                document.getElementById("fugitivo").onmouseenter = vaca;
            }
        }
    }


}

