function XO(str) {
  let split = str.toLowerCase().split("");
  let xNum = 0;
  let oNum = 0;

  for (let i = 0; i < split.length; i++) {
    if (split[i] === "x") {
      xNum++;
    } else if (split[i] === "o") {
      oNum++;
    }
  }
  return xNum === oNum;
}
console.log(XO("xxxm"));
console.log(XO("zpzpzpp"));
console.log(XO("oO"));
console.log(XO("OOOM"));
