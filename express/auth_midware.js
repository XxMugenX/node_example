const authorize=(req,res,next)=>{
  const {user}=req.query
  if (user == 'Mugen'){
    req.user={name:'Mugen',id:0}
    next()
  }
  else{
res.status(401).send('<h1>unauthorized</h1>')
  next()
}
}

module.exports=authorize