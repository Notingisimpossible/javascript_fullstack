export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer=setTimeout(() => {
      func.apply(this,args)//绑定指针 作用域
    },delay)
  }
}