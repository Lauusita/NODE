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
                name: '1. Create a task'
            },
            {
                value: '2',
                name: '2. List tasks'
            },
            {
                value: '3',
                name: '3. List completed tasks'
            },
            {
                value: '4',
                name: '4. List pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Remove task(s)'
            },
            {
                value: '0',
                name: '0. Exit'
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

module.exports ={
    inquirerMenu,
    pausar
}