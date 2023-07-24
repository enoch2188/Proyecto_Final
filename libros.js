// Array para almacenar los libros agregados al carrito
const carrito = [];

class Libro {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Crear instancias de libros
const libro1 = new Libro("El caño más bello del mundo", 150);
const libro2 = new Libro("Historias de Riquelme", 200);
const libro3 = new Libro("Los 10 de Boca", 180);
const libro4 = new Libro("El Torero", 220);
const libro5 = new Libro("Riquelme 365 Historias", 190);
const libro6 = new Libro("De Riquelme a Messi", 250);

// Array de libros
const libros = [libro1, libro2, libro3, libro4, libro5, libro6];

let respuesta = prompt("¿Cuál fue el número 10 más grande de Argentina?");

// 1. Operador ternario / AND / OR
const descuento = respuesta.toLowerCase() === "riquelme" ? 0.1 : 0;

// Aplicar descuento si corresponde
if (descuento > 0) {
  libros.forEach((libro) => {
    libro.precio -= libro.precio * descuento;
  });
  alert(`¡Respuesta correcta! Se aplicó un descuento del ${descuento * 100}% en los libros.`);
} else {
  alert("Respuesta incorrecta. No se aplicó ningún descuento.");
}

// 4. Usar el operador Spread para replicar objetos o arrays
const librosCopia = libros.map((libro) => ({ ...libro })); // Copiar el array de libros con descuento aplicado

// Búsqueda por nombre
function buscarPorNombre(nombre) {
  const resultado = librosCopia.filter((libro) => {
    return libro.nombre.toLowerCase().includes(nombre.toLowerCase());
  });

  return resultado;
}

// Ejemplo de búsqueda por nombre
const resultadoBusqueda = buscarPorNombre("Historias");
console.log(resultadoBusqueda);

// Filtro por precio
function filtrarPorPrecio(min, max) {
  const resultado = librosCopia.filter((libro) => {
    return libro.precio >= min && libro.precio <= max;
  });

  return resultado;
}

// Función para manejar el evento de agregar al carrito
function agregarAlCarrito(event) {
  const boton = event.target;
  const nombreLibro = boton.dataset.nombre;
  const precioLibro = parseFloat(boton.dataset.precio);

  // Agregar el libro al carrito de compras
  carrito.push({ nombre: nombreLibro, precio: precioLibro });

  // Actualizar la lista del carrito
  mostrarCarrito();

  // Calcular y mostrar el total del carrito
  calcularTotalCarrito();
}

// Obtener todos los botones de agregar al carrito
const botonesAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");

// Agregar el evento de click a cada botón para llamar a la función agregarAlCarrito
botonesAgregarCarrito.forEach((boton) => {
  boton.addEventListener("click", agregarAlCarrito);
});

// Función para mostrar el carrito en el HTML
function mostrarCarrito() {
  const listaCarrito = document.getElementById("listaCarrito");
  listaCarrito.innerHTML = "";

  carrito.forEach((libro) => {
    const itemCarrito = document.createElement("li");
    itemCarrito.textContent = `${libro.nombre} - Precio: $${libro.precio}`;
    listaCarrito.appendChild(itemCarrito);
  });
}

// Función para calcular y mostrar el total del carrito
function calcularTotalCarrito() {
  const totalCarrito = document.getElementById("totalCarrito");
  const total = carrito.reduce((suma, libro) => suma + libro.precio, 0);
  totalCarrito.textContent = total;
}








