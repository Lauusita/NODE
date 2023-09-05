
const fs= require('fs');
const colors = require('colors');

const crearArchivo= async(base=5, listar = false, hasta = 10)=>{

    try {
        
        let salida, consola= '';
        for (let i=1; i<=hasta; i++){
            salida += `${base} ${'x'.blue} ${i} = ${base*i}\n`
            consola += `${base} x ${i} = ${base*i}\n`
        }
        if (listar){
            console.log(consola);
            fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
            return `Tabla del ${base} creada!`;}

        

    } catch (error) {
        throw error;
    }
}
module.exports={
    crearArchivo
};
    