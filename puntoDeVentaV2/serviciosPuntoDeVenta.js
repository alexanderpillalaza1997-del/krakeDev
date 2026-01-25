calcularValorDescuento= function(monto , porcentajeDescuento){
    return (monto* porcentajeDescuento)/100;
}

calcularIva= function(monto){
    const Iva =12;
    return (monto*Iva)/100;
}

calcularSubtotal= function(precio, cantidad){
    return precio * cantidad;

}

calcularTotal = function(subtotal, descuento, iva){
    return (subtotal- descuento)+ iva

}

calcularDescuentoPorVolumen= function(subtotal, cantidad) {
    let descuento = 0;

    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else {
        descuento = subtotal * 0.05;
    }

    return descuento;
}
