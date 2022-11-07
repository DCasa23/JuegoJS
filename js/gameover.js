function showCoords(event) {
    var bounds = event.target.getBoundingClientRect();
    var x = event.clientX - bounds.left;
    var y = event.clientY - bounds.top;
      var coords = "X coords: " + x + ", Y coords: " + y;
      
      console.log(coords);
      
      if (event.clientX>=555 && event.clientX<=689 && event.clientY>=578 && event.clientY<=629){
          window.location.href = 'veterinaria.html';
      }
      if (event.clientX>=839 && event.clientX<=900 && event.clientY>=578 && event.clientY<=629){
        document.getElementById("contenedor").style.background="url('../images/cobarde.jpg')";
        document.getElementById("contenedor").style.backgroundSize = "1500px 800px";
        setTimeout(function(){ 
            window.close();
        },2500);
    }
      
    }