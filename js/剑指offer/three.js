/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
  // write code here
  if(root === null) {
    return
  }
  [root.left, root.right] = [root.right, root.left]
  Mirror(root.left)
  Mirror(root.right)
}

// 非递归
function Mirror(root){
  if(root === null){
    return
  }
  let stack = [root]
  while(stack.length){
    let x = stack.pop
    [x.left, x.right] = [x.right, x.left]
    stack.push(x.left)
    stack.push(x.right)
  }
}