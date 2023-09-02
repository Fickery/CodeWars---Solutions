function filter_list(l) {
	let newArr = []
  for (const val of l) {
  	    if (typeof val === 'number'&& val >=0) {
  	    	  newArr.push(val)
  	    }
  }
 return newArr
}

console.log(filter_list([1.01,2,3,'asj', 0, 'b']));
