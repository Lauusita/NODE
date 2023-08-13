
const {crearArchivo}= require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');




console.clear(); // limpia la consola

console.log(process.argv); // este es un proceso integrado de node, el cual muestra: 
// ubicación de instalación, ubicación del archivo, argumento añadido.

console.log(argv); // argv muestra el objeto que contiene { _: [], b: 4, '$0': 'index' },
// al pones .b busca dentro del objeto la b.

console.log(argv.b); 
console.log('base: yargs', argv.b);
console.log(argv.l);
console.log(argv.h);

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow))
.catch(err => console.log(err))






















// const argv = require('yargs')


// .option('b', {

//     alias: 'base',
//     type: 'number',
//     demandOption: true
// })
// .option('l',{

//     alias: 'listar',
//     type: 'boolean',
//     demandOption: true,
//     default: false
// })
// .check((argv, options)=>{
    
//     if (isNaN(argv.b)){
//         throw "la base tiene que ser un número";
//     }
//     return true;
// }).argv;
