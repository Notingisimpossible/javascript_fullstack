var myObj = {
  a:2
}

Object.preventExtensions(myObj)
myObj.b = 4
myObj.a = 3
console.log(myObj.b)

