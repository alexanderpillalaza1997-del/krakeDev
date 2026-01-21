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

    if(promedio >0 && promedio <5){
        cambiarTexto("lblResultado", "REPROBADO");
        cambiarImagen("lblImagen", "reprobado.gif");

    }else if (promedio>=5 && promedio <=8){
        cambiarTexto("lblResultado", "BUEN TRABAJO");
        cambiarImagen("lblImagen", "buentrabajo.gif");

    }else if (promedio >8 && promedio <=10){
        cambiarTexto("lblResultado", "EXCELENTE");
        cambiarImagen("lblImagen", "excelente.gif");
    }
    else{
        cambiarTexto("lblResultado", "DATOS INCORRECTOS");
        cambiarImagen("lblImagen", "datosincorrectos.gif")
    }

}