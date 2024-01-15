const express= require('express')
const app=express()
const logger=require('./midware_logger')
const authorize=require('./auth_midware.js')
const morgan=require('morgan')
//a logger
app.use([authorize,morgan('tiny')])
//makes the middleware avavilable to all get
//multiple middleware can be added through an array
/* app.use('/api',logger) */
/* sends this middle ware into all the paths available */
/* when a path is provided, it sends the middleware into all the path children of that path and the path itself*/
app.get('/',(req,res)=>
{
  /*  const {user}=req.query  */
  res.status(200).send(`<h1>welcome to the homepage ${req.user.name}</h1>`)
})
/* app.get('/about',logger,(req,res)=>
the middleware can be passed into the function as parameter,this middleware doesnt need its own parameter as express allows us to pass the necessery parameters  into the main middleware function
multiple middleware can be added through an array{
  res.send('About us')
}) */
app.get('/api/products',(req,res)=>{
  res.send('products')
})
app.get('/api/items',(req,res)=>{
  res.send('item')
})

app.listen(5000,()=>{
  console.log('server is listening on port 5000')
})