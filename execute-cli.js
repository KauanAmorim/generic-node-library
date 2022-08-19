const path = require('path');
const getFileLinks = require('./extract-links');
const validArguments = require('./valid-arguments');
const validateLinks = require('./http-validation');

async function checkLinks(filePath) {
    const links = await getFileLinks(filePath)
    return validateLinks(links)
}

async function executeCLI(arg) {
    if(validArguments.isValidationRequired(arg)){
        if(validArguments.valid(arg[2])){
            switch (arg[2]) {
                case '--rootdir':
                    
                    return console.log(chalk.redBright('This functionality under development'));
                case '--filepath':
                    const filepath = arg[3]
                    console.log(await checkLinks(filepath))            
            }
        }
    } else {
        const filePath = './arquivos/texto.md';
        console.log(await checkLinks(filePath))
    }    
}

module.exports = executeCLI;