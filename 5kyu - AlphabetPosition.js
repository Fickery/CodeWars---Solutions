function alphabetPosition(text) {
 let pattern = /[a-zA-Z]/
 let split = text.split("")
 let result = [];
 for (let i = 0; i < split.length; i++) {
 	const word = split[i];
 	const pos = pattern.test(word) ? word.toLowerCase().charCodeAt(0) - 96 : undefined;
 	if (pos !== undefined) {
 		result.push(pos)
 	} 	
}
return result.join(" ")
 }

console.log(alphabetPosition("The narwhal bacons at midnight"));

// result.push(pattern.test(text) ? text.toLowerCase().charCodeAt(0) - 96 : -1)
