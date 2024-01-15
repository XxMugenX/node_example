const {createReadStream}=require('fs')
const { size } = require('lodash')
//has eventEmitter as a class

const stream= createReadStream('./folder/sub/largefile.txt')
stream.on('data',(result)=>{
/* takes in an eventname and a callback function which takes a parameter */
console.log(result)
stream.on ('error',(err)=>{

  consile-log(err)
})
})
//stream.on with data event reads data pushed to the callback function in chunks, 64kb in this case by default, before pushing it to the console,
//the data being pushed to the stream can be chained to some kind of method available on it
//default size of buffer is 64kb
/* highWaterMark- controls size
   encoding controls character format, changesthe default buffer format to whatever encoding format is specified 
const stream= createReadStream('./folder/sub/largefile.txt',{highWaterMark:100000}) size is in bytes 

const stream= createReadStream('./folder/sub/largefile.txt',{encoding:utf8})*/