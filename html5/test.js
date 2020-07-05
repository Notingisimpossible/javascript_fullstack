// let a = [1, 2, [3, 4, [5, 6, [7, 8]]], 9]
// function b(arr,result) {
//   arr.map(function(item){
//     if (item instanceof Array) {
//       b(item,result)
//     } else {
//       result.push(item)
//     }
//   })
//   return result
// }
// a = b(a,[])
// console.log(a)

// var arr = ['mu','zi',['dig',['big','love']]]
// function flatten(arr){ 
//   let res = []; 
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//       res = res.concat(flatten(arr[i]));
//     }else{
//       res.push(arr[i]);
//     } 
//   } 
//   return res; 
// }
// console.log(flatten(arr))//["mu", "zi", "dig", "big", "love"]

// toString
// var arr = [1, [2, [3, 4],[5,[6],[7,8]]]];
// var arrStr = arr.toString();
// console.log(arrStr);//1,2,3,4,5,6,7,8
// var strArr = arrStr.split(',');
// console.log(strArr)//["1", "2", "3", "4", "5", "6", "7", "8"]

//arr数组中的元素不能为字符串只能为数组
// var newArr=arr.toString().split(',').map(function(ele){
//   return +ele
// });
// console.log(newArr)
// let x = '5'
// let z = +x
// console.log(z)
// alert(typeof arr[0]); //number

// reducer累加器
  //合并二维数组
  // var twoArr = [['mu','zi'],['dig','big'],['lucky','jiji']];
  // var oneArr = twoArr.reduce(function(total,currentValue){
  //   // console.log(total)
  //   return total.concat(currentValue);
  // })
  // console.log(oneArr);//["mu", "zi", "dig", "big", "lucky", "jiji"]

// let arr = [1,2,[3,4,[5,6],7],8]
//  arr.reduce(function(total, cur){
//     console.log(cur)
//   })
var arr = [1,2,3,4,5,6,7,8,9,10]
var str = arr.reduce(function(prev,cur,index,arr){
  console.log(cur)
  return prev + cur ;
})
console.log(str)//55