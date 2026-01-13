saludar=function(){
    // recupera el valor de la caja de texto txtnombre
    let nombre=recuperarTexto("txtNombre");
    // recupera el valor de la caja de texto txtapellido
    let apellido=recuperarTexto("txtApellido");
}


recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado

}