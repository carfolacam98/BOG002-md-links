function resultmdlinks(array,bool){
var repetidos = {};
var rotos={}
array.forEach(function(letra){
  repetidos[letra.href] = (repetidos[letra.href] || 0) +1 ;
  rotos[letra.ok] = (rotos[letra.ok] || 0) +1 ;
});

let stad=Object.values(repetidos)
let total = stad.reduce((a, b) => a + b, 0);
let ok=Object.values(rotos)
let broke=ok[0]
let contUnique=0
 for (var i in stad){
 if (stad[i]==1){
   contUnique+=1
 }
}
bool==true ?
console.log(` Total : ${total} \n Unique: ${contUnique} \n Broken:${broke}`):console.log(` Total : ${total} \n Unique: ${contUnique} `)
}

module.exports = {
    resultmdlinks,
   
};