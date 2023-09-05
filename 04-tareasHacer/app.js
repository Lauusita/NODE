
require('colors'); // Se requiere el paquete de colores

const {
    guardarDB,
    leerDB
}= require('./helpers/guardarArchivo')


const {
    inquirerMenu,
    pausar, 
    leerinput,
    borrarListadoTareas,
    confirmar,
    mostrarListadoCheck
}= require('./helpers/inquirer');
// Se importa las funciones de la carpeta inquierer

const Tareas = require('./models/tareas'); // Se importa las funciones de la carpeta tareas

console.clear(); // Se limpia la consola antes de que se ejecute

const main = async()=>{ // Se crea una función main que se ejecutará al final
    
    let option=''; // Se define opciones como un string vacío
    const tareas = new Tareas(); // Se crea una nueva instancia para la clase Tareas
    const tareasDB= leerDB();

    if (tareasDB){ // cargar tareas
        tareas.cargarTarearPorArray(tareasDB);

    }

    do{ // Se crea un bucle do-while que se ejecutará mientras la opción sea distinta a 0

        option = await inquirerMenu(); // Se imprime el menú; se espera que la función dé resultado para ejecutarse

        switch (option) {
            case '1':
                const desc = await leerinput('Descripción '); // Se espera la función input para añadir una descripción
                tareas.crearTarea(desc); // se llama el parámetro de crearTarea que contiene un objeto donde se almacenará la descripción con su debida key
                
            break;
            case '2':
                tareas.listadoCompleto();// Se llama el mismo listado que se encuentra dentro de la clase donde ya estará almacenada la información del primer punto 
            break;
            case '3':
                tareas.listarPendientesCompletadas();
            break;
            case '4':
                tareas.listarPendientes();
            break;
            case '5':
                const ids = await mostrarListadoCheck(tareas.listadoArr);
                tareas.toggleComplete(ids);
                break;
            case '6':
                const id = await borrarListadoTareas(tareas.listadoArr); // Se coloca un await para que no se itere de nuevo las opciones
                const ok = await confirmar('Are you sure?') // esto se ejecutará después de ejecutar la constante id
                if (id !== '0'){ // se determina que, si la opción es distinta a cancelar (0), se ejecuta la función borrarTarea con argumento del id y se muestra en consola que la tarea se borró correctamente.
                    if (ok){
                        tareas.borrarTarea(id);
                        console.log('tarea borrada correctamente');
                        
                    } 
                }
            break;
            
        }
        
        guardarDB( tareas.listadoArr)
        

        question = await pausar(); // después de que se ejecute todo lo anterior, se utiliza el await para esperar a que se ejecute la función pausar, que contiene el enter
        
        

    }while(option != '0'); 

}


main(); // se imprime la función main