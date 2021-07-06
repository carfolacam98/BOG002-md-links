const { readFileSync } = require('fs');
const markdown = readFileSync("./prueba.md", {encoding: 'utf8'})
console.log(typeof(markdown))
console.log(markdown.includes("[Markdown](https://es.wikipppppedia.org/wiki/Markdown)"))