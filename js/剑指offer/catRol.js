// function cutRope(number)
// {
//   // write code here
//   var result = 1
//   if(number<5){
//     return number
//   }
//   while(number>=5){
//     number = number - 3
//     result *=3
//   }
//   result = result*number
//   return result
// }

// console.log(cutRope(15))

function cutRope(number)
{
  if(number<2){
    return number
  }
  var result = 0
  for(let i=2; i<=number;i++){
    var len = Math.floor(number/i)
    var c = number%i
    var mid = Math.pow(len,i-c)*Math.pow(len+1,c)
    if(mid>result){
      result=mid
    }
  }
  return result
}
console.log(cutRope(15))