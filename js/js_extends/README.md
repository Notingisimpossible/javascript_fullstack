## extend 继承实现
- 原型链继承
* 
```
function Person() {
  this.a = 123
}
Person.prototype.say = function() {}

function Student() {

}
Student.prototype.__proto__ = Person.Prototype
var s = new Student()
```


- object.create() 继承
*  
```
function myCreate(obj) {  
      var F = function(){}  
      F.prototype = obj  
      return new F()  
    }  
    // Student.prototype = Object.create(Person.prototype)
    Student.prototype = Object.myCreate(Person.prototype)
    var s = new Student()  
```


- 同时继承属性和方法  
* 
```

// 3 es6 extends 使用的方法  
    function Student1() {  
      // 继承属性  绑定this指针
      Person.call(this)  
    }  
    // 继承方法  
    Student1.prototype = myCreate(Person.prototype)  
    // 修正 constructor  
    Student1.prototype.constructor = Student1
```


- new 方法实现
* 
```

function myNew(constructor, ...args) {
      // 1
      let obj = {}
      // 2 继承属性 传参 接收返回值
      let ret = constructor.apply(obj, args)
      // 3 继承方法
      obj.__proto__ = constructor.prototype
      // 4 注意构造函数返回值
      return typeof ret === 'object' ? ret : obj
    }
    
```

- call apply bind  
* 
```

var xw = {
      name: '小王',
      age: 14 ,
      school: this.school,
      say : function (school) {
        console.log(school)
      console.log(this.name, '今年', this.age, '学校是', school)
      }
    }
    var xh = {
      name: '小红',
      age: 15,
    }
    xw.say.call(xh, "实验小学") //直接绑定指针 传入参数为接收参数类型
    xw.say.apply(xh, ["实验小学"]) // 传入参数为数组类型
    xw.say.bind(xh, "实验小学")() // 传参和call一样 但是返回的是方法 需要在后面用()调用
```

