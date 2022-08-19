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

function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'None file found'));
}

async function pegaArquivo(filePath) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(filePath, encoding)
        console.log(extractLinks(text))
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('operation concluded'));
    }
}

module.exports = pegaArquivo