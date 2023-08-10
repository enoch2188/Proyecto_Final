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
