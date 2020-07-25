function quickSort(arr,low,high){
  let flag = arr[low]
  let l = low
  let h = high
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
function main(arr,low, high){
  if(low<high){
    let i = quickSort(arr,low,high)
    main(arr,low,i-1)
    main(arr,i+1,high)
  }
  return arr
}
let arr = [2,1,3,5,6,7,4,9,8]
console.log(main(arr,0,arr.length-1))