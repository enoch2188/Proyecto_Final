document.addEventListener("DOMContentLoaded", () => {
  const librosContainer = document.getElementById("librosContainer");
  
  fetch("libros.json")
    .then((response) => response.json())
    .then((data) => {
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

      const storedCarrito = localStorage.getItem("carrito");
      if (storedCarrito) {
        carrito.push(...JSON.parse(storedCarrito));
        mostrarCarrito();
        calcularTotalCarrito();
      }
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });

  const carrito = [];
  let descuentoAplicado = false; // Agrega esta línea para el descuento

  function aplicarDescuento(porcentaje) {
    if (!descuentoAplicado) {
      carrito.forEach((libro) => {
        libro.precio = libro.precio * (1 - porcentaje);
      });
      descuentoAplicado = true;
    }
  }

  function agregarAlCarrito(event) {
    const nombre = event.target.dataset.nombre;
    const precio = parseFloat(event.target.dataset.precio);

    const libroEnCarrito = carrito.find((libro) => libro.nombre === nombre);

    if (!descuentoAplicado) {
      const claveDescuento = prompt("Ingresa la palabra clave para obtener un descuento:");

      if (claveDescuento && claveDescuento.toLowerCase() === "riquelme") {
        aplicarDescuento(0.21); // Aplicar un 21% de descuento
      }
    }

    if (libroEnCarrito) {
      libroEnCarrito.cantidad += 1;
    } else {
      carrito.push(new Libro(nombre, precio));
    }

    mostrarCarrito();
    calcularTotalCarrito();
  }


  class Libro {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad || 1;
    }
  }

  function aplicarDescuento(porcentaje) {
    if (!descuentoAplicado) {
      carrito.forEach((libro) => {
        libro.precio = libro.precio * (1 - porcentaje);
      });

      mostrarCarrito();
      calcularTotalCarrito();
    }
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
        ${libro.nombre} - Precio: $${libro.precio.toFixed(2)} - Cantidad: ${libro.cantidad}
        <button class="btn-eliminar-carrito" data-index="${index}">Eliminar</button>
      `;
      listaCarrito.appendChild(itemCarrito);
    });

    // Guardar carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

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
    totalCarrito.textContent = total.toFixed(2);
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
