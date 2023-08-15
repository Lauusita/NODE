const {menu} = require('./01-consola/inquire');

console.clear();
require('colors');

const main= async()=>{

    opt='';
    do{
        opt = await menu();
        console.log(opt);
        

    }while (opt!== '0')

}

main();

