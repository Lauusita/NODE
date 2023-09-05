require('colors');
const {menu} = require('./inquire')

const menuConsola = ()=>{

    console.clear()
    let opt = '';

    do{
        

        switch (opt) {
            case '1':
                console.log('s')
                break;
        }


    } while(opt != '0')
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