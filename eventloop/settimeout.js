console.log("first task")
setTimeout(() => {
  console.log("im going to be pushed to libuv, **cries, so ill appear only after synchronous code is done")
}, 2000);
console.log("third task")