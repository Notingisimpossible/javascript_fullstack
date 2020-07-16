function Persion() {
  this.name = ["aa","bb","cc"]
  sayname = function(){
    console.log(name)
  }
}

Persion.prototype.changeName = function(name){
  this.name.push(name)
}

// 原型继承
// function JxufeP() {
//   // this.name = name
// }
// JxufeP.prototype = new Persion
// JxufeP.prototype.constructor = JxufeP
// const jx = new JxufeP()
// jx.name.push("kl")
// const jj = new JxufeP()
// console.log(jx.name)
// console.log(jj.name)
// 借用构造函数
function JxufeP() {
  Persion.call(this)
}
let jx = new JxufeP()
jx.changeName("ll")
console.log(jx.name)
// 组合继承
// function JxufeP() {
//   Persion.call(this)
// }
// JxufeP.prototype = new Persion
// JxufeP.prototype.constructor = JxufeP
// let jx = new JxufeP()
// let jj = new JxufeP()
// jx.name.push("ll")
// console.log(jx.name,jj.name)



