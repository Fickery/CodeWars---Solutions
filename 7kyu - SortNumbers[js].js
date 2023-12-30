function solution(nums) {
	return nums !== null ? nums.sort(function(a,b){return a-b}) : []
}

console.log(solution([1,3,2,6,10,51,50]))
console.log(solution(null))
