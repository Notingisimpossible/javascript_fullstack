//  并发 和 并行？

// 并发是宏观概念
// 并行是微观概念


// 回调函数(callback)
// 什么是回调函数?回调函数有啥缺点？如何解决回调地狱问题？
// ajax(url, () => {
//   // 处理逻辑
//   ajax(url, () => {
//     // 处理逻辑
//     ajax(url, () => {

//     })
//   })
// }) 
// // 回调缺点：
// // 1. 嵌套函数存在耦合性,一旦有所改动.牵一发动全身
// // 2. 嵌套函数一多.很难处理错误


// // Generator
// // 你理解的Generator是什么?
function *foo(x) {
  let y = 2 * (yield(x+1))
  let z = yield(y / 3)
  return (X+Y+z)
}
let it = foo(5)
console.log(it.next())
console.log(it.next(12))
console.log(it.next(13))

function *fetch() {
  yield ajax(url, () => {})
  yield ajax(url1, () => {})
  yield ajax(url2, () => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()

// Promise
// 特点?优缺点?什么是Promise链?Promise构造函数执行和then执行有啥区别?
// 三种状态
// 1. 等待中(pending)
// 2. 完成(resolved)
// 3. 拒绝(reject)
new Promise((resolve, reject) => {
  resolve('success')

  // 无效
  reject('fail')
})
// then中使用return,return的值会被Promise.resolve()包裹

// async 及 await
// async await的特点？他们的有点和缺点分别是？await的原理是什么？
// 一个函数如果加上了Async, 那么该函数就会返回一个Promise
// async function test() {
//   return '1'
// }
// console.log(test())


// // function test() {
// //   return new Promise((resolve, reject) => {
// //     resolve('1')
// //   })
// // }

// async function name() {
//   // 这里的代码没有依赖性，完全可以使用Promise.all([])


//   // 有依赖性，解决地狱回调
// }

let a = 0
let b = async () => {
  a++
  a = a + await 10 // await内部实现了generator,generator会保留堆栈中的东西，所以a=0保留下来了
  console.log('2', a)
}
b()
a++
console.log('1', a)

// await 就是generator加上Promise后的一个语法糖，内部实现了自执行generator


// 常用的定时器函数
// setTimeout、setInterval、requestAnimationFrame各有什么特点？

let period = 60 * 1000 * 60 * 2
let startTime = new Date().getTime()
let count = 0
let end = new Date().getTime() + period
let interval = 1000
let currentInterval = interval

function loop() {
  count++
  // 代码执行所消耗的时间
  let offset = new Date().getTime() - (startTime + count * interval)
  let diff = end - new Date().getTime()
  let h = Math.floor(diff / (60 * 1000 * 60))
  let hdiff = diff % (60 * 1000 * 60)
  let m = Math.floor(hdiff / (60 * 1000))
  let mdiff = hdiff % (60 * 1000)
  let s = mdiff / (1000)
  let sCeil = Math.ceil(s)
  let sFloor = Math.floor(s)

  // 得到下一次循环所消耗的时间
  currentInterval = interval - offset
  console.log(`时：${h}, 分：${m}, 毫秒：${s}, 秒向上取整：${sCeil}, 代码执行时间：${offset}, 下次循环间隔：${currentInterval}`)

  setTimeout(loop, currentInterval)
}

setTimeout(loop, currentInterval)



// setInterval
function setInterval(callback, interval) {
  let timer
  const now = Date.now
  let startTime = now()
  let endTime = startTime
  const loop = () => {
    timer = window.requestAnimationFrame(loop)
    endTime = now()
    if (endTime - startTime >= interval) {
      startTime = endTime = now()
      callback(timer)
    }
  }
  timer = window.requestAnimationFrame(loop)
  return timer
}

let a = 0
setInterval(timer => {
  console.log(1)
  a++
  if (a === 3) cancelAnimationFrame(timer)
}, 1000)

// requestAnimationFrame 自带节流功能 基本可以保证在 16.6毫秒内只执行一次