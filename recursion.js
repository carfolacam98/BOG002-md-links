
const realPath = require('path');
const realFs = require('fs');
var arrayMD=[]


function main(base){
  return new Promise((resolve,reject)=>{
    absolute(base);
    setTimeout(function(){ resolve(arrayMD) }, 2500);
  })
  
  
}

function absolute(path){
  realPath.isAbsolute(path) ==true ? directorio(path) : directorio(convert(path)); 
}


function directorio(link){ 
  realFs.lstatSync(link).isDirectory()  === true ? readDire(link) : verificarMD(link) }


function verificarMD(path){
  // console.log(path).​MARKDN y .MDOWN 
  if (realPath.extname(path) == ".md" || realPath.extname(path) == ".markdn"|| realPath.extname(path) == ".mdown" ) {arrayMD.push(path)}
  else{console.log('El archivo no puede ser leido, recuerde que su archivo debe ser Markdown ')}
}


function convert(path){
  let link=realPath.resolve(path)
link=link.replace(/\\/g,"/")
  // console.log(link)
  return link
  }
  

function readDire(path){
    realFs.readdir(path, (err, files) => {
      if (err)
        console.log(err);
      else {

       
        if(files.length==0){
          return
        }else{
        files.forEach(file => {
            
          absolute(path+"/"+file)
                })    
      }
      }
    })
  }


module.exports = {
  main,
 
};













