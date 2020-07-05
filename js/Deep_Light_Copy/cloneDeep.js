// // Object.prototype.key='sex'
// let a = {
//   name:'Wn',
//   book: {
//     title: "you don't know js"
//   }
// }
// 浅拷贝
function cloneShallow(source) {
  var target = {}
  for (var key in source) {
    if(Object.prototype.hasOwnProperty.call(source,key)) {
      target[key] = source[key]
    }
  }
  return target
}
// let b = cloneShallow(a)
// // console.log(a)
// a.name = '蜗牛'
// a.book.title = 'qqq'

// // console.log(a)
// console.log(b)


// function cloneDeep(source) {
//   if (typeof source !== 'object') {return source}

//   var target = Array.isArray(source) ? [] : {}
//   for (var key in source) {
//     if (Object.prototype.hasOwnProperty.call(source, key)) {
//       if (typeof source[key] === 'object') {
//         target[key] = cloneDeep(source[key])
//       } else {
//         target[key] = source[key]
//       }
//     }
//   }
//   return target
// }

let a = {
  name: 'wn',
  book: {
    title: "You Don't Know Js",
    price: '45'
  }
}
// // a.name = '蜗牛',
// // a.book.price = '55'

// let a = [0, '1', [2, 3]]

// let b = cloneDeep(a)
// a[0] = 9
// a[2][0] = 4

// console.log(b)


function cloneDeep2(x) {
  const root = {}

  // 栈存储
  const loooList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]

  while(loooList.length) {
    // 广度优先
    const node = loooList.pop()
    const parent = node.parent
    const key = node.key
    const data = node.data

    let res = parent //[]
    // 初始化赋值目标 key为undefined的话拷贝到父元素 否则拷贝到子元素
    if (typeof key != 'undefined'){
      res = parent[key] = {}
    }
    for (let k in data) {
      if(data.hasOwnProperty(k)){
        if(typeof data[k]=== 'object') {
          //进行下一次循环
          loooList.push({//压栈
            parent: res,
            key: k,
            data: data[k]
          })
        }
        else{
          res[k] = data[k]
        }
      }
    }
  }
  return root
}

let b = cloneDeep2(a)
a.name = 'qqq'
a.book.title = 'aaas'
console.log(b)