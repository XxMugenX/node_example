const express=require('express')
const app=express()
const {products}=require('./data')

app.get('/',(req,res)=>{
/* res.json([
  {name:'peanut'},
  {name:'roetgen'}
] */
res.status(200).send('<h1>HOMEPAGE</h1><a href="/api/products">products</a>')

//json is a middleware method under the express module,it can be used to send response to a server in json format...the json takes an object as a parameter and returns it when requested
})
app.get('/api/products',(req,res)=>{
  //method map takes an existing array and maps a new values over it ,by performing a kind of operation on the array passed into it , and storing it in an empty array, it takes a call back function as parameter
const newproduct= products.map((product)=>{
    //destructure product and make selected parts available
   const {id,name,image}=product
   //return the selected parts that you made available
   return{id,name,image}
  //now newproduct will take the return value as its value
})
res.json(newproduct)
})
app.get('/api/products/1',(req,res)=>{
  const  singleprod= products.find((product)=>
    product.id== 1
  )
  res.json(singleprod)
})
app.all('*',(req,res)=>{
console.log('<h1>unknown page</h1>')
res.status(404).send('<h1>page not found...opps</h1>')
})
app.listen(5000,()=>{
console.log('server is listening on port 5000')

})