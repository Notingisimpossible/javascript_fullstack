// 排序
// arr.sort((a,b) => a-b)
// 抛开语言 原始能力 按照索引找元素 交换元素位置 对比大小

// 冒泡排序 O[n^2]
// 快速排序 O[n*lgn]
// 排队的时候随便找个人，遍历一次。哨点
// 空间占用太多
// let arr = [1, 5, 6, 9, 2, 15, 11, 4, 8]
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     // 队列只有一个人，或者空，是没有必要排序的
//     return arr
//   }
//   let flag = arr[0]
//   let right = []
//   let left = []
//   for (let i = 1; i < arr.length; i++) {
//     if(arr[i] > flag) {
//       right.push(arr[i])
//     }else{
//       left.push(arr[i])
//     }
//   }
//   // 递归
//   return quickSort(left).concat([flag]).concat(quickSort(right))
//   // return [...left, flag, ...right]
// }

// 原地快排
function partition(arr, low, high) {
  // 快速排序
  let i = low
  let j = high
  let flag = arr[low]

  while (i<j){
    while(arr[j] >= flag && i<j){
      j--
    }
    while(arr[i] <= flag && i<j){
      i++
    }
    // 右边找到一个比flag小的，左边比它大的
    if (i != j) {
      swap(arr, i, j)
    }
  }
  // flag交换到正确位置上
  swap(arr, i, low)
  return i
}
function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function quickSort2(arr, low, high) {
  if(low< high) {
    let i = partition(arr, low, high)
    quickSort2(arr, low, i-1)
    quickSort2(arr, i+1, high)
  }
  return arr
}
let arr = [7, 5, 6, 9, 2, 15, 11, 4, 8, 20]
console.log(quickSort2(arr, 0, arr.length-1))