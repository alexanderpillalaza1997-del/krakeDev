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