
const mdLinks = require('../index');



describe('mdLinks', () => {
    test('should be a function', () => {
        expect(typeof mdLinks.mdLinks).toBe('function');
    });
    test('should returns a promise', () => {
        const route = './dir';
        expect(mdLinks.mdLinks(route) instanceof Promise).toBeTruthy();
    });})


