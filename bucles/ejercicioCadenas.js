ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function (cadena) {
    let caracter;


    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);

    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);

    }
}

ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

invertirCadena = function (cadena) {
    let letra;
    let invertida = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        letra = cadena.charAt(i);
        invertida = invertida + letra;
    }
    return invertida;
}

buscarLetra = function () {
    let letraIterada;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if (letraIterada == letra) {
            existeLetra == true;
        }

    }
    if (existeLetra == true) {
        return true;

    } else {
        return false;
    }

}

contraMayusculas = function () {
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esMayuscula(letra)) {
            contadorMayusculas++;

        }

    }
    console.log(contadorMayusculas);


}