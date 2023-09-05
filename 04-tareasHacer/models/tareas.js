const { option } = require('yargs');
const Tarea = require('./tarea')

class Tareas { // se crea una nueva clase

    _listado = {}; // se crea un objeto vacío

    get listadoArr(){ // retorna un nuevo arreglo

        const listado = [];
        Object.keys(this._listado).forEach(key =>{ // se crea una función en la que se extraen todas las llaves encontradas
            const tarea = this._listado[key];
            listado.push(tarea)
        });
        return listado;
    }
    constructor(){ // Se encarga 

        this._listado = {};
    }

    crearTarea( desc = ''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id]= tarea;

    }

    cargarTarearPorArray = ( tareas = [])=>{
        
        tareas.forEach((tarea=>{
            this._listado[tarea.id]= tarea;
            
        })); 

    }

    listadoCompleto(){ 

        this.listadoArr.forEach((tarea, i)=>{ // Se hace un forEach que recorre las tareas hasta su índice
        
            const {desc, completado}= tarea; // se desestructura la descripción y si está completado o no
            const complete = (completado != null) // se rectifica que si completado es distitno de null, será verde, sino, será rojo
                            ? 'Completada'.green
                            : 'Pendiente'.red;
            
            const indice = i+1 // ya que los índices se inicializan con 0, se le suma 1
            console.log(`${indice}. `.green + `${ desc} ${complete}` );
            
        }); 
    }

    borrarTarea(id = ''){

        const tarea = new Tarea(id);
    
        if (this._listado[id]){
            delete this._listado[id];
            

        }        
    }

    listarPendientesCompletadas( completadas = true ){ // Se tiene la misma lógica del listado completo, solo que esta vez se tendrá un iterador, un condicional que, si completado es distinto a nullo, se tomará la descripción y el iterador empezará y se muestra en consola

        console.log()
        let contador =0;
        this.listadoArr.forEach((tarea)=>{
            
            let {desc, completado}= tarea;
            if (completado != null){
                {desc};
                contador +=1
                console.log(`${(contador + '.').green} ${ desc} :: ${completado}` );
            }
        })

    }

    listarPendientes(pendientes = true){ // se tiene la misma lógica pero para la lilsta de pendiente, que es lo mismo, sino que tiene un condicional que si es false, o sea, null, se desestructura la descripción actualizada y se realiza el mismo proceso que el listar.

        console.log()
        let contador =0
        this.listadoArr.forEach(tarea=>{
            let {desc, completado}= tarea;
            if (!completado){
                {desc};
                // ya que los índices se inicializan con 0, se le suma 1
                contador +=1
                const complete = 'Pendiente'.red;
                console.log(`${(contador + '.').green} ${desc} :: ${complete}` );
            }
        })
    }
}


module.exports = Tareas;