jugar=function(){
    let aleatorio;
    aleatorio= lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblNumero1", " GANASTE ES MAYOR A 3")
    }else{
        cambiarTexto("lblNumero1", " ESTAS DE MALAS ES MENOR A 3")
    }
}

// Crear una funcion lanza dado 
// no recibe parametros 
// retorna un numero aleatorio entre 1 y 6

lanzarDado= function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); // entre 0 y 1 
    numeroMultiplicado= aleatorio*6;
    // console.log(numeroMultiplicado);
    numeroEntero=parseInt(numeroMultiplicado); // entre 0 y 5
    // console.log("------->" + numeroEntero);
    valorDado= numeroEntero+1; // entre 0 y 6
    // console.log("-------------->" + valorDado);
    return valorDado;


}