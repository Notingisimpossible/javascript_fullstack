const stack1 = []
const stack2 = []

function push(node)
{
    stack1.push(node)
}
function pop()
{
    if(!stack2.length){
      while(stack1.length){
        stack2.push(stack1.pop())
      }
    }
    return stack2.pop()
}