const http=require('http')

const server= http.createServer((req,res)=>{
/* takes a callback function as parameter */
/* res.write('yooo')
res.end()
console.log(req) */
if (req.url== '/'){
 /*  / is the symbol for root directory, or homepage */
  res.end('welcome to our homepage')
}
if (req.url=='/about'){
  res.end('here is a little info about us')
}
res.end(`
 <h1>NOT FOUND</h1>
 <P>page not available</p>`
)
/* default response is set here  */
})
server.listen(5000)
/* server needs a port to listen to */