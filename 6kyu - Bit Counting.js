 var countBits = function(n) {
  let bits = n.toString(2).split("");
  let total = 0;
  
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === "1") {
      total += 1
    }
  }
  return total
}; 


console.log(countBits(6465732663));
console.log(countBits(10));
console.log(countBits(1234));
