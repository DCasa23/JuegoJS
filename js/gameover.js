    //Funciones para pulsar si o no en los botones
    function PulsarSi(){
          
          window.location.href = 'veterinaria.html';
    } 
    //JQuery para eliminar los botones
    function PulsarNo(){
        $('#si').hide(); 
        $('#no').hide(); 
        document.getElementById("contenedor").style.background="url('../images/cobarde.jpg')";
        document.getElementById("contenedor").style.backgroundSize = "1500px 800px";
        setTimeout(function(){ 
            window.close();
        },2500);
    }
      
