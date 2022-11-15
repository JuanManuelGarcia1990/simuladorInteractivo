const carrito = []

const productos = [{codigo: 1, tipo: 'Monitor Samsung 24 pulgadas', precio: 62599},
                   {codigo: 2, tipo: 'Cpu Ryzen5 3400G Ssd 1tb 16gb', precio: 123859},
                   {codigo: 3, tipo: 'Cpu Ryzen7 5700G Ssd 1tb 32gb', precio: 175500},
                   {codigo: 4, tipo: 'Cpu I7 10700F GTX 1660TI 6GB Ssd 1tb 32gb', precio: 245879},
                   {codigo: 5, tipo: 'Teclado mecánico gamer Philips', precio: 7850},
                   {codigo: 6, tipo: 'Mouse Gamer Logitech', precio: 12300}]

const mensajeInicial = "Elija el producto por el código numérico:"

function buscarProducto(codigo) {
    let resultado = productos.find(producto => producto.codigo === parseInt(codigo))
        return resultado 
}

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("El código ingresado no es válido, intente nuevamente")
            return 
        }
        let productoElegido = buscarProducto(codigo)
            carrito.push(productoElegido)
        let respuesta = confirm("¿Desea llevar otro producto?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
}

function verCarrito() {
    if (carrito.length > 0) {
        console.table(carrito)
    } else {
        console.warn("El carrito está vacío!")
    }
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carrito está vacío!")
        return 
    }
    const shopping = new Compra(carrito)
    alert(`El costo total es de $ ${shopping.obtenerSubtotal()}`)
    let respuesta = confirm("¿Desea confirmar su pago?")
        if (respuesta) {
            alert(shopping.confirmarCompra())
            carrito.length = 0
        }
}