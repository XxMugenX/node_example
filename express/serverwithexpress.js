const express=require('express')
/* const express=require('express')(), this invokes express module immediately , then we can use express.method from the get go */


const app=express()
/* get method:('url path, which is basically the request of the user', (req,res callback function)=>{ what you want to do when this url path is requested using res.send method}) */

app.get('/',(req,res)=>{
  console.log('homepage sent')
 /*  status method can and should be chained with the send method to give us more control over what the browser does */
res.status(200).send('HOMEPAGE')
})
app.get('/about',(req,res)=>{
console.log('about page sent')
res.status(200).send('ABOUT US')
})
//all method handles all the http verbs, the get,put,post,delete etc, it takes in a path and a req/res callback function, it is the response given to overwrite a default one
app.all('*',(req,res)=>{
res.status(404).send('<h1>oops!...we cant seem to find what you requested</h1>')

})
app.listen(5000,()=>{
console.log('server is listening on port 5000')

})

