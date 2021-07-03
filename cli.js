#!/usr/bin/env node

const program = require("commander");
const  mdLinks  = require("./index");
const stat=require("./funcli")

     
const cli = (name, options) => {
   
     if (options.validate){
       mdLinks.mdLinks(name, {validate:true}).then(elem=>console.log(elem))
     }else if(options.stats){
      mdLinks.mdLinks(name, {validate:true}).then(elem=>stat.resultmdlinks(elem,false))
     } else if(options.statsvalidate ){
      mdLinks.mdLinks(name, {validate:true}).then(elem=>stat.resultmdlinks(elem,true))
     }
     
     else{mdLinks.mdLinks(name).then(elem=>console.log(elem))};}
     
    
     

  



program
  .version("0.1.0")
  .arguments("<path>")
  .option("-v, --validate")
  .option("-s, --stats")
  .option("-sv, --statsvalidate")
  .option("-vs, --validatestats")
  .action(cli);
program.parse(process.argv);





