const inquirer = require('inquirer');


require('colors');


const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create a task`
            },
            {
                value: '2',
                name: `${'2.'.green} List tasks`
            },
            {
                value: '3',
                name: `${'3.'.green} List completed tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} List pending tasks`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete task(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Remove task(s)`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            },
        ]
    }

]


const inquirerMenu = async()=>{

    console.clear();
    console.log('======================='.green);
    console.log(' SELECT AN OPTION'.cyan);
    console.log('=======================\n'.green);

    const {option} = await inquirer.prompt(questions);
    
    return option;
}


const pausar = async()=>{

    const pause = [
    {
        type: 'input',
        name: 'answer',
        message: `Press ${'ENTER'.green} to continue`
        
    }
    ]
    console.log('\n')
    const {answer} = await inquirer.prompt(pause);
    return answer;

}

const leerinput = async(message)=>{

    const question=[

        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length === 0){
                    return 'Por favor, ingrese un valor'
                }
                return true
            }
        }
    ];

    const {desc}= await inquirer.prompt(question);
    return desc;
}

const borrarListadoTareas = async(tareas =[])=>{

    const choices = tareas.map((tarea, i)=>{

        const idx = `${i+1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' cancelar'
    }); // se añade una opción al inicio del arreglo

    
    const preguntas =[
        {
            type: 'list',
            name: 'id',
            message: 'borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id;

    }

    const confirmar = async(message)=>{

        const question = [
            {
                type: 'confirm',
                name: 'ok',
                message
            }
        ]
        const {ok} = await inquirer.prompt(question);
        return ok;
    }

    const mostrarListadoCheck = async(tareas =[])=>{ // se hace una función asincrónica, con un argumento en un array

        const choices = tareas.map((tarea, i)=>{ // se crea una constante que es igual a un método llamado map, que toma una función como argumento y esa función se aplica a cada elemento del arreglo original
    
            const idx = `${i+1}.`.green;
            return {
                value: tarea.id, // como value se toma el id seleccionado
                name: `${idx} ${tarea.desc}`,
                checked: (tarea.completado) ? true : false // se hace un condicional en el cual, si la tarea está en true, el check devolverá un true
            }
        });

        const pregunta =[
            {
                type: 'checkbox',
                name: 'ids',
                message: 'seleccionar',
                choices
            }
        ]
        const {ids} = await inquirer.prompt(pregunta);
        return ids;
    
        }


module.exports ={
    inquirerMenu,
    pausar,
    leerinput,
    borrarListadoTareas,
    confirmar,
    mostrarListadoCheck
}