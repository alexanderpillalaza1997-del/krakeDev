ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena=function(cadena){
    let caracter;


    for(let posicion=0; posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter " + caracter+ " posicion "+ posicion);

    }

     for(let posicion=0; posicion<=cadena.length -1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER " + caracter+ " posicion "+ posicion);

    }
}

ejecutarPrueba2 = function() {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

invertirCadena = function(cadena) {
    let caracter;
    let resultadoInvertido = ""; 

    // Recorremos la cadena desde la última posición hacia la 0
    // La última posición siempre es length - 1
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        
        // Vamos acumulando los caracteres
        resultadoInvertido += caracter;
        
        // Opcional: ver el proceso en consola
        console.log("Caracter: " + caracter + " en posición: " + posicion);
    }

    // Mostramos el resultado en pantalla (asumiendo que tienes un elemento con este ID)
    mostrarTexto("lblResultado", resultadoInvertido);
    
}