
const {datosResta}= require('./lauproof');
const argv = require('yargs')

    .option('b', {

        alias: base,
        type: 'number',
        demandOption: true
    })
    
    
    
    .argv


console.clear()
console.log(argv);




// console.log(process.argv);




//     const [,,sum=9]= process.arg
//     const [,num]= sum.split('=')

//     const suma = num;

// const suma = 7;


// datosResta(suma)
// .then(datosSuma=>{console.log('Datos guardados exitosamente', datosSuma, '\n')})
// .catch(error=> console.log(error));
