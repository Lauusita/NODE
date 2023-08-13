
const fs = require('fs');

const datosResta = async(suma=4, hasta = 10)=>{

    try {

        let salida= ''
        for (let i=0; i<=hasta;i++){
            salida += `${suma} + ${i} = ${suma+i}\n`
        }
        console.log(salida)
        fs.writeFileSync(`../03-basesNode/salida/suma ${suma}.txt`, salida)
        return `suma por ${suma} creada\n`;
        
    } catch (error) {
        throw error;
    }
    
}

module.exports={
    datosResta
};
