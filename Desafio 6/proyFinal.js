


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
//ACA ESTA IMPLEMENTADO EL DESAFIO 5//

class inventario{
    constructor(id , nombre , precio , stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    updateStock(){
        this.stock = this.stock + 1;
    }
    soldStock(){
        this.stock = this.stock - 1;
    }
    
}
let lata = new inventario( 002, "Lata", 1100, 2);
let taza = new inventario (001, "Taza", 700, 6);
let mate = new inventario (003, "Mate de Madera", 350, 4);

function descuento(){

    let total = prompt("¿Que articulo quieres saber su precio final? Escribe '1', '2' o '3'. (1=latas, 2=Taza lisa, 3=Mate de madera)");
    if (total == "1"){
        alert("El precio del duo de latas queda en: $" + (lata.precio - (lata.precio * (15 / 100))));
        lata.soldStock();

    }
    else if (total == "2"){
        alert("El precio de las tazas queda en: $" + (taza.precio - (taza.precio * (15 / 100))));
        taza.soldStock();
    }
    else if (total == "3"){
        alert("El precio del mate de madera queda en: $" + (mate.precio - (mate.precio * (15 / 100))));
        mate.soldStock();
    }
    else{
        alert("DATOS INCORRECTOS");
    }
}

//DESAFIOS 6 CARRITO DE COMPRA
let cantidad = [];
let compra = [];
function carrito(){
    let carr = prompt("¿Que producto deseas llevar? Lata, Taza, Mate, ESC para salir");
    
    if(carr == "Lata" || carr == "Taza" || carr == "Mate"){
    
        compra.push(carr);
        alert("Muchas gracias");
    }
    else {
        alert("Muchas gracias");
    }
   
}
function total(){
    
    let cant = parseInt(prompt("¿Cuantos deseas llevar? ESC para salir"));
    cantidad.push(cant);
  
}
function add (){
let add = prompt("¿Quieres agregar mas productos? S o N")
if (add == "S"){
    carrito();
    total();
}
else {
    alert("MUCHAS GRACIAS POR SU COMPRA!")
}
}
intro();
prod(); 
semana(); 
descuento();
carrito();
total();
add();
console.log(compra);
console.log(cantidad);

















