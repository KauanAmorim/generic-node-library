const chalk = require('chalk');
const getFile = require('./index');

const arguments = process.argv;
const filePath = arguments[2];

async function getFileLinks(filePath) {
    const links = await getFile(filePath)
    console.log(chalk.yellow('Links list'), links)
}

getFileLinks(filePath);