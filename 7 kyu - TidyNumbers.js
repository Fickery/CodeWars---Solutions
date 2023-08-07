function tidyNumber(n) {
  let num = n.toString().split('').map(Number);
  // Loop through the digits array to check if it's in non-decreasing order
  for (let i = 1; i < num.length; i++) {
    // Compare the current digit with the previous one
    if (num[i] < num[i - 1]) {
      // If the current digit is smaller than the previous one,
      // the number is not tidy, so return false
      return false;
    }
  }
  // If the loop completes without returning false, then the number is tidy,
  // so return true
  return true;
}

console.log(tidyNumber(496896100));
console.log(tidyNumber(169574))
console.log(tidyNumber(2));
console.log(tidyNumber(7834210));
console.log(tidyNumber(196));


/*
function tidyNumber(n) {
  let split = n.toString().split('').map(Number);
  return split.every((element, index, arr) => !index || element >= arr[index -1]);
*/