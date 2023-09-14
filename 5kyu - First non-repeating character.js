function firstNonRepeatingLetter(s) {
  let dupe = new Set();
  let unique = new Set();

  for (let char of s) {
    if (dupe.has(char)) continue;
    if (unique.has(char)) {
			unique.delete(char);
      dupe.add(char);
    } else {
    unique.add(char);
    }
  }
  return [...unique][0] || "";
}

/* function firstNonRepeatingLetter(s) {
  let indS = s.split('');
  let dupe = [];
  let unique = []
  for (let i = 0; i < indS.length; i++) {
    if (indS.indexOf(indS[i]) === indS.lastIndexOf(indS[i])) {
      dupe.push(indS[i])
    } else {
      unique.push(indS[i])
    }
  }
  return dupe
} */

/*   split into indv word
  loop and push to a new set if unique char
  if not unique push to another set
  else if all repeat return empty string */
  
console.log(firstNonRepeatingLetter('moonmen'))
