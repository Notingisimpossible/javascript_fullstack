let p = new Promise((resolve, reject) => {
  resolve(1)
  console.log(2)
}).then(res => {
  console.log(res)
})

// 进程和线程  js单线程带来了什么好处？
// 本质上来说 进程和线程 都是cpu的工作时间片的一个描述
// 进程：描述了cpu在运行指令及加载和保存上下文所需要的时间
// 线程: 描述了执行一段指令所需要的时间

// js单线程好处：
// 1. 节省内存 节约上下文切换时间 没有锁的问题的好处。

// 执行栈 (什么是执行栈)
function foo(b) {
  var a = 5
  return a * b + 10
}

function bar(x){
  var y = 3
  return foo(x*y)
}

// 可以认为执行栈是一个存储函数调用的栈结构

// 浏览器中的EventLoop
// 异步代码执行顺序？解释一下eventloop?

// 当我们执⾏ JS 代 码的时候其实就是往执⾏栈中放⼊函数，
// 那么遇到异步代码的时候该 怎么办？其实当遇到异步的代码时，
// 会被挂起并在需要执⾏的时候加
// ⼊到 Task（有多种 Task） 队列中
// 一旦执行栈为空， Event Loop就会从Task队列中拿出需要执行的代码并放到执行栈中执行
// 所以，本质上来说, js中的异步其实还是同步


// 任务元源：
// 1. 微任务
// 2. 宏任务
// 在es6规范当中，微任务称为jobs,宏任务成为task

console.log('script start') //1 

async function async1() {
  await async2()// await 看成是让出线程的标志
  console.log('async1 end') //5
}

async function async2() {
  console.log('async2 end') //2
}

async1()

setTimeout(function() {
  console.log('setTimeout') //8
}, 0)

new Promise(resolve => {
  console.log('Promise') //3
  resolve()
})
  .then(function() {
    console.log('promise1') //6
  })
  .then(function() {
    console.log('promise2') // 7
  })

console.log('script end') //4

// Event Loop执行顺序
// 1. 先执行同步代码，宏任务
// 2. 执行栈为空之后，查询是否有异步代码需要执行
// 3. 执行所有的微任务
// 4. 执行完所有微任务后,如有有必要的话会渲染页面
// 5. 开始下一轮的event loop,执行宏任务中的异步代码,也就是setTimeout中的回调

// 微任务

// 宏任务