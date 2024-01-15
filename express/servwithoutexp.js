const http=require('http');
const {readFileSync}=require('fs');
 
//get file content into this one
const homepage=readFileSync('./navbar-app/index.html')
const styles=readFileSync('./navbar-app/styles.css')
const browser_app=readFileSync('./navbar-app/browser-app.js')
const logo=readFileSync('./navbar-app/logo.svg')

//readfilesymc is used because this is the homepage , so we want oto get it to respond to us as soon as possible ,so, a synchronous code is needed

const server=http.createServer((req,res)=>{
  //console.log(req or res.method)
  const url=req.url
  console.log(url)
  //homepage
  if (url=='/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homepage)
    res.end()
    return
  }
  //styles
  if (url=='/styles.css'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(styles)
    res.end()
    return
  }
    //logo
    if (url=='/logo.svg'){
      res.writeHead(200,{'content-type':'image/svg+xml'})
      res.write(logo)
      res.end()
      return
    }
      //styles
  if (url=='/browser-app.js'){
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(browser_app)
    res.end()
    return
  }
    //about page
    if (url=='/about'){
      res.writeHead(200,{'content-type':'text/html'})
      res.write('<h1>oh well you do nt want to know about us</h1>')
      res.end()
      return
    }
  //404
  else{
      res.writeHead(404,{'content-type':'text/html'}).end('<h1>Page not found</h1>')
      return
    }
   
})

server.listen(5000,()=>{
  console.log('server is on')
})
/* server.on('',(parameter(s))=>{


}) */
/* 
port can be any number , preferably more that 1024 */