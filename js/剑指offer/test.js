// // let 有个细节
// let x = 11111
// let a = {
//     x: 1,
//     init() {
//         // 箭头函数的 this 取决于 init，所以可以打印出 1
//         document.addEventListener('click', () => console.log(this.x))
//     },
//     allowInit: () => {
//         // allowInit 直接是个箭头函数，所以这时的 this 变成了 window
//         // 但是并不会打印出 11111，忘了 let 的一个细节的可以回到上面看看
//         console.log(this.x)
//     },
//     otherInit() {
//         // 普通函数的 this 取决于调用函数的位置，this 指向 document
//         // 如果想打印出 x，可以使用 bind
//         document.addEventListener('click', function() {
//             console.log(this.x)
//         })
//     }
// }
// a.init() // -> 1
// a.allowInit() // -> undefined
// a.otherInit() // -> undefined

// setTimeout(_ => console.log('setTimeout'))
// setImmediate(_ => console.log('setImmediate'))

// function some(x){
//   return (y) => {
//     return (z) => {
//       return x+y+z
//     }
//   }
// }

// console.log(some(1)(2)(3))

// function test() {
//   a = 100
//   return function(){
//     var b = a
//     return b
//   }
// }
// test()
// console.log(b)

// var mess = "hello world"
// var age = Boolean(mess)
// console.log(age)

// var a = Number.MIN_VALUE/2
// console.log(a)

// const foo = (arr,midle) => {
//   arr.map((item) => {
//     if(item instanceof Array){
//       foo(item,midle)
//     }else{
//       midle.push(item)
//     }
//   })
//   return [...new Set(midle)]
// }

// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// var newArr = arr.filter((item)=>item>2)
// console.log(newArr)
// var obj = {
//   name: 'mg',
//   age: 35
// }
// var a = '12345648978'
// console.log(Array.from(a))
// var midle = []
// var result = foo(arr,midle)
// console.log(result)
// var arr = [1,2,3,4,5,6,7,8,9,11,12, 13,14,10]
// console.log(arr.sort(sortNumber))
// function sortNumber(a,b){
//   return b-a
// }
// 数组去重
// function createArr(arr) {
//   return arr.reduce((preitem, item) => {
//     console.log(preitem)
//     return preitem.concat(Array.isArray(item)?createArr(item):item)
//   },[])
// }
// var result = createArr(arr)
// console.log(result)
// var a = [1,2,3,2]
// var b = [4,5,6]
// var result = a.reduce((item,ite,it,i)=>{
//   if(item.includes(ite)){
//     return item
//   }else{
//     item.push(ite)
//   }
//   return item
// },[])
// console.log(result,a)
// console.log(arr.every(function a(item){
//   console.log(thisVal)
//   return item > 3
// }),thisVal)

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let list = fruits.copyWithin(2, 0);
// console.log(list)   // ["Banana", "Orange", "Banana", "Orange"]
// console.log(fruits.find((val,index,arr) => {return val=="Apple"}))

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// const ret1 = arr1.findIndex((value, index, arr) => {
//   return value > 4
// })
 
// const ret2 = arr1.find((value, index, arr) => {
//   return value > 4
// })
// console.log('%s', ret1)  // 5
// console.log('%s', ret2)  // undefined
// console.log(arr1.fill("hello"))
// arr1.re
var arr = [1,2,3,4,5,6,7]  
var result = arr.some((item, index, arr) => {
  console.log(index,arr)
})
console.log(result) // true