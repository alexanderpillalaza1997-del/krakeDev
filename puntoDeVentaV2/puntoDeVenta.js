calcularValorTotal = function () {

    // Recuperar valores (como texto)
    let producto = document.getElementById("txtProducto").value;
    let cantidadTxt = document.getElementById("txtCantidad").value;
    let precioTxt = document.getElementById("txtPrecio").value;

    //  Validaciones
    let errorProducto = esProductoValido(producto);
    let errorCantidad = esCantidadValida(cantidadTxt);
    let errorPrecio = esPrecioValido(precioTxt);

    document.getElementById("lblError1").innerText = errorProducto;
    document.getElementById("lblError2").innerText = errorCantidad;
    document.getElementById("lblError3").innerText = errorPrecio;

    // Si hay errores, NO calcular
    if (errorProducto !== "" || errorCantidad !== "" || errorPrecio !== "") {
        return;
    }

    //  Convertir a números (ya validados)
    let cantidad = Number(cantidadTxt);
    let precio = Number(precioTxt);

    // Cálculos USANDO TUS FUNCIONES
    let subtotal = calcularSubtotal(precio, cantidad);
    let descuento = calcularDescuentoPorVolumen(subtotal, cantidad);
    let iva = calcularIva(subtotal - descuento);
    let total = calcularTotal(subtotal, descuento, iva);

    //  Mostrar resultados
    mostrarTexto("lblSubtotal", subtotal.toFixed(2));
    mostrarTexto("lblDescuento", descuento.toFixed(2));
    mostrarTexto("lblValorIva", iva.toFixed(2));
    mostrarTexto("lblTotal", total.toFixed(2));
}


limpiar = function () {

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", 0);
    mostrarTextoEnCaja("txtPrecio", 0.0);
    mostrarTextoEnCaja("txtPorcentajeDescuento", 0);

    mostrarTexto("lblSubtotal", 0.0);
    mostrarTexto("lblDescuento", 0.0);
    mostrarTexto("lblValorIVA", 0.0);
    mostrarTexto("lblTotal", 0.0);
    mostrarTexto("lblResumen", "");
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */

esProductoValido = function (producto) {
    if (producto == null || producto.trim() == "") {
        return "CAMPO OBLIGATORIO";
    }

    if (producto.length > 10) {
        return "Máx 10 caracteres";
    }

    return "";
}

esCantidadValida = function (cantidad) {
    if (cantidad == null || cantidad === "") {
        return "CAMPO OBLIGATORIO";
    }

    if (!Number.isInteger(Number(cantidad))) {
        return "Debe ser entero";
    }

    if (cantidad < 0 || cantidad > 100) {
        return "Debe estar entre 0 y 100";
    }

    return "";
}

esPrecioValido = function (precio) {
    if (precio == null || precio === "") {
        return "CAMPO OBLIGATORIO";
    }

    if (isNaN(precio)) {
        return "Debe ser número";
    }

    if (precio < 0 || precio > 50) {
        return "Debe estar entre 0 y 50";
    }

    return "";
}
