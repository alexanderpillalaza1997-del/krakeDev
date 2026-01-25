validarPlaca = function () {
    let placa = document.getElementById("txtPlaca").value; // Paso 1: Obtener valor
    let errores = validarEstructura(placa); // Paso 2: Validar

    if (errores == null) {
        document.getElementById("lblResultado").innerHTML = "ESTRUCTURA VÁLIDA"; //
        document.getElementById("lblErrores").innerHTML = "";
        
        // Si es válida, mostrar el día de Pico y Placa
        let dia = obtenerDiaPicoYPlaca(placa);
        document.getElementById("lblPicoYPlaca").innerHTML = "Día de restricción: " + dia;
    } else {
        document.getElementById("lblResultado").innerHTML = "ESTRUCTURA INCORRECTA"; //
        document.getElementById("lblErrores").innerHTML = errores;
        document.getElementById("lblPicoYPlaca").innerHTML = "";
    }
}

limpiar = function () {
    // 1. Borra el texto de la caja donde escribes la placa
    document.getElementById("txtPlaca").value = "";

    // 2. Borra los mensajes de validación y errores
    document.getElementById("lblResultado").innerHTML = "";
    document.getElementById("lblErrores").innerHTML = "";

    // 3. Borra la información de provincia, tipo y pico y placa
    document.getElementById("lblProvincia").innerHTML = "";
    document.getElementById("lblTipo").innerHTML = "";
    document.getElementById("lblPicoYPlaca").innerHTML = "";
    
    // Opcional: Si usaste clases de CSS para colores, también puedes resetearlas
    document.getElementById("lblErrores").className = ""; 
}