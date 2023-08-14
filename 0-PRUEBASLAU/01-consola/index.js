const { menuConsola, pausar } = require('./app');

console.clear();
require('colors');

const main= async()=>{

    opt='';
    do{
        opt = await menuConsola();
        console.log({opt});
        if (opt !== '0') await pausar();

    }while (opt!== '0')

}

main();

