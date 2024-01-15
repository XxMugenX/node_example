const fs= require('fs').promises
for(let i =0; i< 1000; i++){
    try{
  fs.writeFile('./folder/sub/largefile.txt' ,`count ${i} \n`, {flag:'a'})}
  catch(err){
    console.log(err)
  }
}