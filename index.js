const chalk = require('chalk');
const fs = require('fs')

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'None file found'));
}

async function pegaArquivo(filePath) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(filePath, encoding)
        console.log(chalk.green(text))
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('operation concluded'));
    }
}

pegaArquivo('./arquivos/texto.md');