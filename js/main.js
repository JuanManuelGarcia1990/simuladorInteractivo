
let mensajeCosto = ""
let continuar = true

const mensajeInicial = "Ingresa el código del producto a consultar. \n" +
                       "a) Monitor Samsung 24 pulgadas \n" + 
                       "b) Cpu Ryzen5 3400G Ssd 1tb 16gb\n" +
                       "c) Cpu Ryzen7 5700G Ssd 1tb 32gb \n" +
                       "d) Cpu I7 10700F GTX 1660TI 6GB Ssd 1tb 32gb \n" +
                       "e) Teclado mecánico gamer Philips"
                       "f) Mouse Gamer Logitech"

function iniciarConsulta() {
    let seleccion = prompt(mensajeInicial).toLowerCase().trim()
    
    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" && seleccion !== "d" && seleccion !== "e") {
        console.warn("Ingresa un código válido, por favor.")
        return 
    }

    switch(seleccion) {
        case "a":
            mensajeCosto = "El Monitor Samsung 24 pulgadas vale $ 62599.00"
            break
        case "b":
            mensajeCosto = "El Cpu Ryzen5 3400G Ssd 1tb 16gb vale $ 123859.00"
            break
        case "c":
            mensajeCosto = "El Cpu Ryzen7 5700G Ssd 1tb 32gb vale $ 175500.00"
            break
        case "d":
            mensajeCosto = "El Cpu I7 10700F GTX 1660TI 6GB Ssd 1tb 32gb vale $ 245879"
            break
        case "e":
            mensajeCosto = "El Teclado mecánico gamer Philips $ 7850.00"
            break
        case "f":
            mensajeCosto = "El Mouse Gamer Logitech $ 12300"
            break
        default:
            console.error("Ingrese un número de opción válido.")
            return 
    }
    alert(mensajeCosto)
}

function preguntarPrecios() {
    while(continuar) {
        iniciarConsulta()
        continuar = confirm("¿Necesita averiguar algun otro producto?")
    }
}