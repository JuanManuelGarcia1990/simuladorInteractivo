const tbody = document.querySelector("tbody");

//Guardar y recuperar el carrito con LocalStorage + JSON
/*const carrito = [];
const guardarCarrito = () => {
  if (carrito.length > 0) {
    localStorage.setItem("CarritoPrendas", JSON.stringify(carrito));
  }
};

const recuperarCarrito = () => {
  return JSON.parse(localStorage.getItem("CarritoPrendas")) || [];
};*/

carrito.push(...recuperarCarrito());

//Armar la tabla HTML
const armarTablaHTML = (producto) => {
  return `
    <tr>
    <td><img src="${producto.imagen}"></td>
    <td>${producto.tipo} </td>
    <td>$ ${producto.precio} </td>
    <td>
    <button id="${producto.codigo}" class="button button-outline" title="Agregar al carrito">🛒</button>
    </td>
</tr>`;
};

//Cargar productor en tabla HTML
const cargarProductos = (array) => {
  let tablaHTML = "";
  if (array.length > 0) {
    array.forEach((producto) => (tablaHTML += armarTablaHTML(producto)));
  } else {
    tablaHTML = "<h2>Error al cargar productos</h2> ";
  }
  tbody.innerHTML = tablaHTML;
};

//Activar evento click
const activarClickBotonesAdd = () => {
  const botonesAdd = document.querySelectorAll("button.button.button-outline");
  botonesAdd.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let resultado = buscarProducto(e.target.id);
      carrito.push(resultado);
      guardarCarrito();
    });
  });
};

cargarProductos(productos);
activarClickBotonesAdd();

const buscarProducto = (codigo) =>
  productos.find((producto) => producto.codigo === parseInt(codigo));

function comprar() {
  let codigo = prompt(mensajeInicial);
  if (!parseInt(codigo)) {
    alert("El código ingresado no es válido, intente nuevamente");
    return;
  }
  let productoElegido = buscarProducto(codigo);
  carrito.push(productoElegido);
  let respuesta = confirm("¿Desea llevar otro producto?");
  if (respuesta) {
    comprar();
  } else {
    finalizarCompra();
  }
}

function verCarrito() {
  if (carrito.length > 0) {
    const shopping = new Compra(carrito);
    alert(`El costo total es de $ ${shopping.obtenerSubtotal()}`);
  } else {
    alert("El carrito está vacío!");
  }
}

const btnVerCarrito = document.querySelector("button#verCarrito");
btnVerCarrito.addEventListener("click", verCarrito);

function finalizarCompra() {
  if (carrito.length === 0) {
    console.warn("El carrito está vacío!");
    return;
  }
  let respuesta = confirm("¿Desea confirmar su pago?");
  if (respuesta) {
    alert(shopping.confirmarCompra());
    carrito.length = 0;
  }
}
