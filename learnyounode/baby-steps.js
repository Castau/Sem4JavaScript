
function nums (arr){
	let res = 0;
	for (let i = 2; i < arr.length; i++) {
		res = res + Number(arr[i]);
	}
	return res;
}

console.log(nums(process.argv));