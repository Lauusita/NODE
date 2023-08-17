
require('colors');

const {inquirerMenu }= require('./helpers/inquirer');
const {pausar} = require('./helpers/inquirer');

console.clear();

const main = async()=>{
    
    console.log('hhola mundo');

    let option='';
    let question= '';
    do{
        option = await inquirerMenu(); // Se espera que la función dé resultado para ejecutarse
        console.log({option});
        
        question = await pausar();

    }while(option != '0'); 

}


main();