
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

    const edades =[
        {
            id: 1,
            edad: 30
        },
        {
            id: 2,
            edad: 35
        },
        {
            id: 3,
            edad: 45
        },
    ]

const getEmpleado = (id)=>{
    
    const promise = new Promise((resolve, reject)=>{

        const empleado= empleados.find((e)=> e.id == id)?.nombre;
        if (empleado){
            resolve(empleado);
        }
        else (empleado)
            reject(`No existe empleado con id ${id}`)
        });

    return promise;
}
    
const getSalario = (id)=>{

    const promesa = new Promise((resolve, reject)=>{
        const salario = salarios.find((s)=>s.id==id)?.salario;
        if (salario){
            resolve(salario);
        }
        else {
            reject(`No existe el salario para el empleado con id ${id}`);
        }
    });
    return promesa
}

const getEdad= (id)=>{
    return new Promise((resolve, reject)=>{
        const edad = edades.find((a)=>a.id == id)?.edad;

        (edad)
            ? resolve(edad)
            : reject(`No se ha encontrado datos para el id ${id}`);
        // THIS IS A SIMPLIFY IF/ ESTO ES UN IF SIMPLIFICADO

    });
    return promesa2
}


const id= 20;
// getEmpleado(id)
//     .then(empleado => console.log(`el nombre del empleado es: ${empleado}`))
//     .catch(error => console.log(error));

// getSalario(id)
//     .then(salario => console.log(`el salario es: ${salario}`))
//     .catch(error => console.log(error));

// getEdad(id)
//     .then(edad => console.log(`la edad es: ${edad}`))
//     .catch(error => console.log(error));
    
let nombre;
getEmpleado(id)
    .then(empleado=> {
        nombre = empleado;
        return getSalario(id)
    }) 
    .then(salario=> console.log(`El salario del empleado ${nombre} es ${salario}`))
    .catch(err=>console.log(err));




