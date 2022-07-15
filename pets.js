// import {writeFile} from 'fs';
import {readFile, writeFile} from 'fs/promises';

const subCommand = process.argv[2]
const index = process.argv[3]

switch (subCommand) {
    case 'read':
        {

            readFile('pets.json', 'utf-8').then(str => {
                let data = JSON.parse(str);
                if (index) {
                    console.log(data[index]);
                } else {
                    console.log(data);
                }

            });

            break;
        }
    case 'create':
        // below writes to pets.JSON but replaces previous entries with the created entry.
        {
            let [index, age, kind, name] = process.argv;
            readFile('pets.json', 'utf-8').then(str => {
                let data = JSON.parse(str);
                if (!data[index]) {
                    const pet = {}
                    pet.age = Number(`${process.argv[3]}`);
                    pet.kind = process.argv[4];
                    pet.name = process.argv[5];
                    let petStr = JSON.stringify(pet);
                    writeFile('pets.json', petStr, function(error){
                        if(error) {
                            console.log(error)
                        } else {
                            console.log(pet)
                        }
                    })
                
                } else {
                    console.error('Usage: node pets.js create INDEX AGE KIND NAME')
                    process.exit(1);
                }
            });
            
        }
        break;

    case 'update':
        {

            break;
        }
    case 'destroy':
        {

            break;
        }
    default:
        {
            console.log('Usage: node pets.js [read | create | update | destroy]');
            process.exit(1);

        }
}
