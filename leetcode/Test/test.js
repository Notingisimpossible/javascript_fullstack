/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
	let number=0
	let list = new Array()
	for(let i=0;i<ratings.length;i++){
		list[i]=1
	}
	for (let i = 1; i < ratings.length-1; i++) {
		if(ratings[i]>ratings[i-1]&&ratings[i]<ratings[i+1]){
			list[i]=list[i-1]+1
		}
		else if(ratings[i]<ratings[i-1]&&ratings[i]>ratings[i+1]){
			list[i]=list[i+1]+1
		}
		else if(ratings[i]<ratings[i-1]&&ratings[i]<ratings[i+1]){
			list[i]=Math.min(list[i-1],list[i+1])-1
		}
		else if(ratings[i]==ratings[i-1]&&ratings[i]<ratings[i+1]){
			if(list[i+1]!=1){
				list[i]=[i+1]-1
			}
		}
		else if(ratings[i]==ratings[i-1]&&ratings[i]>ratings[i+1]){
			list[i]=list[i+1]+1
		}
		else if(ratings[i]<ratings[i-1]&&ratings[i]==ratings[i+1]){
			if(list[i-1]!=1){
				list[i]=list[i-1]-1
			}
		}
		else if(ratings[i]>ratings[i-1]&&ratings[i]==ratings[i+1]){
			list[i]=list[i-1]+1
		}
		else if(ratings[i]==ratings[i-1]&&ratings[i]==ratings[i+1]){
			list[i]=1
		}
		else{
			list[i]=Math.max(list[i-1],list[i+1])+1
		}
	}
	if(ratings[0]>ratings[1]){
		list[0]=list[1]+1
	}
	if(ratings[ratings.length-1]>ratings.length-2){
		list[ratings.length-1]=list[ratings.length-2]
	}
	for(let i=0;i<list.length;i++){
		number+=list[i]
	}
	console.log(list)
	return number
};

var number=[1,2,87,87,87,2,1]
console.log(candy(number))