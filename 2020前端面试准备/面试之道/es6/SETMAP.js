// let set = new Set([1,2,3])
// console.log(set)
// set.forEach((val,key) => {
//   console.log(key)
// });
// for(let item of set.entries()){
//   console.log(item)
// }
// for(let item of set.keys()){
//   console.log(item)
// }
// for(let item of set.values()){
//   console.log(item)
// }
// let obj = {
//   name:'wc',
//   age:13
// }
// let arr = [1,2,3,4]
// for(let item in arr){
//   console.log(item)
// }
// for(let item of obj){
//   console.log(item)
// }

// let arr = [1,2,3,4,5,6,7]
// let a = arr.filter((item,index) => {
//   console.log(index)
//   return(item % 2) ==0
// })
// console.log(a)

// const m = new Map()
// const obj = {p:'hello'}
// let b
// m.set(obj,'hello')
// m.set(b,'world')
// // let a = m.get(obj)
// // console.log(a)
// console.log(m)

// let foo = function(){

// }

// let ma = new Map()
// ma.set(foo, 'hello')
// console.log(ma)

// let arr = [[1,'a'],[]]
// const map0 = new Map()
// .set(1,'a')
// .set(2,'b')
// .set(3,'c')
// let x = [...map0]
// x.map(([item,index]) => console.log([item,index+1]))
// console.log(x)

// let m = new Map([1,2])
// console.log(m)

// const ma = new Map()
// ma.set('1','hello')
// let x = JSON.stringify(ma)
// console.log(x)
function strMapToJson(strMap){
  return JSON.stringify(strMapToObj(strMap))
}
function strMapToObj(strMap) {
  let obj= Object.create(null);
  for (let[k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}


let myMap = new Map().set('yes',true).set('no',false)
console.log(strMapToJson(myMap))