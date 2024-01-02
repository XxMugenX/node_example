const {writeFile,readFile} =require('fs')
/* all module in fs stored in var fs */

readFile('./folder/sub/text.txt','utf8',
 function (err,result) {
/* function declearation method is used here even arrow head function can be used here too */

  if (err){
  console.log(err)
return
}
const first=result;
readFile('./folder/sub/texta.txt','utf8',
function (err,result) {
  if (err){
    console.log(err)
  return
}
const second=result;
writeFile('./folder/sub/combinedasync.txt',`${first} \n${second}`,
function (err,result){
  if(err){
    console.log(err)
    return
  }
  console.log(result)
})
}
)
})
/* const {writeFile,readFile}=require('fs')
destructured module */
/* 
readfile takes the path,then the character format Ascii,utf8, etc,then the callback function with an error and result or output argument passed into it 
first it reads the file, then decodes its according to the format encoder you chose...else it will give you the buffer of the data in the file path, then go along to display the result if there is no error..a buffer is stored data processed into code understood by memory readers..lol */
/* async approach to procesing tasks is that it goes right through a program doing each task as it moves, irrespective of if a certain task takes a longer amount of time,for those time taking tasks, it works on them by offloading them to the side to allow other faster tasks to be completed while those other tasks are worked on in the background*/