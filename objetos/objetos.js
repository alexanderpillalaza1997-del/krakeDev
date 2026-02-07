probarAtributos=function(){
    let persona= {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }

    console.log(persona.nombre);
    console.log(persona.estaVivo);
    if(persona.estaVivo==false){
        console,log("no esta vivo")
    } else {
        console.log("si esta vivo")
    }
}

crearProducto=function(){
    let producto1={
        nombre: "jabon",
        precio: 2,
        stock: 5
    }

    let producto2={
        nombre: "leche",
        precio: 1,
        stock: 3

    }
    console.log(producto1.nombre);
    console.log(producto2.precio);

    if (producto1.stock>producto2.stock){
        console.log ("producto1 es mayor")
    } else if (producto2.stock>producto1.stock) {
        console.log("producto2 es mayor ")
    } else {
        console.log(" ambos productos tienen el mismo stock ")
    }

    

}