function getMiddle(s) {
  let split = s.split("");
  let middle = Math.floor(split.length / 2);

  if (split.length % 2 == 0) {
    return split.slice(middle - 1, middle + 1).join("");
  } else {
    return split[middle];
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
