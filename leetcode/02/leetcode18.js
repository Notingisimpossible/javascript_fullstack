/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let headNode = new ListNode()
  headNode.next = head
  let previous = headNode
  let current = head

  while(current) {
    if(current.val === val) {
      let temp = current.next
      previous.next = temp
      current.next = null
    }
    previous = current
    current = current.next
  }
  return headNode.next
};