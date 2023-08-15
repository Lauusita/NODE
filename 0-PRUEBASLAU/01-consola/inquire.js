const inquirer = require('inquirer')
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Qué desea elegir? ',
        choices: ['1. SLIPKNOT', '2. METALLICA', "3. MEGADETH"]

    }
]

const menu = async()=>{

    console.clear();
    console.log('======================='.green);
    console.log(' SELECCIONE UNA OPCIÓN'.cyan);
    console.log('=======================\n'.green);

    const opt = await inquirer.prompt(preguntas);
    return opt;

}

module.exports= {
    menu
}