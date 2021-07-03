
const functions = require('./funciones.js');

const directory = require('./recursion.js');
//REPASO OPERADOR CONDICIONAL TERNIARIO



function mdLinks  (MD,  options = { validate: false }) {
  return new Promise ((resolve,reject)=>{
  options.validate==true? userWrote=options.validate: (userWrote=options.validate)
    directory.main(MD).then(res=>res.forEach(element => {
       element!=undefined? resolve (functions.readLinks(element,userWrote)):reject(console.log("El elemento no es valido "))       
      }))})};
   
           
    



module.exports = { mdLinks 
 
};