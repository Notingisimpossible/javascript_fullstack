## 你不知道的JS学习心得
- 第一章 作用域
  编译器 编译 执行
  var a = 2
  编译器 执行前 编译 
  var a
  a = 2

  - LHS RHS 查询
  function foo(a) {
    console.log(a)
  } 
  foo(2)
  函数调用 找到foo R查询
  隐式 赋值给a L查询
  打印a 找到a的值 R查询

- 第二章 词法作用域
  作用域嵌套
  function foo(a) {
    var b = a*2
    function bar(c) {
      console.log(a, b, c)
    }
    bar(b*3)
  }
  foo(2)
  输出2, 4, 12

  欺骗词法
  eval with
  eval 接收一个字符串参数 将其作为好像提前写好的代码进行执行
  function foo(str) {
    eval(str)
    console.log(a)
  }
  foo("var a = 3")
  console.log(a)//a is not defined
  严格模式下 无法修改词法作用域

  function foo(obj) {
    with(obj) {
      a = 2
    }
  }
  var 01 = {
    a: 3
  }
  var 02 = {
    b: 4
  }
  fool(01)
  console.log(01.a)//2
  fool(02)
  console.log(02.a)//undefined
  console.log(a)//2  a被泄露到全局作用域

- 第三章 函数作用域 块作用域
  - 隐藏内容
    可以将一个只有在某一个函数中才会调用的另一个函数定义在调用它的函数内部 防止意外被调用 重名
  - 函数作用域
  var a = 2
  function foo() {//函数声明
    var a = 3
    console.log(a) //3
  }
  foo()
  console.log(a) //2

  - 函数表达式
  var a = 2
  (function foo() {
    var a = 3
    console.log(a) //3
  })()函数表达式 自执行 可以传参
  - 匿名函数 具名函数
    使用两种方式 影响不大 但是当函数需要使用递归等调用自身时匿名函数不方便 
    推荐使用具名函数
  - 块作用域
    with 从对象中创建出作用域仅在with声明而非外部有效
    try catch 声明的变量仅在catch有效
    同时有多个catch 系统静态检查工具警告 烦 声明 变量 err1 err2 ...

  - 块作用域垃圾回收机制
    function process() {

    }
    var something = {..}
    process (something)
    var btn = document.getElementById('my_button')
    btn.addEventListener("click", function click(evt) {
      console.log('I am super man')
    })
    就上面程序 click不需要something 故process调用完后应该释放
    但是click会形成一个作用整个作用域的闭包 something 不被释放
    可以改成
    {
      let something = {..}
      process(something)
    }
    块级作用域 执行完就释放

  - var let const
    var 定义全局变量
    let 定义局部变量 只在当前作用快起作用
    const 定义常量 不可更改

- 第四章 提升
  - 变量提升
    console.log(a)//undefined
    var a = 2
    ||
    \/
    var a
    console.log(a)
    a = 2
    包括变量和函数在内的代码在执行前首先被处理 先编译 后执行
    fool()
    bar()
    var fool = function bar() {
      ...
    }
    提升后：
    var fool
    fool()
    bar()
    fool = function bar() {

    }
  - 函数和变量名相同 重复声明 函数声明提升到普通变量之前
    fool()
    var fool
    function fool() {
      console.log(1)
    }
    fool = function() {
      console.log(2)
    }
    输出1 
    注意避免重复声明，特别是将普通var声明与函数声明放在一起容易引起错误