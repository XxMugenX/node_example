const express=require('express')
const {products}=require('./data')

const app=express()

app.get('/',(req,res)=>{
  res.status(200).send('<h1>HOMEPAGE</h1><a href="/api/products">products</a>')

})
app.get('/api/products',(req,res)=>{
const prod=products.map((product)=>{
const  {id,name,image}=product
return {id,name,image}

})
res.json(prod)
})
app.get('/api/products/:productID',(req,res)=>{
/*  console.log(req)
 console.log(req.params) */
/*  params method, as in parameter, can be used to get the parameter info of a data in string format */
 const  {productID}=req.params
const singleprod= products.find((product)=>
product.id==Number(productID))
if(singleprod== null)
/* or if(!singleprod) */{
  return res.status(404).send('<h1>product not found</h1>')
}
else{
  res.json(singleprod) 
/*checks the comtent of the singleprod
 console.log(singleprod) */
}/* 
/:a placeholder for what should be there is placed here */
})
app.get('/api/products/:prodctID/reviews/:reviewsID',(req,res)=>{
console.log(req.params)
res.send('<h1>a test</h1>')

})
app.get ('/api/v0/query',(req,res)=>{
  const {search,limit}=req.query
  console.log(req.query)

 /* 
  let sortedproduct= products */
 let sortedproduct=[...products]
 /* 
 ... means from the start to the end */
/* console.log(sortedproduct) */
if (limit){
    sortedproduct=sortedproduct.slice(0,Number(limit))
    if (limit==0){
   return  res.status(200).send('limit cannot be null')
   //the response should be ruturned in conditional statements so as not to tell express to continue reading the code which could lead the  server to multiple responses, bringing about an Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    }
}
if (search){
  sortedproduct=sortedproduct.filter((product)=>{
    return product.name.startsWith(search)
  })
  if(sortedproduct< 1){
    return res.status(200).json({
      success:true,
      data:['not found']})
  }
}
res.status(200).json(sortedproduct)
/* res.send('<h1>test2</h1>') */
})
app.all('*',(req,res)=>{
  console.log('request not found')
res.status(404).send('<h1>page not found</h1>')

})
app.listen(5000,()=>{
console.log('server is lstening on port 5000')
  
})