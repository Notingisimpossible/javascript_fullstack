// // 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
// function Sum_Solution(n)
// {
//   // write code here
//   let sum = n
//   sum&&(sum += Sum_Solution(n-1))
//   return sum
// }
// console.log(Sum_Solution(5))
// 方法二
function Sum_Solution(n)
{
  // write code here
  let sum = (n + Math.pow(n,2))>>1
  return sum
}
console.log(Sum_Solution(7))
