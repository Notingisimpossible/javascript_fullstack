let a = {
  name:'mg',
  age:[22]
}

function cloneShallow(source) {
  var target = Array.isArray(source)?[]:{}
  for (var key in source) {
    if(Object.prototype.hasOwnProperty.call(source,key)) {
      if(typeof source[key] === "object"){
        target[key] = cloneShallow(source[key])
      }else{
        target[key] = source[key]
      }
    }
  }
  return target
}

let b = cloneShallow(a)
a.age[0] = 30
console.log(b)