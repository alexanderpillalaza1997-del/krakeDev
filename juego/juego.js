// Variables globales para el puntaje
let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function(seleccionado) {
    // 1. Invoca generarElemento (PC)
    let eleccionPC = generarElemento();
    
    // 2. Muestra la imagen seleccionada por el computador
    let rutaPC = generarRuta(eleccionPC);
    document.getElementById("imgComputador").src = rutaPC;

    // 3. Determinar ganador e informar
    let resultado = determinarGanador(seleccionado, eleccionPC);
    let lblResultado = document.getElementById("lblResultado");

    if (resultado == 0) {
        lblResultado.innerText = "EMPATE";
    } else if (resultado == 1) {
        lblResultado.innerText = "GANASTE LA PARTIDA!!";
        puntosUsuario += 1;
    } else {
        lblResultado.innerText = "PERDISTE LA PARTIDA!!";
        puntosComputador += 1;
    }

    // Actualizar puntajes en pantalla
    actualizarPuntaje();
    // Validar si alguien llegó a 5
    validarGanadorFinal();
}

actualizarPuntaje = function() {
    document.getElementById("puntosUsuario").innerText = puntosUsuario;
    document.getElementById("puntosComputador").innerText = puntosComputador;
}

validarGanadorFinal = function() {
    if (puntosUsuario == 5) {
        alert("HAS GANADO EL JUEGO");
        deshabilitarJuego();
    } else if (puntosComputador == 5) {
        alert("EL COMPUTADOR TE HA VENCIDO");
        deshabilitarJuego();
    }
}

// Función para el botón NUEVA PARTIDA
limpiar = function() {
    puntosUsuario = 0;
    puntosComputador = 0;
    document.getElementById("imgComputador").src = ""; // O una imagen por defecto
    document.getElementById("lblResultado").innerText = "";
    actualizarPuntaje();
    
    // Habilitar clics en imágenes si se deshabilitaron
    document.getElementById("zona-imagenes").style.pointerEvents = "auto";
}

deshabilitarJuego = function() {
    document.getElementById("zona-imagenes").style.pointerEvents = "none";
}