let latas = 1100
let tazas = 700
let mateMadera = 350

function intro(){

    let user = prompt("Ingrese su nombre de usuario");

    alert("Hola " + user + "! aqui en Chromatica, disponemos de un 15% de descuento en articulos por color, segun la semana.");
    alert("Por el momento disponemos de solo tres productos: Duo de latas, Taza lisa, Mate de madera");

}

function prod(){

    let producto = prompt("¿Que producto quieres ver de nuestra tienda? Escribe '1', '2' o '3'. (1=latas, 2=Taza lisa, 3=Mate de madera)");

    if(producto == "1"){
    alert("Duo de latas: $1100");

}
    else if (producto == "2"){
    alert("Tazas Lisas: $700");
}
    else if (producto == "3"){
    alert("Mate de madera: $350");
}
    else {
    alert("Datos incorrectos");
}
}

function semana() {

    let color = prompt("¿Que semana de color es esta? Escriba 'R' si es roja, 'V' si es verde, o 'A' si es azul");

    if (color == "R"){
        alert("Semana ROJA: 15% de descuento en articulos de color rojo");
    }
    else if (color == "V"){
        alert("Semana VERDE: 15% de descuento en articulos de color verde");
    }
    else if (color == "A"){
        alert("Semana AZUL: 15% de descuento en articulos de color AZUL");
    }
    else {
        alert("Datos incorrectos");
    }
}


function descuento(){
    let total = prompt("¿Que articulo quieres saber su precio final? Escribe '1', '2' o '3'. (1=latas, 2=Taza lisa, 3=Mate de madera)");
    if (total == "1"){
        alert("El precio del duo de latas queda en: $" + (latas - (latas * (15 / 100))));
    }
    else if (total == "2"){
        alert("El precio de las tazas queda en: $" + (tazas - (tazas * (15 / 100))));
    }
    else if (total == "3"){
        alert("El precio del mate de madera queda en: $" + (mateMadera - (mateMadera * (15 / 100))));
    }
    else{
        alert("DATOS INCORRECTOS");
    }
}

intro(); //AQUI ESTA LLAMADO//
prod(); //AQUI ESTA LLAMADO//
semana(); //AQUI ESTA EL LLAMADO//
descuento();//AQUI ESTA EL LLAMADO//
