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
app.get('/api/people',(req,res)=>{
res.status(200).json({success:true, data:people})
})
//post methods inserts data, sends data into a database
app.post('/login',(req,res)=>
//path is gotten from the form action
{
/* console.log(req.body) */
const {name}=req.body
if(name){
  res.status(200).send(`welcome ${name}`)
}
else{
res.status(401).send('please provide credentials')
}
})



app.listen(5000,()=>{
console.log('server is listening on port 5000')
})