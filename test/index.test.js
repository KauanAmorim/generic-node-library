const path = require('path');
const getFileLinks = require('../extract-links')

const arrayLinkResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('getFileLinks::', () => {
    it('should be a function', () => {
        expect(typeof getFileLinks).toBe('function')
    })
    it('should return an array with a link result', async () => {
        const filePath = path.resolve('./test/files/text.md')
        const result = await getFileLinks(filePath)
        expect(result).toEqual(arrayLinkResult)
    })
})
