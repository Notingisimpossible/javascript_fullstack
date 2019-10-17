function isCommonPrefix(strs,minddle){
    const prefix=strs[0].substring(0,minddle);
    for (let i=1;i<strs.length;i++){
        if(!strs[i].startsWith(prefix)) return false;
    }
    return true;
}
/**
 * @function 返回最长公共字串
 * @author sm
 * @param  strs 字符串数组
 * @return 字符串
 */
const logestCommonPrefix=(strs)=>{
    if (strs.length==0) return '';
    if (strs.length==1) return strs[0];


    let minlen=Number.MAX_VALUE;
    for(let i=0;i<strs.length;i++){
        minlen=Math.min(minlen,strs[i].length)
    }
    //console.log(minlen)
    let low=0,
        high=minlen;
    while(low<=high){
        const minddle=(low+high)>>1;//右移一位 二进制
        if(isCommonPrefix(strs,minddle)){
            low=minddle+1;
        }else{
            high=minddle-1;
        }
    }
    return strs[0].substring(0, (low + high) >> 1);
}
const strs=['flower','flow','flight'];
console.log(logestCommonPrefix(strs));