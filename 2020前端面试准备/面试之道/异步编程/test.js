// //切菜
// function cutUp(){
//   console.log('开始切菜。');
//   var p = new Promise(function(resolve, reject){        //做一些异步操作
//       setTimeout(function(){
//           console.log('切菜完毕！');
//           resolve('切好的菜');
//       }, 1000);
//   });
//   return p;
// }

// //烧水
// function boil(){
//   console.log('开始烧水。');
//   var p = new Promise(function(resolve, reject){        //做一些异步操作
//       setTimeout(function(){
//           console.log('烧水完毕！');
//           resolve('烧好的水');
//       }, 1000);
//   });
//   return p;
// }

// Promise.all([cutUp(), boil()])
//   .then((result) => {
//       console.log('准备工作完毕');
//       console.log(result);
//   })

// let p1 = new Promise(resolve => {
//   setTimeout(() => {
//       resolve('I\`m p1 ')
//   }, 1000)
// });
// let p2 = new Promise(resolve => {
//   setTimeout(() => {
//       resolve('I\`m p2 ')
//   }, 2000)
// });
// Promise.race([p1, p2])
//   .then(value => {
//       console.log(value)
//   })
function *foo(x) {
  let y = 2 * (yield(x+1))
  let z = yield(y / 3)
  return (x+y+z)
}
let it = foo(5)
console.log(it.next())
console.log(it.next(12))
console.log(it.next(13))