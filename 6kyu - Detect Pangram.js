function isPangram(string) {
  let str = string.toLowerCase();
  let aToz = 'abcdefghijklmnopqrstuvwxyz';

  for (let char of aToz) {
    if (str.indexOf(char) === -1) {
      return false
    }
  }
  return true
}



console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
