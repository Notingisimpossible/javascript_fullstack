function Add(num1, num2)
{
    // write code here
    var sum,mid
    while(num2!=0){
      sum = num1^num2
      mid = (num1&num2)<<1
      num1 = sum
      num2 =mid
      console.log("num1",num1,"num2",num2)
    }
  return num1
}
console.log(Add(5,12))

// function Add(num1,num2){
//   let n1 = num1.toString('2')
//   let n2 = num2.toString('2')
//   console.log(n1)
// }

// Add(5,10)