-leetcode 是大厂算法题的来源
-minlen   0-minlen 皆有可能
-取出部分， strs[0] strs[01] strs[02]....strs[0minlen]
 for(let i=0;i< strs[i].lenth;i++){
     strs[i].startsWith(strs[02])
 }

 -从后面开始 [0minlen] [minlen0]
 概率一样，中间  二分查找 

 5  0000 0101
    0000 0010 右移一位 除2 取余  

 每次从中间查找 符合概率 每次都可以排除一半的元素
 low high minddle 重复计算 并相应调整
位移运算 除二取整 >>
  算法 时间复杂度 0(n) log2N