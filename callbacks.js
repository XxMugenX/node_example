
//this is used to establish control of sequence...a callback function is usde here,so that the function caries out its fuctionality first before another process which should be strictly after our firts file starts ....a callback is basically a function that is passed as an argument inyo snother function
function sum(x,y,callback){
  let result= x+y
  callback(result)
  //the result is fed to the callback
}
function displayans(ans){
  console.log(ans)
}
//this displays a result to the screen, therefore it can be used as a display callback fnction in the sum function, by taking the result fed into the calback func and logging it into the console
sum(2,+55,displayans)
/* function with a callback */
