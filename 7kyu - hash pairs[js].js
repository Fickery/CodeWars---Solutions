function solution(pairs) {
	return Object.entries(pairs).map(([key, value]) => `${key} = ${value}`).join()
}

console.log(solution({a: 1, b: "2"}))
