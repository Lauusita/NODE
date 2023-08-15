
require('colors');


const mostrarMenu = ()=>{

    return new Promise((resolve)=>{

        console.clear();
        console.log('======================='.green);
        console.log(' SELECCIONE UNA OPCIÓN'.cyan);
        console.log('=======================\n'.green);

        console.log(`${'1.'.cyan} Crear una tarea`);
        console.log(`${'2.'.cyan} Listar tareas`);
        console.log(`${'3.'.cyan} Listar tareas completadas`);
        console.log(`${'4.'.cyan} Listar tareas pendientes`);
        console.log(`${'5.'.cyan} Listar tareas completadas`);
        console.log(`${'6.'.cyan} Borrar tarea`);
        console.log(`${'0.'.cyan} Salir\n`);


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout

        })
        readLine.question(`Seleccione una opción: `, (opt)=>{
            resolve(opt);
            readLine.close();
        })


        })

}   
    
    
const pause = ()=>{

        return new Promise(resolve =>{

            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
        
            });
            readLine.question(`\nPresione ${'ENTER'.green} para continuar\n `, (opt)=>{
                readLine.close();
                resolve();
            });
            
        });
        
        }
    

module.exports= {
    mostrarMenu,
    pause
}

