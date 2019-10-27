/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let number = 0 , lastnum=0;//minnum为正无穷大  
  for( let i=0;i<prices.length;i++){ 
    for( let j=i+1;j<prices.length;j++){
      number = prices[j]-prices[i]
      number = Math.max(number,lastnum)
      lastnum = number
    }
  }
  if(number>0){
    return number
  }
  else{
    return 0
  }
}

var number = [7,1,5,3,6,4]
console.log(maxProfit(number))