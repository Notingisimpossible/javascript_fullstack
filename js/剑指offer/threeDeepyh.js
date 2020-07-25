function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function TreeDepth(pRoot)
{
    function dfs(root){
        if(!root){
            return 0
        }
        let l=dfs(root.left)
        let r=dfs(root.right)
        return Math.max(l,r)+1
    }
    return dfs(pRoot)
}

let a = new TreeNode(8)
let b = new TreeNode(2)
let c = new TreeNode(3)
let d = new TreeNode(4)
let e = new TreeNode(5)
let f = new TreeNode(6)
a.left = b
a.right = c
b.left = d
d.left = e
e.right = f
console.log(TreeDepth(a))


// function walkTree(root) {
//   var stack = [];
//   while(root) {
//       console.log(root.val);
//       root.left && stack.push(root.left);
//       root.right && stack.push(root.right);
//       root = stack.shift();
//   }
// }

// // Step 1 参考答案
// var a = { val: 'a', right: null, left: null };
// var b = { val: 'b', right: null, left: null };
// var c = { val: 'c', right: null, left: null };
// var d = { val: 'd', right: null, left: null };
// var e = { val: 'e', right: null, left: null };
// var f = { val: 'f', right: null, left: null };
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;

// walkTree(a);