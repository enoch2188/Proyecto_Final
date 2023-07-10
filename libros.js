// let respuesta = prompt("¿Cuál fue el número 10 más grande de Argentina?");

// if (respuesta === "Riquelme") {

// let precio = 100; 
// let descuento = precio * 0.10;

// alert(`¡Respuesta correcta! Obtienes un descuento del 10 por ciento del libro que elijas`);
// } else {
// alert("Respuesta incorrecta. No obtienes ningún descuento.");
// } 

// const calcularDesc =valorProducto => valorProducto * 0.10

// const calcularValorProducto = valor => {
// console.log(valor)
// return valor = calcularDesc(valor)
// }

// console.log(calcularValorProducto(100))

// //___________________________________________________________________________


// class Libro {
//     constructor(nombre, precio) {
//       this.nombre = nombre;
//       this.precio = precio;
//     }
//   }
  
//   // Crear instancias de libros
//   const libro1 = new Libro("El caño más bello del mundo", 150);
//   const libro2 = new Libro("Historias de Riquelme", 200);
//   const libro3 = new Libro("Los 10 de Boca", 180);
//   const libro4 = new Libro("El Torero", 220);
//   const libro5 = new Libro("Riquelme 365 Historias", 190);
//   const libro6 = new Libro("De Riquelme a Messi", 250);
  
//   // Array de libros
//   const libros = [libro1, libro2, libro3, libro4, libro5, libro6];
  
//   let respuesta = prompt("¿Cuál fue el número 10 más grande de Argentina?");

// if (respuesta.toLowerCase() === "riquelme") {
//   const descuento = 0.1; // 10% de descuento

//   libros.forEach((libro) => {
//     libro.precio -= libro.precio * descuento;
//   });

//   console.log("¡Respuesta correcta! Se aplicó un descuento del 10% en los libros.");
// } else {
//   console.log("Respuesta incorrecta. No se aplicó ningún descuento.");
// }

// //___________________________________________________________________________

// // Búsqueda por nombre
// function buscarPorNombre(nombre) {
//     const resultado = libros.filter((libro) => {
//       return libro.nombre.toLowerCase().includes(nombre.toLowerCase());
//     });
  
//     return resultado;
//   }
  
//   // Ejemplo de búsqueda por nombre
//   const resultadoBusqueda = buscarPorNombre("Historias");
//   console.log(resultadoBusqueda);
  
//   // Filtro por precio
//   function filtrarPorPrecio(min, max) {
//     const resultado = libros.filter((libro) => {
//       return libro.precio >= min && libro.precio <= max;
//     });
  
//     return resultado;
//   }
  
//   // Ejemplo de filtro por precio
//   const resultadoFiltro = filtrarPorPrecio(150, 200);
//   console.log(resultadoFiltro);
  



//____________________________________________________________________________

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
  
  if (respuesta.toLowerCase() === "riquelme") {
    const descuento = 0.1; // 10% de descuento
  
    libros.forEach((libro) => {
      libro.precio -= libro.precio * descuento;
    });
  
    alert("¡Respuesta correcta! Se aplicó un descuento del 10% en los libros.");
  } else {
    alert("Respuesta incorrecta. No se aplicó ningún descuento.");
  }
  
  // Búsqueda por nombre
  function buscarPorNombre(nombre) {
    const resultado = libros.filter((libro) => {
      return libro.nombre.toLowerCase().includes(nombre.toLowerCase());
    });
  
    return resultado;
  }
  
  // Ejemplo de búsqueda por nombre
  const resultadoBusqueda = buscarPorNombre("Historias");
  console.log(resultadoBusqueda);
  
  // Filtro por precio
  function filtrarPorPrecio(min, max) {
    const resultado = libros.filter((libro) => {
      return libro.precio >= min && libro.precio <= max;
    });
  
    return resultado;
  }
  
  // Ejemplo de filtro por precio
  const resultadoFiltro = filtrarPorPrecio(150, 200);
  console.log(resultadoFiltro);
  