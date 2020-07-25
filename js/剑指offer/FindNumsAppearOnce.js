function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let flag = {}
    let res = []
    array.forEach(element => {
      if(!flag[element]){
        flag[element]=1
      }else{
        flag[element] += 1
      }
    });
    for(item in flag) {
      if(flag[item]===1){
        res.push(item)
      }
    }
    return res
}

FindNumsAppearOnce([1,2,2,3,5,4,4,5])