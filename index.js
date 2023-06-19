let respuesta = prompt("¿Cuál fue el número 10 más grande de Argentina?");

if (respuesta === "Riquelme") {

let precio = 100; 
let descuento = precio * 0.10;

alert(`¡Respuesta correcta! Obtienes un descuento del 10 por ciento del libro que elijas`);
} else {
alert("Respuesta incorrecta. No obtienes ningún descuento.");
} 

const calcularDesc =valorProducto => valorProducto * 0.10

const calcularValorProducto = valor => {
console.log(valor)
return valor = calcularDesc(valor)
}

console.log(calcularValorProducto(100))
