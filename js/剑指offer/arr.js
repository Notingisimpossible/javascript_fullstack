// function multiply(array)
// {
//     let flag
//     let b = []
//     for(let i = 0; i < array.length; i++){
//       flag = array[i]
//       array[i] = 1
//       b[i] = array.reduce((lastitem,item) => {
//         lastitem = lastitem*item
//         return lastitem
//       },1)
//       array[i] = flag
//     }
//     return b
// }

// let array = [0,1,2,3,4,5,6]
// console.log(multiply(array))

let arr = [1,[2,3,[4,5,["6"]],7],8]
// console.log(arr.toString().split(",").map(item=>+item))
// 方法二
// function bbh(arr) {
//   while(arr.some((item) =>{return Array.isArray(item)})){
//     arr = [].concat.apply([],arr)
//   }
//   return arr
// }
// 方法三
// function bbh(arr) {
//   let result = []
//   arr.map((item) => {
//     if(Array.isArray(item)){
//       result = result.concat(bbh(item))
//     }else{
//       result.push(item)
//     }
//   })
//   return result
// }
// 方法四
// function bbh(arr){
//   while(arr.some((item) => {return Array.isArray(item)})){
//     arr = [].concat(...arr)
//   }
//   return arr
// }
// 方法五
function bbh(arr){
  return arr.flat(Infinity)
}
let res = bbh(arr)
console.log(res,arr)