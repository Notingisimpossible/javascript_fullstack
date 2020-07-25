function duplicate(numbers, duplication={})
{
  // write code here
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  let mid = {}
  for(let item of numbers){
    if(mid[item]){
      duplication[0] = item
      return true
    }else{
      duplication[0] = -1
      mid[item] = 1
    }
  }
  return false
}
var arr = [2,3,1,0,2,5,3]
console.log(duplicate(arr))