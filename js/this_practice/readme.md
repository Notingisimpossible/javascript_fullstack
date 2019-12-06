### this 指向  
1. 谁调用指向谁  
2. 指向优先级 obj.function() < call/apply/bind < new  
3. arguments 所有方法都具有 类数组 通过下标调用传入的参数 有length属性  
4. 可以通过 .prototype.function.call() 借用其他类的方法 同时.call() 绑定传入对象的this指针  
5. 将类数组arguments转换为数组
```
 <let arr1 = Array.from(arguments)
      console.log(arr1)
      // 借用数组slice 截取 返回数组
      let arr2 = Array.prototype.slice.call(arguments)
      let arr3 = [...arguments]
      console.log(arr3)
      console.log(typeof arguments.map)>
```

### new 干了啥？
- 创建一个空的简单JavaScript对象（即{}）  
- 链接该对象（即设置该对象的构造函数）到另一个对象  
- 将步骤1新创建的对象作为this的上下文   
- 如果该函数没有返回对象，则返回this  
 
- 当代码 new Foo(...) 执行时，会发生以下事情：
1. 一个继承自 Foo.prototype 的新对象被创建。  
2. 使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。  
3. 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）  