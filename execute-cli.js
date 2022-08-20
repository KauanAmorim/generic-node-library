const readFile = require('./extract-files-links');
const validArguments = require('./valid-arguments');
const readDirectory = require('./extract-dir-links')

async function executeCLI(arg) {
    if(validArguments.isValidationRequired(arg)){
        if(validArguments.valid(arg[2])){

            const argument = arg[2]
            const filePath = arg[3]

            switch (argument) {
                case '--rootdir':
                    console.log(await readDirectory(filePath));
                    break;
                case '--filepath':
                    console.log(await readFile(filePath));
                    break;
            }
        }
    } else {
        const filePath = './files/';
        console.log(await readDirectory(filePath));
    }    
}

module.exports = executeCLI;