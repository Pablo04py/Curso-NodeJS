//Funcion flecha

// Declaracion de una funcion tradicional en JS
function sumar(a, b) {
    return a + b
}

sumar(12,4) //Invocacion de la funcion


//Declaracion de una funcion flecha

let suma2 = (a) => a + 2

console.log(suma2(2))  //Invocacion de la funcion flecha


const sumar3 = (a, b, c) => {
    console.log('Suma: ' + a, b, c)
    return a+b+c
}

//Callbacks

function mensaje () {
    console.log('Esta funcion se ejecutara a los 3 segundos')
}


setTimeout(mensaje, 3000) //La funcion mensaje se ejecuta a los 3 segundos

setTimeout( function() {

})

let v = 'hola'

if(v) {
    console.log("v es verdadero", v);
}

const esVerdadero = new Boolean(false)

if(esVerdadero) {
    console.log("v es verdadero");
}

console.log(!!esVerdadero);
