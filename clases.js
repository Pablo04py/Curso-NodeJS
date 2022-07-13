

class Producto{
    constructor(){}

    calcularPrecioTotal(cantidad, precio){
        return cantidad*precio
    }
}

class Bebida extends Producto{
    constructor(){
        super()
    }

    listarBebidas(){
        return ['jugo', 'gaseosa', 'Cerveza']
    }
    obtenerPrecioProductoBebida() {
        const precioJugo = 5000
        const cantidad = 5

        const costoTotal = this.calcularPrecioTotal(cantidad, precioJugo)
        return costoTotal
    }
}


function calcular ({monto, cantidad, nombre}) {
    console.log(monto, cantidad, nombre);
    return monto*cantidad
}

const objeto = {
    cantidad: 5000, monto: 5, nombre: 'Pablo'
}
console.log(calcular(objeto))


//******************** */

const objeto2 = {
    nombre: "Pablo",
    apellido: "Portillo",

}

console.log(objeto2)