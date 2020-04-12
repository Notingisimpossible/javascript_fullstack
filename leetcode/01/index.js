arr = [13,1,2,5,3,8,11,9,9]
sum = 18

function finSum(arr, sum) {
  // 遍历的时候，我们就知道缺啥
  // O[n] O表示量级
  let obj = {}
  arr.forEach((v,i) => {
    
    if(String(v) in obj){
      console.log(obj[v],i)
    }
    obj[sum - v] = i
  })
}

finSum(arr,sum)