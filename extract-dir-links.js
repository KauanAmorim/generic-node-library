const chalk = require('chalk');
const fs = require('fs')
const path = require('path');
const readFile = require('./extract-files-links');

function treatDirectoryError(error) {
    throw new Error(chalk.red(error.code, 'Directory Not Found'));
}

async function readDirectory(dirpath) {
    try {
        const filesPath = await fs.promises.readdir(dirpath);
        const links = Promise.all(filesPath.map(async (filePath) => {
            return readFile(path.join(dirpath, filePath))
        }))
        return links
    } catch (error) {
        treatDirectoryError(error);
    }
}

module.exports = readDirectory
