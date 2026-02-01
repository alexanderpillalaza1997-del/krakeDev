
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

    if (valor.length == 5) {
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


