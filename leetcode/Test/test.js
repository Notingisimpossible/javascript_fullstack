/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
		var k=String(x);
		k=Array.from(k).reverse().join('');
		if(k.charAt(k.length-1)==="-"){
			k="-"+k;
			k=k.substring(0,a.length-1);
		}
		k=parseInt(k);
		if(k<Math.pow(-2,31)||k>Math.pow(2,31)-1){
			return 0;
		}
		return k;
};

var x=1534236469
console.log(reverse(x));