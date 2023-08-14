
require('colors');

const {mostrarMenu, pause} = require('./helpers/msg');

console.clear();

const main = async()=>{
    
    console.log('hhola mundo');

    let opt='';
    do{
        opt = await mostrarMenu(); // Se espera que la función dé resultado para ejecutarse
        console.log({opt});
        if(opt !== '0') await pause();

    }while(opt !== '0'); 

}


main();