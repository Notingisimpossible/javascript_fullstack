// (
//   function() {
//     var name = ""
//     Person = function (value) {
//       name = value
//     }

//     Person.prototype.getname = function(){
//       return name
//     }
//   }
// )()
// var per = new Person("Nike")
// console.log(per.getname())

function createFunction() {
  var result = new Array();

  for (var i = 0; i< 10; i++) {
    result[i] = function(i) {
      return function(){
        return i
      }
    }(i);
  }
  return result;
}
var result = createFunction()
console.log(result[0]())
// var arr = []
// for(var i = 0; i < 10 ;i++){
//   arr[i] = i
// }
// console.log(arr)