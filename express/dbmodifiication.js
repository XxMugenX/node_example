const express=require('express')
const app=express()
let{people}=require('./data')


//static assets
app.use(express.static('./methods-public'))
//parse the payload form data into body type data and makes it available for use globally
app.use(express.urlencoded({extended: false}
//extended flag allows/disallows  access to form values
  ))

//http methods
//get method:reads data from a database
app.use(express.json())
app.get('/api/people',(req,res)=>{
res.status(200).json({success:true, data:people})
})
app.post('/api/people',(req,res)=>{
  const {name}=req.body
  if(!name){
    return  res.status(400).json({success:false, message:'please provide a name'})
  }
 return res.status(201).json({success:true,person:name}
/*   maps name into people array */
)

})
//post methods inserts data, sends data into a database
app.post('/api/poster/people',(req,res)=>{
const {name}=req.body
if(!name){
  return  res.status(400).json({success:false, message:'please provide a name'})}
else{
  res.status(401).json({success:true, message:`please provide credentials`})
}

})
app.post('/login',(req,res)=>
//path is gotten from the form action
{ 
 /* console.log(req.params) */ 
const {name}=req.body
if(name){
  res.status(200).send(`welcome ${name}`)
}
else{
res.status(401).send('please provide credentials')
}
})
app.put('/api/people/:id',(req,res)=>{
const{id}=req.params
const{name}=req.body
console.log(id, name)
res.send(`hey ${name}, you have been slotted in space ${id} `)
})

app.listen(5000,()=>{
console.log('server is listening on port 5000')
})