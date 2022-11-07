alert('Encuentra el Logotipo de cada lenguaje de programación. Son 9 parejas.');

contador = 0;
cuadrado1 = false;
cuadrado2 = false;
cuadrado3 = false;
cuadrado4 = false;
cuadrado5 = false;
cuadrado6 = false;
cuadrado7 = false;
cuadrado8 = false;
cuadrado9 = false;
cuadrado10 = false;
cuadrado11 = false;
cuadrado12 = false;
cuadrado13 = false;
cuadrado14 = false;
cuadrado15 = false;
cuadrado16 = false;
cuadrado17 = false;
cuadrado18 = false;
function todosFalsos() {
    cuadrado1 = false;
    cuadrado2 = false;
    cuadrado3 = false;
    cuadrado4 = false;
    cuadrado5 = false;
    cuadrado6 = false;
    cuadrado7 = false;
    cuadrado8 = false;
    cuadrado9 = false;
    cuadrado10 = false;
    cuadrado11 = false;
    cuadrado12 = false;
    cuadrado13 = false;
    cuadrado14 = false;
    cuadrado15 = false;
    cuadrado16 = false;
    cuadrado17 = false;
    cuadrado18 = false;

}
descubierto = false;
pasos = false;
valor = 0;
valor2 = 0;
numero1 = "";


function sombracolor(x) {
    x.style.boxShadow = " 15px 15px 15px #48529944";
    x.style.backgroundSize = "125px 120px";

}
function fuerasombracolor(x) {
    x.style.boxShadow = "none";


}
function descubrir(x) {
    if (!descubierto) {
        numero1 = x;
        descubierto = true;
        if (x == document.getElementById("cuadrado1")) {

            console.log("Entra en el primero");
            document.getElementById("cuadrado1").style.background = "url('../images/Cuadrado/Java.png')";
            document.getElementById("cuadrado1").style.backgroundSize = "125px 120px";
            cuadrado1 = true;


        } else if (x == document.getElementById("cuadrado2")) {
            document.getElementById("cuadrado2").style.background = "url('../images/Cuadrado/Python.png')";
            document.getElementById("cuadrado2").style.backgroundSize = "125px 120px";
            cuadrado2 = true;
        }
        else if (x == document.getElementById("cuadrado3")) {
            document.getElementById("cuadrado3").style.background = "url('../images/Cuadrado/JSD.png')";
            document.getElementById("cuadrado3").style.backgroundSize = "125px 120px";
            cuadrado3 = true;
        }
        else if (x == document.getElementById("cuadrado4")) {
            document.getElementById("cuadrado4").style.background = "url('../images/Cuadrado/PythonD.png')";
            document.getElementById("cuadrado4").style.backgroundSize = "125px 120px";
            cuadrado4 = true;
        }
        else if (x == document.getElementById("cuadrado5")) {
            document.getElementById("cuadrado5").style.background = "url('../images/Cuadrado/GoD.png')";
            document.getElementById("cuadrado5").style.backgroundSize = "125px 120px";
            cuadrado5 = true;
        }
        else if (x == document.getElementById("cuadrado6")) {
            document.getElementById("cuadrado6").style.background = "url('../images/Cuadrado/php.png')";
            document.getElementById("cuadrado6").style.backgroundSize = "125px 120px";
            cuadrado6 = true;
        }
        else if (x == document.getElementById("cuadrado7")) {
            document.getElementById("cuadrado7").style.background = "url('../images/Cuadrado/phpD.png')";
            document.getElementById("cuadrado7").style.backgroundSize = "125px 120px";
            cuadrado7 = true;
        }
        else if (x == document.getElementById("cuadrado8")) {
            document.getElementById("cuadrado8").style.background = "url('../images/Cuadrado/C++.png')";
            document.getElementById("cuadrado8").style.backgroundSize = "125px 120px";
            cuadrado8 = true;
        }
        else if (x == document.getElementById("cuadrado9")) {
            document.getElementById("cuadrado9").style.background = "url('../images/Cuadrado/CSharp.png')";
            document.getElementById("cuadrado9").style.backgroundSize = "125px 120px";
            cuadrado9 = true;
        }
        else if (x == document.getElementById("cuadrado10")) {
            document.getElementById("cuadrado10").style.background = "url('../images/Cuadrado/SwiftD.png')";
            document.getElementById("cuadrado10").style.backgroundSize = "125px 120px";
            cuadrado10 = true;
        }
        else if (x == document.getElementById("cuadrado11")) {
            document.getElementById("cuadrado11").style.background = "url('../images/Cuadrado/Swift.png')";
            document.getElementById("cuadrado11").style.backgroundSize = "125px 120px";
            cuadrado11 = true;
        }
        else if (x == document.getElementById("cuadrado12")) {
            document.getElementById("cuadrado12").style.background = "url('../images/Cuadrado/C++D.png')";
            document.getElementById("cuadrado12").style.backgroundSize = "125px 120px";
            cuadrado12 = true;
        }
        else if (x == document.getElementById("cuadrado13")) {
            document.getElementById("cuadrado13").style.background = "url('../images/Cuadrado/JS.png')";
            document.getElementById("cuadrado13").style.backgroundSize = "125px 120px";
            cuadrado13 = true;
        }
        else if (x == document.getElementById("cuadrado14")) {
            document.getElementById("cuadrado14").style.background = "url('../images/Cuadrado/RubyD.png')";
            document.getElementById("cuadrado14").style.backgroundSize = "125px 120px";
            cuadrado14 = true;
        }
        else if (x == document.getElementById("cuadrado15")) {
            document.getElementById("cuadrado15").style.background = "url('../images/Cuadrado/Go.png')";
            document.getElementById("cuadrado15").style.backgroundSize = "125px 120px";
            cuadrado15 = true;
        }
        else if (x == document.getElementById("cuadrado16")) {
            document.getElementById("cuadrado16").style.background = "url('../images/Cuadrado/Ruby.png')";
            document.getElementById("cuadrado16").style.backgroundSize = "125px 120px";
            cuadrado16 = true;
        }
        else if (x == document.getElementById("cuadrado17")) {
            document.getElementById("cuadrado17").style.background = "url('../images/Cuadrado/CSharpD.png')";
            document.getElementById("cuadrado17").style.backgroundSize = "125px 120px";
            cuadrado17 = true;
        }
        else if (x == document.getElementById("cuadrado18")) {
            document.getElementById("cuadrado18").style.background = "url('../images/Cuadrado/JavaD.png')";
            document.getElementById("cuadrado18").style.backgroundSize = "125px 120px";
            cuadrado18 = true;
        }
    } else {
        console.log(numero1);
        console.log("Entra en el segundo");
        descubierto = false;


        if (x == document.getElementById("cuadrado1") && cuadrado18 == true) {
            document.getElementById("cuadrado1").style.background = "url('../images/Cuadrado/Java.png')";
            document.getElementById("cuadrado1").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado1").style.pointerEvents = "none";
            document.getElementById("cuadrado18").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado1") && cuadrado18 == false) {
            document.getElementById("cuadrado1").style.background = "url('../images/Cuadrado/Java.png')";
            document.getElementById("cuadrado1").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado1").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado1").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        } else if (x == document.getElementById("cuadrado18") && cuadrado1 == true) {
            document.getElementById("cuadrado18").style.background = "url('../images/Cuadrado/JavaD.png')";
            document.getElementById("cuadrado18").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado1").style.pointerEvents = "none";
            document.getElementById("cuadrado18").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado18") && cuadrado1 == false) {
            document.getElementById("cuadrado18").style.background = "url('../images/Cuadrado/JavaD.png')";
            document.getElementById("cuadrado18").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado18").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado18").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        }
        else if (x == document.getElementById("cuadrado2") && cuadrado4 == true) {
            document.getElementById("cuadrado2").style.background = "url('../images/Cuadrado/Python.png')";
            document.getElementById("cuadrado2").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado2").style.pointerEvents = "none";
            document.getElementById("cuadrado4").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado2") && cuadrado4 == false) {
            document.getElementById("cuadrado2").style.background = "url('../images/Cuadrado/Python.png')";
            document.getElementById("cuadrado2").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado2").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado2").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        } else if (x == document.getElementById("cuadrado4") && cuadrado2 == true) {
            document.getElementById("cuadrado4").style.background = "url('../images/Cuadrado/PythonD.png')";
            document.getElementById("cuadrado4").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado2").style.pointerEvents = "none";
            document.getElementById("cuadrado4").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado4") && cuadrado2 == false) {
            document.getElementById("cuadrado4").style.background = "url('../images/Cuadrado/PythonD.png')";
            document.getElementById("cuadrado4").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado4").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado4").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        }
        else if (x == document.getElementById("cuadrado3") && cuadrado13 == true) {
            document.getElementById("cuadrado3").style.background = "url('../images/Cuadrado/JSD.png')";
            document.getElementById("cuadrado3").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado3").style.pointerEvents = "none";
            document.getElementById("cuadrado13").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado3") && cuadrado13 == false) {
            document.getElementById("cuadrado3").style.background = "url('../images/Cuadrado/JSD.png')";
            document.getElementById("cuadrado3").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado3").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado3").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        } else if (x == document.getElementById("cuadrado13") && cuadrado3 == true) {
            document.getElementById("cuadrado13").style.background = "url('../images/Cuadrado/JS.png')";
            document.getElementById("cuadrado13").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado3").style.pointerEvents = "none";
            document.getElementById("cuadrado13").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado13") && cuadrado3 == false) {
            document.getElementById("cuadrado13").style.background = "url('../images/Cuadrado/JS.png')";
            document.getElementById("cuadrado13").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado13").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado13").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        }
        else if (x == document.getElementById("cuadrado5") && cuadrado15 == true) {
            document.getElementById("cuadrado5").style.background = "url('../images/Cuadrado/GoD.png')";
            document.getElementById("cuadrado5").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado5").style.pointerEvents = "none";
            document.getElementById("cuadrado15").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado5") && cuadrado15 == false) {
            document.getElementById("cuadrado5").style.background = "url('../images/Cuadrado/GoD.png')";
            document.getElementById("cuadrado5").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado5").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado5").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        } else if (x == document.getElementById("cuadrado15") && cuadrado5 == true) {
            document.getElementById("cuadrado15").style.background = "url('../images/Cuadrado/Go.png')";
            document.getElementById("cuadrado15").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado5").style.pointerEvents = "none";
            document.getElementById("cuadrado15").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado15") && cuadrado5 == false) {
            document.getElementById("cuadrado15").style.background = "url('../images/Cuadrado/Go.png')";
            document.getElementById("cuadrado15").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado15").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado15").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        }
        else if (x == document.getElementById("cuadrado6") && cuadrado7 == true) {
            document.getElementById("cuadrado6").style.background = "url('../images/Cuadrado/php.png')";
            document.getElementById("cuadrado6").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado6").style.pointerEvents = "none";
            document.getElementById("cuadrado7").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado6") && cuadrado7 == false) {
            document.getElementById("cuadrado6").style.background = "url('../images/Cuadrado/php.png')";
            document.getElementById("cuadrado6").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado6").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado6").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        } else if (x == document.getElementById("cuadrado7") && cuadrado6 == true) {
            document.getElementById("cuadrado7").style.background = "url('../images/Cuadrado/phpD.png')";
            document.getElementById("cuadrado7").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado6").style.pointerEvents = "none";
            document.getElementById("cuadrado7").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado7") && cuadrado6 == false) {
            document.getElementById("cuadrado7").style.background = "url('../images/Cuadrado/phpD.png')";
            document.getElementById("cuadrado7").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado7").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado7").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        }
        else if (x == document.getElementById("cuadrado8") && cuadrado12 == true) {
            document.getElementById("cuadrado8").style.background = "url('../images/Cuadrado/C++.png')";
            document.getElementById("cuadrado8").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado8").style.pointerEvents = "none";
            document.getElementById("cuadrado12").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado8") && cuadrado12 == false) {
            document.getElementById("cuadrado8").style.background = "url('../images/Cuadrado/C++.png')";
            document.getElementById("cuadrado8").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado8").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado8").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        } else if (x == document.getElementById("cuadrado12") && cuadrado8 == true) {
            document.getElementById("cuadrado12").style.background = "url('../images/Cuadrado/C++D.png')";
            document.getElementById("cuadrado12").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado8").style.pointerEvents = "none";
            document.getElementById("cuadrado12").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado12") && cuadrado8 == false) {
            document.getElementById("cuadrado12").style.background = "url('../images/Cuadrado/C++D.png')";
            document.getElementById("cuadrado12").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado12").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado12").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        }
        else if (x == document.getElementById("cuadrado9") && cuadrado17 == true) {
            document.getElementById("cuadrado9").style.background = "url('../images/Cuadrado/CSharp.png')";
            document.getElementById("cuadrado9").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado9").style.pointerEvents = "none";
            document.getElementById("cuadrado17").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado9") && cuadrado17 == false) {
            document.getElementById("cuadrado9").style.background = "url('../images/Cuadrado/CSharp.png')";
            document.getElementById("cuadrado9").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado9").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado9").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        } else if (x == document.getElementById("cuadrado17") && cuadrado9 == true) {
            document.getElementById("cuadrado17").style.background = "url('../images/Cuadrado/CSharpD.png')";
            document.getElementById("cuadrado17").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado9").style.pointerEvents = "none";
            document.getElementById("cuadrado17").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado17") && cuadrado9 == false) {
            document.getElementById("cuadrado17").style.background = "url('../images/Cuadrado/CSharpD.png')";
            document.getElementById("cuadrado17").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado17").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado17").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        }
        else if (x == document.getElementById("cuadrado10") && cuadrado11 == true) {
            document.getElementById("cuadrado10").style.background = "url('../images/Cuadrado/SwiftD.png')";
            document.getElementById("cuadrado10").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado10").style.pointerEvents = "none";
            document.getElementById("cuadrado11").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado10") && cuadrado11 == false) {
            document.getElementById("cuadrado10").style.background = "url('../images/Cuadrado/SwiftD.png')";
            document.getElementById("cuadrado10").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado10").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado10").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        } else if (x == document.getElementById("cuadrado11") && cuadrado10 == true) {
            document.getElementById("cuadrado11").style.background = "url('../images/Cuadrado/Swift.png')";
            document.getElementById("cuadrado11").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado10").style.pointerEvents = "none";
            document.getElementById("cuadrado11").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado11") && cuadrado10 == false) {
            document.getElementById("cuadrado11").style.background = "url('../images/Cuadrado/Swift.png')";
            document.getElementById("cuadrado11").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado11").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado11").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        }
        else if (x == document.getElementById("cuadrado14") && cuadrado16 == true) {
            document.getElementById("cuadrado14").style.background = "url('../images/Cuadrado/RubyD.png')";
            document.getElementById("cuadrado14").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado14").style.pointerEvents = "none";
            document.getElementById("cuadrado16").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado14") && cuadrado16 == false) {
            document.getElementById("cuadrado14").style.background = "url('../images/Cuadrado/RubyD.png')";
            document.getElementById("cuadrado14").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado14").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado14").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        } else if (x == document.getElementById("cuadrado16") && cuadrado14 == true) {
            document.getElementById("cuadrado16").style.background = "url('../images/Cuadrado/Ruby.png')";
            document.getElementById("cuadrado16").style.backgroundSize = "125px 120px";
            document.getElementById("cuadrado14").style.pointerEvents = "none";
            document.getElementById("cuadrado16").style.pointerEvents = "none";
            contador = contador + 2;
        } else if (x == document.getElementById("cuadrado16") && cuadrado14 == false) {
            document.getElementById("cuadrado16").style.background = "url('../images/Cuadrado/Ruby.png')";
            document.getElementById("cuadrado16").style.backgroundSize = "125px 120px";
            setTimeout(function () {
                document.getElementById("cuadrado16").style.background = "url('../images/Cuadrado/Modelo.png')";
                document.getElementById("cuadrado16").style.backgroundSize = "125px 120px";
                numero1.style.background = "url('../images/Cuadrado/Modelo.png')";
                numero1.style.backgroundSize = "125px 120px";
                todosFalsos();
            }, 500);
        }

    }
    console.log(contador);
    document.getElementById("contador").innerHTML = "Puntos obtenidos: " + contador;
    
        if (contador == 18) {
            setTimeout(function () {
            window.location.href = 'trabajo.html';
        }, 1500);
        }
    
}



