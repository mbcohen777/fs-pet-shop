import fs from 'fs'
const subCommand = process.argv[2]

// if (subCommand == 'read') {

// }
// else if (subCommand == 'create') {
// }
// else if (subCommand == 'update') {
// }
// else if (subCommand == 'destroy') {
// }

switch(subCommand) {
    case 'read': {
        fs.readFile('./pets.json', 'utf-8', (err, data) => {
            const data = JSON.parse(str);
            console.log(data[0], 'data')
    })
}
    case 'create':
    case 'update':
    case 'destroy':
    default: {
        console.log('Usage: node pets.js [read|create|update|destroy]')
    }
}


// console.log(subCommand);

// console.error('Usage: node pets.js [read | create | update | destroy]');