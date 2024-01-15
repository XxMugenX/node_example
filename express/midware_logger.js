//lets create a function that can house a certain functionallity, this is a middleware-it takes in the parameters used to create the functionality,along with a next parameter which allows its to pass onto the next middleware,the next is a function that needsto be invoked in order for the middleware to complete its functinallity 
const logger=(req,res,next)=>{
  const method =req.method
  const url=req.url
  const time=new Date().getFullYear()
  console.log(method,url,time)
  /* res.send('test3') */
  //this can help terminate the middleware
  next()
  //this also terminates the middleware by passing onto the next middleware, if available
} 
module.exports= logger