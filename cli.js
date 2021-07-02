#!/usr/bin/env node

const program = require("commander");

const  mdLinks  = require("./index");

const cli = (name, options, command) => {
     

     if (options.validate){
       mdLinks.mdLinks(name, {validate:true} )
     }
     else{mdLinks.mdLinks(name)}

  

};

program
  .version("0.1.0")
  .arguments("<path>")
  .option("-v, --validate")
  .option("-s, --stats")
  .action(cli);
program.parse(process.argv);





