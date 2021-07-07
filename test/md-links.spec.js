
const mdLinks = require('../index');
const { readFileSync } = require('fs');
const read=require('../funciones')
const recursion=require('../recursion');
const { array } = require('yargs');


describe('mdLinks', () => {
    test('Debe ser un objeto de tipo funcion', () => {
        expect(typeof mdLinks.mdLinks).toBe('function');
    });
    test('Debe retornar una promesa', () => {
        const route = './dir';
        expect(mdLinks.mdLinks(route) instanceof Promise).toBeTruthy();
    });})

describe('Leer archivo', () => {
    test('Debe traer un objeto string', () => {
        var markdown = readFileSync("./prueba.md", {encoding: 'utf8'})
            expect(typeof markdown).toBe('string');
        });      
        test('Debe incluir la linea de prueba', () => {    
            expect(readFileSync("./prueba.md", {encoding: 'utf8'})).toMatch(/es.wikipppppedia/)
        })
        ;})
 describe('Status response', () => {
            test('Debe ser una funcion', () => {
                
                    expect(typeof read.status).toBe('function');
                });              
            test('Debe retornar una promesa', () => {
        const route = 'https://es.wikipppppedia.org/wiki/Markdown';
        expect(read.status(route) instanceof Promise).toBeTruthy();
    });
    test('resolves to 400', () => {
        const route = 'https://es.wikipppppedia.org/wiki/Markdown';
        read.status(route).then(data => {
            expect(data).toBe(400);
            
          });
      });
    ;})
    describe('Recursion', () => {
        test('Debe ser una funcion', () => {
            expect(typeof recursion.main).toBe('function');
        });
        test('Debe retornar una promesa', () => {
            const route = './prueba.md';
            expect(recursion.main(route) instanceof Promise).toBeTruthy();
        });})

        test('resolves to array of links', () => {
            const route = './prueba.md';
            recursion.main(route).then(data => {
                expect(typeof(data)).toBe("object");
                
              });
          });