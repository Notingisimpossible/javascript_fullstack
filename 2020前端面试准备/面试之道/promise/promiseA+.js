// 实现一个符合Promise/A+规范的Promise
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  this.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []
  // 接下来完善resolve和rejecte函数
  function resolve(value){ // new Promise.resolve(1).then()
    if(value instanceof MyPromise) {
      return value.then(resolve, reject)
    }
    setTimeout(() => {
      if(that.state === PENDING){
        that.state = RESOLVED
        that.value = value
        that.resolvedCallbacks.map(cb => cb(that.value))
      }
    },0)
  }

  function reject(value) {
    setTimeout(() => {
      if (that.state === PENDING) {
        that.state = REJECTED
        that.value = value
        that.rejectedCallbacks.map(cb => cb(that.value))
      }
    },0)
  }

  // 完善执行fn 
  try {
    fn(resolve,reject)
  } catch (error) {
    reject(error)
  }
}
MyPromise.prototype.then = function(onFulfilled, onRejected){
  const that = this
  // 首先判断两个参数的函数类型，因为这两个参数是可选的
  // 当参数不是函数类型的时候，我们手动创建一个箭头函数赋值给对应的函数
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => { return v} // 透传
  onRejected  = typeof onRejected === 'function' ? onRejected : r => {throw r}

  if (that.state === PENDING) {
    return (promise2 = new MyPromise((resolve, reject) => {
      that.resolvedCallbacks.push(() => {
        try {
          const x = onFulfilled(that.value)
          resolutionProcedure(promise2, x, resolve, reject) // 帮助我们将then函数中的返回结果做一个修改
        } catch (error) {
          reject(error)
        }
      })

      that.rejectedCallbacks.push(() => {
        try {
          const x = onRejected(that.value)
          resolutionProcedure(promise2, x, resolve, reject) // 帮助我们将then函数中的返回结果做一个修改
        } catch (error) {
          reject(error)
        }
      })
    }))
    // that.resolvedCallbacks.push(onFulfilled)
    // that.rejectedCallbacks.push(onRejected)
  }
  if(that.state === RESOLVED) {
    // onFulfilled(that.value)
    return (promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onFulfilled(that.value)
          resolutionProcedure(promise2, x, resolve, reject) // 帮助我们将then函数中的返回结果做一个修改
        } catch (error) {
          reject(error)
        }
      },0)
    }))
  }
  if(that.state === REJECTED) {
    // onRejected(that.value)
    return (promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onRejected(that.value)
          resolutionProcedure(promise2, x, resolve, reject) // 帮助我们将then函数中的返回结果做一个修改
        } catch (error) {
          reject(error)
        }
      },0)
    }))
  }

  function resolutionProcedure(promise2, x, resolve, reject) {
    if(promise2 === x) {
      return reject( new TypeError('Error'))
    }
    if(x instanceof MyPromise) {
      
      x.then(function(value) { // promise 链的出处
        resolutionProcedure(promise2, x, resolve, reject)
      },reject)
    }
  }

}