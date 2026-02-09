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
    let sueldo = parseFloat(document.getElementById("txtSueldo").value);

    // VALIDAR CAMPOS OBLIGATORIOS
    if (cedula == "" || nombre == "" || apellido == "" || isNaN(sueldo)) {
        alert("Todos los campos son obligatorios");
        return;
    }

    // 🔵 CREAR EMPLEADO NUEVO
    if (esNuevo) {

        let empleado = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            sueldo: sueldo
        };

        if (!agregarEmpleado(empleado)) {
            alert("La cédula ya existe");
            return;
        }

        alert("Empleado guardado correctamente");
    }
    // 🟢 MODIFICAR EMPLEADO EXISTENTE
    else {

        let empleado = buscarEmpleado(cedula);

        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.sueldo = sueldo;

        alert("EMPLEADO MODIFICADO EXITOSAMENTE");
    }

    mostrarEmpleados();

    // Deshabilitar campos y botón guardar
    deshabilitarFormularioEmpleado();

    esNuevo = false;
}



ejecutarBusqueda = function () {

    let cedulaBusqueda = document.getElementById("txtBusquedaCedula").value;

    let empleado = buscarEmpleado(cedulaBusqueda);

    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
        return;
    }

    // Mostrar datos del empleado
    document.getElementById("txtCedula").value = empleado.cedula;
    document.getElementById("txtNombre").value = empleado.nombre;
    document.getElementById("txtApellido").value = empleado.apellido;
    document.getElementById("txtSueldo").value = empleado.sueldo;

    // Habilitar campos que se pueden modificar
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

    // Deshabilitar cédula
    deshabilitarComponente("txtCedula");

    // No es nuevo, es modificación
    esNuevo = false;
}

limpiar = function () {

    document.getElementById("txtCedula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtSueldo").value = "";

    esNuevo = false;

    deshabilitarFormularioEmpleado();
}

buscarPorRol = function () {

    let cedula = document.getElementById("txtBusquedaCedulaRol").value;

    let empleado = buscarEmpleado(cedula);

    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
        return;
    }

    document.getElementById("infoCedula").innerText = empleado.cedula;
    document.getElementById("infoNombre").innerText = empleado.nombre + " " + empleado.apellido;
    document.getElementById("infoSueldo").innerText = empleado.sueldo;
}



