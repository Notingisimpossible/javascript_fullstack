/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // s = s.replace(/[^\w]/g, '').toLowerCase()
  // 题目要求只考虑字母和数字字符，所以上面的写法也没啥问题
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let left = 0;
  let right = s.length - 1;

  while(left < right) {
      if(s[left] != s[right]) {
         return false 
      }
      left++
      right--
  }
  return true
};

str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str));
