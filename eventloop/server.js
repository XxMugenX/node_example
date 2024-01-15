const http=require('http')

const server= http.createServer((req,res)=>{
//event being listened to
/* almost same as ee.emit('event',callbackfunc)
the callback is the respond at the end of the server
the event being listened to is what ever is outside the response which requests for the response event */
console.log('requesting event') //req
//event action
res.end('heyoo')//res
})

server.listen(5000,()=>{
 console.log('server is listening on port: 5000')

})