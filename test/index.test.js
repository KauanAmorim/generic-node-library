const getFileLinks = require('../extract-links')

test('getFileLinks need tobe a function', () => {
    expect(typeof getFileLinks).toBe('function')
})