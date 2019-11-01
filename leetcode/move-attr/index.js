/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  nums.sort();
  var index = nums.indexOf(val);
  var sum = nums.reduce((pre,item) =>{
    pre[item]?pre[item]++:pre[item]=1;
    return pre;
  },{})
  for( let key in sum){
    if(key==val){
      nums.splice(index,sum[key])
    }
  }
  return nums.length
};

nums = [0,1,2,2,3,0,4,2]
val = 2
console.log(removeElement(nums,val))