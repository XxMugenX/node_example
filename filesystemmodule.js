const fs= require('fs')
/* const os= require('os') */
 const filea= fs.readFileSync('./folder/sub/text.txt','utf8')
 const fileb= fs.readFileSync('./folder/sub/texta.txt','utf8')
 fs.writeFileSync('./folder/sub/combined.txt',`${filea} \n${fileb}`)
const combi = fs.readFileSync('./folder/sub/combined.txt','utf8') 
console.log(combi)