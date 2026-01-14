saludar=function(){
    // recupera el valor de la caja de texto txtnombre
    let nombre=recuperarTexto("txtNombre");
    // recupera el valor de la caja de texto txtapellido
    let apellido=recuperarTexto("txtApellido");

    let edad = recuperarInt("txtEdad")

    let estatura = recuperarFloat("txtEstatura")

    let mensajeBienvenida= "Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado", mensajeBienvenida);

    mostrarImgen("imgSaludo", "./imagenes/saludo.gif");

    mostrarTextoEnCaja("txtNombre", "");
}

