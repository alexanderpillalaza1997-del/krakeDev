// Función que retorna un número aleatorio entero entre 1 y 100
function obtenerAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Función principal
function generarAleatorios() {

    // a. Declarar e inicializar el arreglo
    let aleatorios = [];

    // b. Tomar el número ingresado por el usuario
    let cantidad = document.getElementById("txtCantidad").value;
    cantidad = parseInt(cantidad);

    // Validación
    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Ingrese un número válido entre 5 y 20");
        return;
    }

    // c. For desde 0 hasta cantidad (excluido)
    for (let i = 0; i < cantidad; i++) {
        console.log(i);

        // e. Invocar función aleatoria y agregar al arreglo
        let numero = obtenerAleatorio();
        aleatorios.push(numero);
    }

    // 5. Mostrar resultados
    mostrarResultados(aleatorios);
}

// 4. Función para mostrar resultados en una tabla
function mostrarResultados(arregloNumeros) {

    let contenido = "<table border='1'>";
    contenido += "<tr><th>Índice</th><th>Valor</th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        contenido += "<tr>";
        contenido += "<td>" + i + "</td>";
        contenido += "<td>" + arregloNumeros[i] + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";

    document.getElementById("resultado").innerHTML = contenido;
}
