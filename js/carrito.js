const carrito = [];
const guardarCarrito = () => {
  if (carrito.length > 0) {
    localStorage.setItem("CarritoPrendas", JSON.stringify(carrito));
  }
};

const recuperarCarrito = () => {
  return JSON.parse(localStorage.getItem("CarritoPrendas")) || [];
};

carrito.push(...recuperarCarrito());
