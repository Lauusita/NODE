
require('colors');

const {inquirerMenu }= require('./helpers/inquirer');

console.clear();

const main = async()=>{
    
    console.log('hhola mundo');

    let opt='';
    do{
        opt = await inquirerMenu(); // Se espera que la función dé resultado para ejecutarse
        console.log({opt});
        

    }while(opt !== '0'); 

}


main();