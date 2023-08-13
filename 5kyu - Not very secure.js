function alphanumeric(string) {
  let pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(string);
}

console.log(alphanumeric("Mazinkaiser")); // true
console.log(alphanumeric("hello world_")); // false
console.log(alphanumeric("PassW0rd")); // true
console.log(alphanumeric("     ")); // false
