/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
	let i = "love"
	let number=0
	let list1 = new Array()
	let list2 = new Array()
	let list3 = new Array()
	for(let i=0;i<ratings.length;i++){
		list1[i]=1
		list2[i]=1
	}
	for (let i = 1; i < ratings.length-1; i++) {
		if(ratings[i]>ratings[i-1]&&ratings[i]<ratings[i+1]){
			list1[i]=list1[i-1]+1
		}
		else if(ratings[i]<ratings[i-1]&&ratings[i]>ratings[i+1]){
			list1[i]=list1[i+1]+1
		}
		else if(ratings[i]<ratings[i-1]&&ratings[i]<ratings[i+1]){
			list1[i]=1
		}
		else if(ratings[i]==ratings[i-1]&&ratings[i]<ratings[i+1]){

		}
		else if(ratings[i]==ratings[i-1]&&ratings[i]>ratings[i+1]){
			list1[i]=list1[i+1]+1
		}
		else if(ratings[i]<ratings[i-1]&&ratings[i]==ratings[i+1]){

		}
		else if(ratings[i]>ratings[i-1]&&ratings[i]==ratings[i+1]){
			list1[i]=list1[i-1]+1
		}
		else if(ratings[i]==ratings[i-1]&&ratings[i]==ratings[i+1]){

		}
		else{
			list1[i]=Math.max(list1[i-1],list1[i+1])+1
		}
	}
	if(ratings[0]>ratings[1]){
		list1[0]=list1[1]+1
	}
	if(ratings[ratings.length-1]>ratings[ratings.length-2]){
		list1[ratings.length-1]=list1[ratings.length-2]+1
	}
	for (let i = ratings.length-2; i >0 ; i--) {
		if(ratings[i]>ratings[i-1]&&ratings[i]<ratings[i+1]){
			list2[i]=list2[i-1]+1
		}
		else if(ratings[i]<ratings[i-1]&&ratings[i]>ratings[i+1]){
			list2[i]=list2[i+1]+1
		}
		else if(ratings[i]<ratings[i-1]&&ratings[i]<ratings[i+1]){

		}
		else if(ratings[i]==ratings[i-1]&&ratings[i]<ratings[i+1]){

		}
		else if(ratings[i]==ratings[i-1]&&ratings[i]>ratings[i+1]){
			list2[i]=list2[i+1]+1
		}
		else if(ratings[i]<ratings[i-1]&&ratings[i]==ratings[i+1]){

		}
		else if(ratings[i]>ratings[i-1]&&ratings[i]==ratings[i+1]){
			list2[i]=list2[i-1]+1
		}
		else if(ratings[i]==ratings[i-1]&&ratings[i]==ratings[i+1]){

		}
		else{
			list2[i]=Math.max(list2[i-1],list2[i+1])+1
		}
	}
	if(ratings[0]>ratings[1]){
		list2[0]=list2[1]+1
	}
	if(ratings[ratings.length-1]>ratings[ratings.length-2]){
		list2[ratings.length-1]=list2[ratings.length-2]+1
	}
	for(let i=0;i<list1.length;i++){
		if(list1[i] != list2[i]){
			list3[i]=Math.max(list1[i],list2[i])
		}
		else{
			list3[i]=list1[i]
		}
		number+=list3[i]
	}
	// console.log(list1)
	// console.log(list2)
	// console.log(list3)
	return number
};

var number=[1,2,87,87,87,2,1]
console.log(candy(number))