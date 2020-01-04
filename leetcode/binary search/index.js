let arr = [1,2,3,4,5,6,7,8,9,11,20,65,89]

function search(arr, item) {
  let low = 0
  let heigh = arr.length - 1
  let mid
  let element
  while (low <= heigh) {
    mid = Math.floor((low + heigh) / 2)
    element  = arr[mid]
    if (element < item) {
      low = mid + 1

    }
    else if (element > item) {
      heigh = mid - 1
    }
    else{
      return mid
    }
  }
  return -1
}

console.log(search(arr,20))