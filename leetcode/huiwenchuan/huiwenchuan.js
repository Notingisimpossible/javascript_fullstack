/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // s = s.replace(/[^\w]/g, '').toLowerCase()
  // 题目要求只考虑字母和数字字符，所以上面的写法也没啥问题
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()//正则表达式表示匹配a-z A-Z 0-9 
  // /g意思就是：global可选标志，带这个标志表示替换将针对行中每个匹配的串进行，否则则只替换行中第一个匹配串。如：we.fdffddfwe.加上/g后，则2个we都会出来。
  console.log(s);
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
