const express = require('express')
const path=require('path')
const app= express()

//use nethod for setting up static, a middleware
app.use(express.static('./public'))

app.get('/',(req,res)=>{
  console.log('homepage sent')
//sendfile method,used to make necessary files available
res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

})

app.all('*',(req,res)=>{
res.status(404).send('<h1> PAGE NOT FOUND</h1>')

})

app.listen(5000,()=>{
console.log('server is listening on port 5000')
})