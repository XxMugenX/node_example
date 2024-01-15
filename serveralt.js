//creating server using event emitter api
const http=require('http')

const server=http.createServer()
//server extents the eventemitter classs
server.on('request',(req,res)=>{
console.log('server is listening')
res.end('yeah, you called')


})
server.listen(5000)