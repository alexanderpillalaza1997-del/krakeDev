
//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

// PASO 0: Validar si es mayúscula usando ASCII
esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}


guardarPalabra = function () {
    let input = document.getElementById("txtSecreta");
    let valor = input.value;
    let esValida = true;

    if (valor.length !== 5) {
        esValida = false;
    } else {
        for (let i = 0; i < valor.length; i++) {
            if (!esMayuscula(valor.charAt(i))) {
                esValida = false;
                break;
            
            }
        }
    }

    if (esValida) {
        palabraSecreta = valor;
        console.log("Palabra guardada: " + palabraSecreta);
    } else {
        alert("Debe ingresar una palabra de 5 letras mayúsculas.");
    }

}

mostrarLetra = function(letra, posicion) {
    let idDiv = "div" + posicion;
    let componente = document.getElementById(idDiv);
    componente.innerText = letra;
}

validar= function(letra) {
    let letrasEncontradas = 0;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
            coincidencias++; // Incremento global para PASO 5
        }
    }

    if (letrasEncontradas === 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado(); // PASO 6
    }
}
 


function ingresarLetra() {
    let inputLetra = document.getElementById("txtLetra");
    let letra = inputLetra.value;

    if (esMayuscula(letra)) {
        intentos++; // PASO 5
        validar(letra);
        
        // PASO 5: Verificación de victoria o derrota
        if (coincidencias === 5) {
            // PASO 7: Imagen ganador
            document.getElementById("ahorcadoImagen").src = "ganador.gif";
            alert("HA GANADO");
        } else if (intentos === 10) {
            // PASO 7: Imagen gameOver
            document.getElementById("ahorcadoImagen").src = "gameOver.gif";
            alert("HA PERDIDO");
        }
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");  
    }
}



