class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerSubtotal() {
        if (carrito.length > 0) {
            return this.carrito.reduce((acc, producto)=> acc + producto.precio, 0).toFixed(2)
        } else {
            return 'Hubo un error inesperado, intente nuevamente'
        }
    }
    confirmarCompra() {
        if (this.obtenerSubtotal() !== 'Hubo un error inesperado, intente nuevamente') {
            return `Confirmamos el pago de $ ${this.obtenerSubtotal()}. \n Muchas gracias por confiar en nosotros!`
        } else {
            return `Hubo un error en la transacción, intente nuevamente`
        }
    }
}