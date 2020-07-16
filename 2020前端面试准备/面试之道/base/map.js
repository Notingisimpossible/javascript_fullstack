Array.prototype.myMap = function(callback){
  let result = []
  for(let i = 0; i < this.length; i++) {
    let value = this[i]
    result.push(callback(value,i,this))
  }
  return result
}

let arr = [2,3,4,5,6]
let x =arr.myMap((item,index,arr) => {
  console.log("item",item)
  console.log("index",index)
  console.log("arr",arr)
  return item
})
console.log(x)