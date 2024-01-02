const path =require('path')
console.log(path.sep)

/* const filepath = path.join('/folder','sub','text.txt')
console.log(filepath)
const base= path.basename(filepath)
console.log(base) */

const absolute=path.resolve(__dirname,'folder','sub','text.txt')
console.log(absolute)
/* shift+ctrl+a for commenting */