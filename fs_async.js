const fs= require('fs').promises
//gives all methods the acces to the promise method
/* const util=require('util')

const readfilepromise=util.promisify(fs.readFile)
const writefilepromise=util.promisify(fs.writeFile) */

async function start(){
/*   function declearation of writing async function */
try{
const file1= await fs.readFile('./folder/sub/text.txt','utf8')
const file2= await fs.readFile('./folder/sub/texta.txt','utf8')
const file3= await fs.readFile('./folder/sub/promise.txt','utf8')
fs.writeFile('./folder/sub/promise.txt',`here lies where your text stays and the other files says \n ${file1} and ${file2}`)

console.log(file1 ,'\n',file2,'\n',file3)
}
catch(err){
  console.log(err)
}
/* try and catch blocks are to handle the event of an error happening */
}
start()

/* 
*/


/* const start=async ()=>{
  const here= await content('./folder/sub/text.txt') 
  arrow method of writing async function*/


  /* const content=(filepath)=>{
  return new Promise((resolve,reject)=>{
   fs.readFile(filepath,'utf8',(err,result)=>{
    if(err){
   reject(err)
       
}
else{
  resolve(result)
 how a promisify method works
}
})
})
} 
content('./folder/sub/text.txt')
.then((result) =>console.log(result))
.catch((err)=> console.log(err)) 

or
async function start(){
/*   function declearation of writing async function */
/* try{
  const file1= await content('./folder/sub/text.txt')
  const file2= await content('./folder/sub/texta.txt')
  console.log(file1 ,'\n',file2)
  }
  catch(err){
    console.log(err)
  } */
  /* try and catch blocks are to handle the event of an error happening */
/*   }
  start() */
