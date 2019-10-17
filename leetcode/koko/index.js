/**
 * @param{array} piles
 * @param{int} H
 * @returns{int} lo
 * @func 求最慢吃法
 */
const canEatAllBanans=(piles,H,mid)=>{
    let time=0;
    for(let pile of piles){
        time+=Math.ceil(pile/mid);
    }
    if(time<=H){
        return true;
    }else{
        return false;
    }
}
const minEatingSpeed=(piles,H)=>
{
    let lo=1;
    let hi=Math.max(...piles)
    let mid;
    while(lo<=hi){
        mid = lo + ((hi-lo) >> 1);
        if(canEatAllBanans(piles,H,mid)){
            hi=mid-1;
        }
        else{
            lo=mid+1;
        }
    }
    return lo;
}
console.log(minEatingSpeed([3,6,7,11],8))