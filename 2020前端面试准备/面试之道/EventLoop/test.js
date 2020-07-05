// setTimeout(() => {
//   setTimeout(()=>{
//     console.log(9)
//   },0)
//   console.log(1)
//   new Promise(resolve => {
//     resolve(2)
//     console.log(3)
//   }).then(res => {
//     console.log(res)
//   })
// },0)

// setTimeout(() => {
//   console.log(4)
//   new Promise(resolve => {
//     resolve(5)
//     console.log(6)
//   }).then(res => {
//     console.log(res)
//   })
// },0)

// function some(x){
//   return function(y){
//     return function(z){
//       return x+y+z
//     }
//   }
// }

// console.log(some(1)(2)(3))

function fn(x){
  return function(){
    console.log(x)
    return x
  }
}
let func = fn(3)
setTimeout((func), 2000)