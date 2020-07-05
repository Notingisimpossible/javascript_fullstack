const throttle = (func,wait=500) => {
  // 先拿到上一次执行函数的时间
  let lastTime = 0
  return function(...args) {
    let now = +new Date()
    // 判断一下这一次的点击当前的时间和上一次点击的时间差是否大于await
    if (now - lastTime > wait) {
      lastTime = now
      func.apply(this, args)
    }
  }
}

assgin()
// function jieliu(fn,deray) {
//   let flage = true
//   return (...args)=>{
//       if(!flage) return
//       flage = false
//       setTimeout(()=>{
//           fn.apply(this,args)
//           flage = true
//       },deary)
//   }
// }

// var app =  document.getElementById('app')
// app.addEventListener('click', throttle(handle,1000))
// function handle() {
//   console.log('handle')
// }