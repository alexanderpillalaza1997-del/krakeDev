calcularPromedioNotas=function(){

    let nota1;
    let nota2;
    let nota3;
    let promedio;
    nota1= recuperarFlotante("lblnota1");
    nota2= recuperarFlotante("lblnota2");
    nota3= recuperarFlotante("lblnota3");
    promedio = calcularPromedio(nota1, nota2, nota3);

    cambiarTexto("lblPromedio", promedio.toFixed(2));

    if(promedio>7){
        cambiarImagen("lblImagen", "exito.gif");
    }else{
        cambiarImagen("lblImagen", "fracaso.gif")
    }

}