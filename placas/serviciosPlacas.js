validarEstructura = function (placa) {
    let mensajeError = "";

    if (placa.length < 7 || placa.length > 8) {
        mensajeError = mensajeError + "La placa debe tener 7 u 8 caracteres. ";
    }

    if (esMayuscula(placa.charAt(0)) == false) { mensajeError = mensajeError + "1er carácter debe ser Mayúscula. "; }
    if (esMayuscula(placa.charAt(1)) == false) { mensajeError = mensajeError + "2do carácter debe ser Mayúscula. "; }
    if (esMayuscula(placa.charAt(2)) == false) { mensajeError = mensajeError + "3er carácter debe ser Mayúscula. "; }

    if (esGuion(placa.charAt(3)) == false) { mensajeError = mensajeError + "El 4to carácter debe ser un guion. "; }

    if (esDigito(placa.charAt(4)) == false) { mensajeError = mensajeError + "5to carácter debe ser dígito. "; }
    if (esDigito(placa.charAt(5)) == false) { mensajeError = mensajeError + "6to carácter debe ser dígito. "; }
    if (esDigito(placa.charAt(6)) == false) { mensajeError = mensajeError + "7mo carácter debe ser dígito. "; }

    if (placa.length == 8) {
        if (esDigito(placa.charAt(7)) == false) {
            mensajeError = mensajeError + "8vo carácter debe ser dígito. ";
        }
    }

    if (mensajeError == "") {
        return null;
    } else {
        return mensajeError;
    }
}

obtenerProvincia = function (placa) {
    let primeraLetra = placa.charAt(0);
    let provincia = null;

    if (primeraLetra == "A") { provincia = "Azuay"; }
    else if (primeraLetra == "B") { provincia = "Bolívar"; }
    else if (primeraLetra == "U") { provincia = "Cañar"; }
    else if (primeraLetra == "C") { provincia = "Carchi"; }
    else if (primeraLetra == "X") { provincia = "Cotopaxi"; }
    else if (primeraLetra == "H") { provincia = "Chimborazo"; }
    else if (primeraLetra == "O") { provincia = "El Oro"; }
    else if (primeraLetra == "E") { provincia = "Esmeraldas"; }
    else if (primeraLetra == "W") { provincia = "Galápagos"; }
    else if (primeraLetra == "G") { provincia = "Guayas"; }
    else if (primeraLetra == "I") { provincia = "Imbabura"; }
    else if (primeraLetra == "L") { provincia = "Loja"; }
    else if (primeraLetra == "R") { provincia = "Los Ríos"; }
    else if (primeraLetra == "M") { provincia = "Manabí"; }
    else if (primeraLetra == "V") { provincia = "Morona Santiago"; }
    else if (primeraLetra == "N") { provincia = "Napo"; }
    else if (primeraLetra == "S") { provincia = "Pastaza"; }
    else if (primeraLetra == "P") { provincia = "Pichincha"; }
    else if (primeraLetra == "Y") { provincia = "Santa Elena"; }
    else if (primeraLetra == "J") { provincia = "Santo Domingo de los Tsáchilas"; }
    else if (primeraLetra == "K") { provincia = "Sucumbíos"; }
    else if (primeraLetra == "T") { provincia = "Tungurahua"; }
    else if (primeraLetra == "Z") { provincia = "Zamora Chinchipe"; }
    else if (primeraLetra == "Q") { provincia = "Orellana"; }

    return provincia;
}

obtenerTipoVehiculo = function (placa) {
    let segundaLetra = placa.charAt(1);
    let tipo = null;

    if (segundaLetra == "A" || segundaLetra == "Z") {
        tipo = "Vehículo Comercial";
    } else if (segundaLetra == "E") {
        tipo = "Vehículo Gubernamental";
    } else if (segundaLetra == "X") {
        tipo = "Vehículo Oficial";
    } else if (segundaLetra == "M") {
        tipo = "Vehículo Municipal";
    } else {
        tipo = "Vehículo Particular";
    }
    return tipo;
}

obtenerDiaPicoYPlaca = function (placa) {
    let ultimoPosicion = placa.length - 1;
    let ultimo = placa.charAt(ultimoPosicion);

    if (ultimo == "1" || ultimo == "2") { return "Lunes"; }
    if (ultimo == "3" || ultimo == "4") { return "Martes"; }
    if (ultimo == "5" || ultimo == "6") { return "Miércoles"; }
    if (ultimo == "7" || ultimo == "8") { return "Jueves"; }
    if (ultimo == "9" || ultimo == "0") { return "Viernes"; }
    return "Libre";
}