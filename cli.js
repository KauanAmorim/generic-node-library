const chalk = require('chalk');
const getFileLinks = require('./extract-links');
const validArguments = require('./valid-arguments');
const validateLinks = require('./http-validation');

const arguments = process.argv;
const filePath = arguments[2];

async function listLinks(filePath) {
    const links = await getFileLinks(filePath)
    console.log(chalk.yellow('Links list'), links)
}

async function checkLinks(filePath) {
    const links = await getFileLinks(filePath)
    console.log(chalk.yellow('valid links'), await validateLinks(links))
}

if(validArguments.isValidationRequired(arguments)){
    if(validArguments.valid(arguments)){
        switch (arguments[3]) {
            case '--validate-links':
                return checkLinks(filePath);
            case '--rootdir':
                return console.log(chalk.redBright('This functionality under development'));
            case '--filepath':
                return console.log(chalk.redBright('This functionality under development'));
            default:
                return console.log(chalk.redBright('This functionality don\'t exist'));
        }
    }
} else {
    listLinks(filePath)
}