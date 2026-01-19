let puntos=0;
let lanzamientos=5;

jugar=function(){
    if(lanzamientos == 0){
        limpiar();
        cambiarTexto("lblMensaje", "");
        return;
    } 

    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();

    if(puntos >20){ 
        cambiarTexto("lblMensaje", "GANASTE");
    } 

    
    
   // si el jugador obtiene mas de 20 puntos 
   // mostrar un mensaje ganaste 
   // llamar a limpiar
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos", puntos);

}
// no recibe parametros 
// resta uno a la variable lanzamientos 
// guarda el resultado en la mismas pantalla 
// no retorna nada 
  // si llega lanzamientos llega a 0
    // mostrar en pantalla el mensaje GAME OVER 
    // incovar a limpiar
modificarLanzamientos=function(){
    lanzamientos= lanzamientos - 1;
    cambiarTexto("lblLanzamientos", lanzamientos);

    if(lanzamientos == 0){
        cambiarTexto("lblMensaje", "GAME OVER");
        
    }

}
// colocar el puntaje en 0 y lanzaminetos en 5
// en variables y en pantalla 
// quitar la imagen ""
limpiar=function(){ 
    if(lanzamientos == 0 || puntos>20){

        puntos=0;
        lanzamientos=5; 

        cambiarTexto("lblPuntos", puntos);
        cambiarTexto("lblLanzamientos", lanzamientos);
        cambiarImagen("imgDado", "");
        } 

}
// fucnion mostrarCars, recibe el numero que quieres mostrar
// Muestra la imagem correspondiente al numero que recibe 
// No retorna nada 
mostrarCara=function(numero){
    if(numero == 1){
        cambiarImagen("imgDado", "dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado", "dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado", "dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado", "dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado", "dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado", "dados6.png");
    }

}



lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}