//Array.map()

const personas = [
    {
        nombre: "Pablo",
        edad: "18"
    },
    {
        nombre: "Sergio",
        edad: "15"
    }
]

console.log(
    personas.map(persona => +persona.edad)
)

//Array reduce 

const vendedores = [
    {
        id: 1,
        idCiudad: 1,
        nombre: "Jose"
    },
    {
        id: 2,
        idCiudad: 2,
        nombre: "Antonio"
    },
    {
        id: 3,
        idCiudad: 3,
        nombre: "Jorge"
    }
]

const ciudades =[
    {
    id: 1,
    ciudad: "Aregua"
    },
    {
        id: 2,
        ciudad: "Asuncion"
    },
    {
            id: 3,
            ciudad: "Pilar"
    }
]


const vendedorPorCiudad = vendedores.reduce((resultados, vendedor) =>{
    
    const {idCiudad, nombre} = vendedor

    const buscarCoincidencia = ciudades.find(ciudad => ciudad.id === idCiudad)

    resultados.push({ 
        nombre, ciudad: buscarCoincidencia.ciudad
      })

    return resultados
}, [])


console.log(vendedorPorCiudad);


// Array forEach

for(let i in ciudades) {
    console.log(ciudades[i].ciudad);
}

ciudades.forEach(c => console.log(c.ciudad))



// Array filter

const numeros = [10, 15, 2, 1, 5, 0]

console.log(numeros.filter(num => num>2));