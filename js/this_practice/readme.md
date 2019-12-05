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