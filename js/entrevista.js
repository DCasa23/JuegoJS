function showCoords(event) {
    
    var x = event.clientX
    var y = event.clientY
      var coords = "X coords: " + x + ", Y coords: " + y;
      
      console.log(coords);
      
      if (event.clientX>=765&&event.clientX<=1093&&event.clientY>=463&&event.clientY<=527){
          location.href = "http://www.redbull.com";
      }
      if (event.clientX>=765&&event.clientX<=1093&&event.clientY>=529&&event.clientY<=579){
        location.href = "http://www.pokemon.com";
    }
    if (event.clientX>=1094&&event.clientX<=1400&&event.clientY>=463&&event.clientY<=527){
        location.href = "http://www.amazon.com";
    }
    if (event.clientX>=1094&&event.clientX<=1400&&event.clientY>=529&&event.clientY<=579){
        location.href = "http://www.google.com";
    }
      
    }