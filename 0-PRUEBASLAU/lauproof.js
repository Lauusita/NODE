
const fs = require('fs');

const datosResta = async(suma=4)=>{

    try {

        let salida= ''
        for (let i=0; i<=10;i++){
            salida += `${suma} + ${i} = ${suma+i}\n`
        }
        console.log(salida)
        fs.writeFileSync(`suma ${suma}.txt`, salida)
        return `suma por ${suma} creada\n`;
        
    } catch (error) {
        throw error;
    }
    
}

module.exports={
    datosResta
};
