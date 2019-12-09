const debounce = (fn, delay) => {
  let timer = null
  return function(...args) {
    clearTimeout(timer)
    timer=setTimeout(() => {
      fn.apply(this, ...args)
    },delay)
  }
}
test =function() {
  console.log(123)
}
debounce(test(e),500)