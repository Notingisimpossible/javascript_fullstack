// 传入需要防抖的函数
const debounce = (func,wait = 50) => {
  // 缓存一个定时器
  let timer = 0

  return function(...args){ // 返回的函数是每次用户实际调用的防抖函数
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    },wait)
  }
}

var app =  document.getElementById('app')
app.addEventListener('click', debounce(handle,1000))
function handle() {
  console.log('handle')
}