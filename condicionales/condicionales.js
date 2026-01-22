calcularTasaIntereses=function(ingresoAnual){
    let tasa=0;

    if(ingresoAnual<300.000){
        tasa=0.16;
    } else if (ingresoAnual>=300.000 && ingresoAnual<500.000){
        tasa=0.15;
    } else if (ingresoAnual>=500.000 && ingresoAnual<1000.000){
        tasa=0.14;
    } else if (ingresoAnual>=1000.000 && ingresoAnual<2000.000){
        tasa=0.13;
    } else 
        tasa=0.12;

    return tasa;
    
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let capacidad = ingresos - egresos;
    let cuota=0;
    
    if (edad>50){
        cuota=capacidad *0.30;
    }else 
        cuota=capacidad *0.40;

    return cuota;

}

calcularDescuento = function(precio, cantidad) {
    let valorPagar;
    let total = precio * cantidad;

    if (cantidad < 3) {
        valorPagar = total;
    } else if (cantidad >= 3 && cantidad <= 5) {
        valorPagar = total - (total * 0.02);
    } else if (cantidad >= 6 && cantidad <= 11) {
        valorPagar = total - (total * 0.03);
    } else {
        valorPagar = total - (total * 0.04);
    }

    return valorPagar;
}


determinarColesterolLDL=function(nivelColesterol){

    if (nivelColesterol < 110) {
        return "LDL saludable";
    } else {
        return "LDL NO saludable";
    }

}


validarClave=function(clave){
    let contraseña = clave.length;
    if (contraseña > 8 && contraseña <16){ 
        return true;
    } else {
        return false;
    } 
    
}

esMayuscula=function(caracter){
    let codigo= caracter.charCodeAt(0);
    if (codigo >=65 && codigo <=90 ){
        return true; 
    }else {
        return false;
    }
}

esMinuscula=function(caracter){
    let codigo= caracter.charCodeAt(0);
    if (codigo >=97 && codigo <=122 ){
        return true;
    }else if (codigo == 130 || codigo >= 160 || codigo <=163 ) {
        return true;
    }else {
        return false;
    }
}

esDigito=function(caracter){
     let codigo= caracter.charCodeAt(0);
    if (codigo >=48 && codigo <=57 ){
        return true; 
    }else {
        return false;
    }
}


darPermiso=function(notaMatematica, notaFisica, notaGeometria){

    if (notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return "si hay permiso";
    }else {
        return "no hay permiso";
    }

}

otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){

    if (notaMatematica>90 || notaFisica>90 && notaGeometria>80){
        return "si hay permiso";
    }else {
        return "no hay permiso";
    }

}

dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    
    if (notaMatematica>90 || notaFisica>90 || notaGeometria>80 && notaFisica >notaMatematica){
        return "si hay permiso"
    } else {
        return "no hay permiso";
    }

}

