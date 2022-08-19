const path = require('path');
const getFileLinks = require('../extract-links')
const { isValidationRequired, valid } = require('../valid-arguments');

const arrayLinkResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('extract-links - getFileLinks::', () => {
    it('should be a function', () => {
        expect(typeof getFileLinks).toBe('function')
    })
    it('should return an array with a link result', async () => {
        const filePath = path.resolve('./test/files/text.md')
        const result = await getFileLinks(filePath)
        expect(result).toEqual(arrayLinkResult)
    })
    it('should return message \'None links found\'', async () => {
        const filePath = path.resolve('./test/files/text-without-links.md')
        const result = await getFileLinks(filePath)
        expect(result).toBe('None links found')
    })
    it('should throw an error if the file does not exist', async () => {
        const filePath = path.resolve('./test/files/file-that-dont-exist.md')
        await expect(getFileLinks(filePath)).rejects.toThrow('None file found')
    })
})

const longArguments = ['argument1', 'argument2', 'argument3', 'argument4', 'argument5'];
const shortArguments = ['argument1', 'argument2', 'argument3'];

describe('valid-arguments - isValidationRequired::', () => {
    it('should return True if there are more than 3 arguments', () => {
        const result = isValidationRequired(longArguments)
        expect(result).toBe(true)
    })
    it('should return False if there are less or equal than 3 arguments', () => {
        const result = isValidationRequired(shortArguments);
        expect(result).toBe(false)
    })
})

const validArguments = ['argument1', 'argument2', 'argument3', '--rootdir']
const invalidArguments = ['argument1', 'argument2', 'argument3', '--invalid-argument']

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
