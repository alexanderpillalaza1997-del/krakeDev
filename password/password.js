function validarPassword(password) {
    let errores = "";

    // Validar longitud mínima
    if (password.length < 8) {
        errores += "Debe tener al menos 8 caracteres.<br>";
    }

    // Validar longitud máxima
    if (password.length > 16) {
        errores += "Debe tener máximo 16 caracteres.<br>";
    }

    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;

    for (let i = 0; i < password.length; i++) {
        let c = password.charAt(i);

        if (c >= 'A' && c <= 'Z') {
            tieneMayuscula = true;
        }

        if (c >= '0' && c <= '9') {
            tieneDigito = true;
        }

        if (c === '*' || c === '-' || c === '_') {
            tieneEspecial = true;
        }
    }

    if (!tieneMayuscula) {
        errores += "Debe tener al menos una letra mayúscula.<br>";
    }

    if (!tieneDigito) {
        errores += "Debe tener al menos un dígito.<br>";
    }

    if (!tieneEspecial) {
        errores += "Debe tener al menos un carácter especial (*, -, _).<br>";
    }

    return errores;
}

function ejecutarValidacion() {
    let password = document.getElementById("txtPassword").value;
    let resultado = document.getElementById("resultado");

    let mensaje = validarPassword(password);

    if (mensaje === "") {
        resultado.innerHTML = "✅ Password Correcto";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = mensaje;
        resultado.style.color = "red";
    }
}
