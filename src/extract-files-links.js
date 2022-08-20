const chalk = require('chalk');
const fs = require('fs')
const validateLinks = require('./http-validation')

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const extractedLinks = [];
    let tmp;
    while ((tmp = regex.exec(text)) !== null) {
        extractedLinks.push({ [tmp[1]]: tmp[2] });
    }
    
    return extractedLinks;
}

function treatFileError(error) {
    throw new Error(chalk.red(error.code, 'File Not Found'));
}

async function getFileLinks(filePath) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(filePath, encoding)
        return extractLinks(text)
    } catch (error) {
        treatFileError(error);
    }
}

async function readFile(filePath) {
    const links = await getFileLinks(filePath)
    return links.length === 0 ? 'None Links Found' : validateLinks(links)
}

module.exports = readFile;
