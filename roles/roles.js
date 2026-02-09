let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");


    deshabilitarFormularioEmpleado();
    mostrarEmpleados();

}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");

}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");

}

mostrarEmpleados = function () {

    let cmpTabla = document.getElementById("tablaEmpleados");

    let contenidoTabla = "<table class='tabla'><tr>"
        + "<th>CEDULA</th>"
        + "<th>NOMBRE</th>"
        + "<th>APELLIDO</th>"
        + "<th>SUELDO</th>"
        + "</tr>";

    let elementoEmpleado;

    for (let i = 0; i < empleados.length; i++) {

        elementoEmpleado = empleados[i];

        contenidoTabla +=
            "<tr>"
            + "<td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>";
    }

    contenidoTabla += "</table>";

    cmpTabla.innerHTML = contenidoTabla;
}

deshabilitarFormularioEmpleado = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

    esNuevo = true;
}

buscarEmpleado = function (cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            return empleados[i];

        }
    }
    return null;

}

agregarEmpleado = function (empleado) {

    let empleadoExistente = buscarEmpleado(empleado.cedula);

    if (empleadoExistente == null) {
        empleados.push(empleado);
        return true;
    }

    return false;
}

guardar = function () {

    let cedula = document.getElementById("txtCedula").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let sueldoTexto = document.getElementById("txtSueldo").value;

    let sueldo = parseFloat(sueldoTexto);

    // CÉDULA OBLIGATORIA
    if (cedula == "") {
        document.getElementById("lblErrorCedula").innerText = "La cedula es obligatoria";
        return;
    } else {
        document.getElementById("lblErrorCedula").innerText = "";
    }

    // NOMBRE OBLIGATORIO
    if (nombre == "") {
        document.getElementById("lblErrorNombre").innerText = "El nombre es obligatorio";
        return;
    } else {
        document.getElementById("lblErrorNombre").innerText = "";
    }

    // APELLIDO OBLIGATORIO
    if (apellido == "") {
        document.getElementById("lblErrorApellido").innerText = "El apellido es obligatorio";
        return;
    } else {
        document.getElementById("lblErrorApellido").innerText = "";
    }

    // SUELDO OBLIGATORIO
    if (sueldoTexto == "") {
        document.getElementById("lblErrorSueldo").innerText = "El sueldo es obligatorio";
        return;
    } else {
        document.getElementById("lblErrorSueldo").innerText = "";
    }

    // VALIDAR SUELDO
    if (isNaN(sueldo) || sueldo < 400 || sueldo > 5000) {
        document.getElementById("lblErrorSueldo").innerText = "Sueldo invalido";
        return;
    }

    // GUARDAR
    if (esNuevo) {
        let empleado = {};
        empleado.cedula = cedula;
        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.sueldo = sueldo;

        let agregado = agregarEmpleado(empleado);

        if (agregado) {
            alert("Empleado guardado correctamente");
            mostrarEmpleados();
            deshabilitarFormularioEmpleado();
        } else {
            alert("Ya existe un empleado con esa cédula");
        }
    }

    if (agregarEmpleado(empleado)) {

        alert("Empleado guardado correctamente");

        mostrarEmpleados();  
        limpiar();           
        deshabilitarFormularioEmpleado();
        esNuevo = false;

    } else {
        alert("La cédula ya existe");
    }

}


