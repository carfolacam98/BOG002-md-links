
const mdLinks = require('../index');
const { readFileSync } = require('fs');
const read=require('../funciones')
const request = require('request');

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
        // test.skip('Debe incluir la linea de prueba', () => {    
        //     expect(readFileSync("./prueba.md", {encoding: 'utf8'})).toMatch(/es.wikipppppedia/)
        // })
        ;})
//  describe('Status response', () => {
//             test('Debe ser una funcion', () => {
//                 
//                     expect(typeof read.status).toBe('function');
                    
//                     test('Debe retornar una promesa', () => {
    //     const route = './dir';
    //     expect(mdLinks.mdLinks(route) instanceof Promise).toBeTruthy();
    // });})
    
