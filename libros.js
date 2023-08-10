// // Array para almacenar los libros agregados al carrito
// const carrito = [];

// class Libro {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// // Crear instancias de libros
// const libro1 = new Libro("El caño más bello del mundo", 150);
// const libro2 = new Libro("Historias de Riquelme", 200);
// const libro3 = new Libro("Los 10 de Boca", 180);
// const libro4 = new Libro("El Torero", 220);
// const libro5 = new Libro("Riquelme 365 Historias", 190);
// const libro6 = new Libro("De Riquelme a Messi", 250);

// // Array de libros
// const libros = [libro1, libro2, libro3, libro4, libro5, libro6];

// let respuesta = prompt("¿Cuál fue el número 10 más grande de Argentina?");

// // 1. Operador ternario / AND / OR
// const descuento = respuesta.toLowerCase() === "riquelme" ? 0.1 : 0;

// // Aplicar descuento si corresponde
// if (descuento > 0) {
//   libros.forEach((libro) => {
//     libro.precio -= libro.precio * descuento;
//   });
//   alert(`¡Respuesta correcta! Se aplicó un descuento del ${descuento * 100}% en los libros.`);
// } else {
//   alert("Respuesta incorrecta. No se aplicó ningún descuento.");
// }

// const librosCopia = libros.map((libro) => ({ ...libro })); // Copiar el array de libros con descuento aplicado

// // Búsqueda por nombre
// function buscarPorNombre(nombre) {
//   const resultado = librosCopia.filter((libro) => {
//     return libro.nombre.toLowerCase().includes(nombre.toLowerCase());
//   });

//   return resultado;
// }

// // Ejemplo de búsqueda por nombre
// const resultadoBusqueda = buscarPorNombre("Historias");
// console.log(resultadoBusqueda);

// // Filtro por precio
// function filtrarPorPrecio(min, max) {
//   const resultado = librosCopia.filter((libro) => {
//     return libro.precio >= min && libro.precio <= max;
//   });

//   return resultado;
// }

// // Función para manejar el evento de agregar al carrito
// function agregarAlCarrito(event) {
//   const boton = event.target;
//   const nombreLibro = boton.dataset.nombre;
//   const precioLibro = parseFloat(boton.dataset.precio);

//   // Agregar el libro al carrito de compras
//   carrito.push({ nombre: nombreLibro, precio: precioLibro });

//   // Actualizar la lista del carrito
//   mostrarCarrito();

//   // Calcular y mostrar el total del carrito
//   calcularTotalCarrito();
// }

// // Obtener todos los botones de agregar al carrito
// const botonesAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");

// // Agregar el evento de click a cada botón para llamar a la función agregarAlCarrito
// botonesAgregarCarrito.forEach((boton) => {
//   boton.addEventListener("click", agregarAlCarrito);
// });

// // Función para mostrar el carrito en el HTML
// function mostrarCarrito() {
//   const listaCarrito = document.getElementById("listaCarrito");
//   listaCarrito.innerHTML = "";

//   carrito.forEach((libro) => {
//     const itemCarrito = document.createElement("li");
//     itemCarrito.textContent = `${libro.nombre} - Precio: $${libro.precio}`;
//     listaCarrito.appendChild(itemCarrito);
//   });
// }

// // Función para calcular y mostrar el total del carrito
// function calcularTotalCarrito() {
//   const totalCarrito = document.getElementById("totalCarrito");
//   const total = carrito.reduce((suma, libro) => suma + libro.precio, 0);
//   totalCarrito.textContent = total;
// }









// // Cargar datos desde el archivo JSON usando fetch
// fetch("libros.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // Aquí irá el código para procesar los datos cargados
//     // Generar las tarjetas de libros con los datos cargados
// const librosContainer = document.querySelector(".container.mt-4.col-12 .row");
// data.forEach((libro) => {
//   const cardHTML = `
//     <div class="col-md-4" style="padding-bottom: 25px;">
//       <div class="card">
//         <img src="../img/${libro.imagen}" class="card-img-top" alt="${libro.nombre}">
//         <div class="card-body">
//           <h5 class="card-title">${libro.nombre}</h5>
//           <p class="card-text">${libro.descripcion}</p>
//           <a href="#" class="btn btn-primary">COMPRAR</a>
//           <button class="btn btn-primary btn-agregar-carrito" data-nombre="${libro.nombre}" data-precio="${libro.precio}">Agregar al carrito</button>
//         </div>
//       </div>
//     </div>
//   `;
//   librosContainer.innerHTML += cardHTML;
//     });
//   })
//   .catch((error) => {
//     console.error("Error al cargar los datos:", error);
//   });


// document.addEventListener("DOMContentLoaded", () => {
//   // Cargar datos desde el archivo JSON usando fetch
//   fetch("libros.json")
//     .then((response) => response.json())
//     .then((data) => {
//       const librosContainer = document.getElementById("librosContainer");
//       data.forEach((libro) => {
//         const cardHTML = `
//           <div class="col-md-4" style="padding-bottom: 25px;">
//             <div class="card">
//               <img src="../img/${libro.imagen}" class="card-img-top" alt="${libro.nombre}">
//               <div class="card-body">
//                 <h5 class="card-title">${libro.nombre}</h5>
//                 <p class="card-text">${libro.descripcion}</p>
//                 <a href="#" class="btn btn-primary">COMPRAR</a>
//                 <button class="btn btn-primary btn-agregar-carrito" data-nombre="${libro.nombre}" data-precio="${libro.precio}">Agregar al carrito</button>
//               </div>
//             </div>
//           </div>
//         `;
//         librosContainer.innerHTML += cardHTML;
//       });
//     })
//     .catch((error) => {
//       console.error("Error al cargar los datos:", error);
//     });

// // Array para almacenar los libros agregados al carrito
// const carrito = [];

// class Libro {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// // Crear instancias de libros
// const libro1 = new Libro("El caño más bello del mundo", 150);
// const libro2 = new Libro("Historias de Riquelme", 200);
// const libro3 = new Libro("Los 10 de Boca", 180);
// const libro4 = new Libro("El Torero", 220);
// const libro5 = new Libro("Riquelme 365 Historias", 190);
// const libro6 = new Libro("De Riquelme a Messi", 250);

// // Array de libros
// const libros = [libro1, libro2, libro3, libro4, libro5, libro6];

// let respuesta = prompt("¿Cuál fue el número 10 más grande de Argentina?");

// // 1. Operador ternario / AND / OR
// const descuento = respuesta.toLowerCase() === "riquelme" ? 0.1 : 0;

// // Aplicar descuento si corresponde
// if (descuento > 0) {
//   libros.forEach((libro) => {
//     libro.precio -= libro.precio * descuento;
//   });
//   alert(`¡Respuesta correcta! Se aplicó un descuento del ${descuento * 100}% en los libros.`);
// } else {
//   alert("Respuesta incorrecta. No se aplicó ningún descuento.");
// }

// const librosCopia = libros.map((libro) => ({ ...libro })); // Copiar el array de libros con descuento aplicado

// // Función para mostrar el carrito en el HTML
// function mostrarCarrito() {
//   const listaCarrito = document.getElementById("listaCarrito");
//   listaCarrito.innerHTML = "";

//   carrito.forEach((libro, index) => {
//     const itemCarrito = document.createElement("li");
//     itemCarrito.innerHTML = `
//       ${libro.nombre} - Precio: $${libro.precio}
//       <button class="btn-eliminar-carrito" data-index="${index}">Eliminar</button>
//     `;
//     listaCarrito.appendChild(itemCarrito);
//   });

//   // Obtener todos los botones de eliminar del carrito
//   const botonesEliminarCarrito = document.querySelectorAll(".btn-eliminar-carrito");

//   // Agregar el evento de click a cada botón para llamar a la función eliminarDelCarrito
//   botonesEliminarCarrito.forEach((boton) => {
//     boton.addEventListener("click", eliminarDelCarrito);
//   });
// }

// // Función para eliminar libros del carrito
// function eliminarDelCarrito(event) {
//   const index = parseInt(event.target.dataset.index);
//   carrito.splice(index, 1);
//   mostrarCarrito();
//   calcularTotalCarrito();
// }

// // Calcular y mostrar el total del carrito
// function calcularTotalCarrito() {
//   const totalCarrito = document.getElementById("totalCarrito");
//   const total = carrito.reduce((suma, libro) => suma + libro.precio, 0);
//   totalCarrito.textContent = total;
// }

// // Función para finalizar la compra
// function finalizarCompra() {
//   alert("Compra realizada. ¡Gracias por su compra!");
//   carrito.length = 0;
//   mostrarCarrito();
//   calcularTotalCarrito();
// }

// // Obtener el botón de finalizar compra
// const botonFinalizarCompra = document.getElementById("btn-finalizar-compra");

// // Agregar el evento de click al botón para llamar a la función finalizarCompra
// botonFinalizarCompra.addEventListener("click", finalizarCompra);





document.addEventListener("DOMContentLoaded", () => {
  fetch("libros.json")
    .then((response) => response.json())
    .then((data) => {
      const librosContainer = document.getElementById("librosContainer");
      data.forEach((libro) => {
        const cardHTML = `
          <div class="col-md-4" style="padding-bottom: 25px;">
            <div class="card">
              <img src="../img/${libro.imagen}" class="card-img-top" alt="${libro.nombre}">
              <div class="card-body">
                <h5 class="card-title">${libro.nombre}</h5>
                <p class="card-text">${libro.descripcion}</p>
                <a href="#" class="btn btn-primary">COMPRAR</a>
                <button class="btn btn-primary btn-agregar-carrito" data-nombre="${libro.nombre}" data-precio="${libro.precio}">Agregar al carrito</button>
              </div>
            </div>
          </div>
        `;
        librosContainer.innerHTML += cardHTML;
      });
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });

  const carrito = [];

  class Libro {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad || 1;
    }
  }

  function agregarAlCarrito(event) {
    const nombre = event.target.dataset.nombre;
    const precio = parseFloat(event.target.dataset.precio);

    const libroEnCarrito = carrito.find((libro) => libro.nombre === nombre);

    if (libroEnCarrito) {
      libroEnCarrito.cantidad += 1;
    } else {
      carrito.push(new Libro(nombre, precio));
    }

    mostrarCarrito();
    calcularTotalCarrito();
  }

  const botonesAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");

  botonesAgregarCarrito.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });

  function mostrarCarrito() {
    const listaCarrito = document.getElementById("listaCarrito");
    listaCarrito.innerHTML = "";

    carrito.forEach((libro, index) => {
      const itemCarrito = document.createElement("li");
      itemCarrito.innerHTML = `
        ${libro.nombre} - Precio: $${libro.precio} - Cantidad: ${libro.cantidad}
        <button class="btn-eliminar-carrito" data-index="${index}">Eliminar</button>
      `;
      listaCarrito.appendChild(itemCarrito);
    });

    const botonesEliminarCarrito = document.querySelectorAll(".btn-eliminar-carrito");

    botonesEliminarCarrito.forEach((boton) => {
      boton.addEventListener("click", eliminarDelCarrito);
    });
  }

  function eliminarDelCarrito(event) {
    const index = parseInt(event.target.dataset.index);
    carrito.splice(index, 1);
    mostrarCarrito();
    calcularTotalCarrito();
  }

  function calcularTotalCarrito() {
    const totalCarrito = document.getElementById("totalCarrito");
    const total = carrito.reduce((suma, libro) => suma + libro.precio * libro.cantidad, 0);
    totalCarrito.textContent = total;
  }

  function finalizarCompra() {
    alert("Compra realizada. ¡Gracias por su compra!");
    carrito.length = 0;
    mostrarCarrito();
    calcularTotalCarrito();
  }

  const botonFinalizarCompra = document.getElementById("btn-finalizar-compra");

  botonFinalizarCompra.addEventListener("click", finalizarCompra);
});
