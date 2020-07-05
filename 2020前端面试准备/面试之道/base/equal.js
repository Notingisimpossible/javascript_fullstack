// == 和 === 有什么区别
// 1 == '1' //true

// 判断x和y是否相同，需要走哪些流程：
// 对于 == 来说：
// 1. 首先判断两者类型是否相同，相同的话就比较大小
// 2. 类型不同的话，就会进行类型转换
// 3. 会先判断是否在对比null和undefined，是的话会返回true
// 4. 判断两者类型是否为string和number, 是的话就会将字符串转换为number
// 1 == '1' //true
// 5. 判断其中一方是否为Boolean 是的话就会把boolean转化为number进行判断
// '1' == true
// '1' == 1
// 1 == 1 //true
// 6. 判断其中一方是否为object,且另一方为string、number或者Symbol，是的话就将object转换为原始类型
// '1' == {name:'xxx'}
// '1' == '[object Object]' //false
// 1 == {name: 'xxx'}
// 1 == Number'[object Object]'
// 1 == NaN // false

// [] == ![] true?false? why?
// 1. !优先级大于==
// [] == false
// [] == 0
// '' == 0
// 0 == 0 true

// 对于===来说就直接判断类型和值是否相同
console.log(![] == false)