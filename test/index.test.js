const path = require('path');
const readFile = require('../src/extract-files-links')
const { isValidationRequired, valid } = require('../src/valid-arguments');

const arrayLinkResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
        status: 200,
        statusText: 'OK'
    }
]

describe('extract-files-links - readFile::', () => {
    it('should be a function', () => {
        expect(typeof readFile).toBe('function')
    })
    it('should return an array with a link result', async () => {
        const filePath = path.resolve('./test/files/text.md')
        const result = await readFile(filePath)
        expect(result).toEqual(arrayLinkResult)
    })
    it('should return message \'None links found\'', async () => {
        const filePath = path.resolve('./test/files/text-without-links.md')
        const result = await readFile(filePath)
        expect(result).toBe('None Links Found')
    })
    it('should throw an error if the file does not exist', async () => {
        const filePath = path.resolve('./test/files/file-that-dont-exist.md')
        await expect(readFile(filePath)).rejects.toThrow('File Not Found')
    })
})

const longArguments = ['argument1', 'argument2', 'argument3'];
const shortArguments = ['argument1', 'argument2'];

describe('valid-arguments - isValidationRequired::', () => {
    it('should return True if there are more than 2 arguments', () => {
        const result = isValidationRequired(longArguments)
        expect(result).toBe(true)
    })
    it('should return False if there are less or equal than 2 arguments', () => {
        const result = isValidationRequired(shortArguments);
        expect(result).toBe(false)
    })
})

const validArguments = '--rootdir'
const invalidArguments = '--invalid-argument'

describe('valid-arguments - valid::', () => {
    it('should return True if has valid arguments', () => {
        const result = valid(validArguments)
        expect(result).toBe(true)
    })
    it('should throw an error if has invalid arguments', () => {
        expect(() => valid(invalidArguments)).toThrow(Error)
        expect(() => valid(invalidArguments)).toThrow('Invalid argument')
    })
})
