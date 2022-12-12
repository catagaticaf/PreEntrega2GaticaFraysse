//CALCULADORA DE IMC
/*
let peso = Number (prompt ("Ingrese su peso en kg"));
let altura = Number (prompt ("Ingrese su altura en metros (ej. 1.75)"));

console.log (peso);
console.log (altura); 

let IMC = (peso / Math.pow(altura, 2));
console.log(IMC);

let resultado = "";
if (IMC <18.5)
{
    resultado = "bajo peso";
} else if (IMC >= 18.5 && IMC <25)
{
    resultado = "normopeso"
} else if (IMC >= 25 && IMC < 30){
    resultado = "sobrepeso";
} else {
    resultado = "obesidad";
}
alert("Su IMC es " + IMC.toFixed(2) + " y su calificación es " + resultado);

//FUNCIONES

function recomendacionNutricional(mensaje) {
    if(IMC <= 18.5 || IMC >= 30) {
        return alert("Se sugiere una consulta con un nutricionista");
    } else {
     return alert("Usted se encuentra en un peso saludable, la consulta con un nutricionista es opcional");}
    }

    console.log(recomendacionNutricional());

//SISTEMA DE TURNOS NUTRICIÓN

let ingresarNombre = prompt("Ingrese su nombre se usuario");

for (let i= 10; i < 20; i++){
    alert ("Hola " + ingresarNombre + ", su turno asignado es a las " + i + " hs");
    break 
}
//FUNCIONES(flecha)
const sumar = (a, b) => {return a + b};
console.log( sumar (5, 20) );
*/

//PRACTICAS DE LAS CLASES



//CLASE 6 ARRAYS
/*
let simpson = ["homero", "marge", "bart", "lisa", "magui"];
console.log(simpson);
console.log(simpson.length);
simpson.splice(1, 2);
console.log(simpson);
*/

//CLASE 7 FUNCIONES DE ORDEN SUPERIOR

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos = new Producto ("fideos", 150);
const azucar = new Producto ("azúcar", 120);
const gaseosa = new Producto ("Coca-Cola", 350);
const queso = new Producto ("Casancrem", 380);

const arrayProductos = [ fideos, azucar, gaseosa, queso];
console.log(arrayProductos);

arrayProductos.forEach((Producto) => {
    console.log(Producto);
})

arrayProductos.forEach(Producto => console.log(Producto.precio));

console.log( "Find:");
const buscar = arrayProductos.find (Producto => Producto.nombre === "Coca-Cola");
console.log(buscar);

console.log( "Filter:");
const arrayProductosMenor200 = arrayProductos.filter (Producto => Producto.precio < 200);
console.log (arrayProductosMenor200);

console.log( "Map:");
const arrayProductosConIva = arrayProductos.map ((Producto) => {
    return {
    nombre : Producto.nombre,
    precio : (Producto.precio * 1.21)}
});

console.log(arrayProductosConIva);

let totalPrecios = arrayProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0);

console.log( "Reduce:");
console.log(totalPrecios);

let numeros = [24, 56, 23, 77, 11, 35];
numeros.sort ((a, b) => a - b);
console.log( "Metodo sort para ordenar un array de numeros de menor a mayor:");
console.log(numeros);

arrayProductos.sort((a,b) => a.precio - b.precio);
console.log( "Metodo sort para ordenar precios de menor a mayor:");
console.log(arrayProductos)