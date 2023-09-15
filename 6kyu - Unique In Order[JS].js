function uniqueInOrder(n){
  let inOrder = [];

  if (typeof n === 'string') {
   n = n.split('');
  }
  
  for (let i = 0; i < n.length; i++) {
    inOrder.push(n[i]);
    while (n[i] === n[i + 1]) {
    	  n.splice(i + 1, 1)
    }
  }
  
  return inOrder;
}
