// 手写promise

// new Promise((resolve, rejecte)=>{

// })
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
    if(that.state === PENDING){
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => cb(that.value))
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => cb(that.value))
    }
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
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if(that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if(that.state === REJECTED) {
    onRejected(that.value)
  }
}

// 测试
var test = new MyPromise((resolve, reject)=>{
  setTimeout(() => {
    resolve(1)
    console.log(1)
  },1000)
})

function test2() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
      console.log(2)
    },500)
  })
}

test.then(test2)