let arr = [13,1,2,5,3,8,11]
let sum = 18

function findSum(arr, sum) {
  let obj = {}
  arr.forEach((v,i) => {
    if(String(v) in obj) {
      console.log('找到了', obj[v], i)
    }
    obj[sum - v] = i
  } )
}
findSum(arr, sum)