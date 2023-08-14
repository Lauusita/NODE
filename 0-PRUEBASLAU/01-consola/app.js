require('colors');
const menuConsola = ()=>{

    return new Promise(resolve=>{
        console.clear()
        console.log('BANDAS METAL\n'.magenta);
        console.log('1. SLIPKNOT'.red);
        console.log('2. METALLICA'.green);
        console.log('3. KORN'.yellow);
        console.log('4. AVENGED SEVENFOLD'.cyan);
        console.log('5. MEGADETH'.blue);
        console.log('0. SALIR\n')

        const log = require('readline').createInterface({

            input: process.stdin,
            output: process.stdout

        })

        log.question('Seleccione una opción: ', (opt)=>{
            resolve(opt);
            log.close();
            

        })
    })
}

const pausar = ()=>{

    return new Promise(resolve=>{

        const log = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        log.question(`\nPresione ${'ENTER'.green} para continuar\n `, opt=>{
            log.close();
            resolve();

        })

    })

}

module.exports= {
    menuConsola,
    pausar
}