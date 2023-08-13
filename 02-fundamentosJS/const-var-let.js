console.log("USO DEL LET")
// USO DEL LET
let nombre = 'Wolverine';

if (true){
    let nombre = "Magneto"
    console.log(nombre)
}
console.log(nombre);

// USO DEL VAR
console.log("USO DEL VAR")
var nombre1 = 'Wolverine';

if (true){
    var nombre1 = "Magneto"
}
console.log(nombre1);

// USO DEL CONST
console.log("USO DEL CONST")
const nombre3 = 'Wolverine';

if (true){
    const nombre3 = "Magneto"
    // no tira error porque son contextos distintos, se utiliza un condicional aquí
}
console.log(nombre3);