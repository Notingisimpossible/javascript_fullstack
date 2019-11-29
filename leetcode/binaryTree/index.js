var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

//前序遍历+递归
// var preOrder = function (node) {
//   if (node) {
//     console.log(node.value)
//     preOrder(node.left)
//     preOrder(node.right)
//   }
// }
// preOrder(tree)


// 深度优先 非递归遍历
var preOrderUnRecur = function (node) {
  if (!node) {
    throw new Error('Tree is empty!')
  }
  var stack = []
  stack.push(node)
  while (stack.length != 0) {
    node = stack.pop()
    console.log(node.value)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
}

// preOrderUnRecur(tree)

// 广度优先 非递归
function BreadthFirstUnRecur(node) {
  let queue = []
  queue.push(node)
  while (queue.length != 0) {
    let g = queue.shift()//删除数组第一项 返回被删除的那项
    console.log(g.value)
    if (g.left) {
      queue.push(g.left)
    }
    if (g.right) {
      queue.push(g.right)
    }
  }
}

BreadthFirstUnRecur(tree)