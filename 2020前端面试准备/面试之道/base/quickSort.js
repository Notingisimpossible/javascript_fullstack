const quickSort = (arr,low,high) => {
  let l = low
  let h = high
  let flag = arr[low]
  
  
  while(l<h){
    while(arr[h]>=flag&&h>l){
      h--
    }
    while(arr[l]<=flag&&l<h){
      l++
    }
    if(l!==h){
      swap(arr,l,h)
    }
  }

  swap(arr,l,low)
  return l
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
const quickSortMain = (arr, low, high) => {
  if(low < high) {
    let i = quickSort(arr, low, high)
    quickSortMain(arr,low,i-1)
    quickSortMain(arr, i+1,high)
  }
  return arr
}
var arr = [2,5,4,1,6,9,8,7,2,3]
var result = quickSortMain(arr, 0, arr.length-1)
console.log(result)