const chalk = require('chalk');
const fs = require('fs')

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const extractedLinks = [];
    let tmp;
    while ((tmp = regex.exec(text)) !== null) {
        extractedLinks.push({ [tmp[1]]: tmp[2] });
    }
    return extractedLinks;
}

function treatError(error) {
    console.log(error)
    throw new Error(chalk.red(error.code, 'None file found'));
}

async function getFile(filePath) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(filePath, encoding)
        console.log(extractLinks(text))
    } catch (error) {
        treatError(error);
    } finally {
        console.log(chalk.yellow('operation concluded'));
    }
}

module.exports = getFile