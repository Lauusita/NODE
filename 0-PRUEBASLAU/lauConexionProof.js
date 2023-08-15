
const {datosResta}= require('./lauproof');
const argv = require('yargs')

    .option('s', {

        alias: 'suma',
        type: 'number',
        demandOption: true
    })
    .option('h', {

        alias: 'hasta',
        type: 'number',
        demandOption: true,
    }).argv


console.clear()

console.log(argv);
datosResta(argv.s, argv.h)
//.then((nombreArchivo=>console.log(nombreArchivo, 'creado')))
//s.catch((err)=>console.log(err));



// console.log(process.argv);




//     const [,,sum=9]= process.arg
//     const [,num]= sum.split('=')

//     const suma = num;

// const suma = 7;


// datosResta(suma)
// .then(datosSuma=>{console.log('Datos guardados exitosamente', datosSuma, '\n')})
// .catch(error=> console.log(error));
