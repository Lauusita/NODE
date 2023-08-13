

const empleados = [
{
    id: 1,
    nombre: 'Laura'
},
{
    id: 2,
    nombre: 'Lautaro'
    
},
{
    id: 3,
    nombre: 'Sebastián'
}]

const salarios = [
    {
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 2000
        
    },
]

const getEmpleado = (id, callback)=>{
    const empleado= empleados.find((e)=> e.id == id)?.nombre;
    if ( empleado){
        callback(null, empleado);
    }
    else{
        callback(`el empleado ${id} no existe`)
    }
}


const getSalario = (id, callback)=>{
    const salario = salarios.find((s)=> s.id == id);
    if (salario){
        callback(null, salario);
    }
    else{
        callback(`El salario del empleado ${id} no existe`);
    }
}

getEmpleado(1, (err, empleado )=>{
    if (err){
        console.log('ERROR!')
        return console.log(err);


    }
    getSalario(1, (error, salario)=>{
        if (error){
            console.log('ERROR');
            return console.log(error);
        }
        console.log('el empleado', empleado, 'tiene un sueldo de', salario.salario);
        
    })
})


// getSalario(1, (error, salario)=>{
//     if (error){
//         console.log('ERROR');
//         return console.log(error);
//     }
//     console.log(`El salario del usuario es igual a `);
//     console.log(salario.salario);
// })