function add(a,b){
  return a+b
}

// 输出结果
function withLog(fn) { // 高阶函数
  function wrapper(a, b) {
    const result = fn(a,b)
    console.log(result)
    return result
  }
  return wrapper
}

const withLogAdd = withLog(add)
withLogAdd(1,2)