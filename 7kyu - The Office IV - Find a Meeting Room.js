function meeting(x) {
  let total = [];
  for (let i = 0; i < x.length; i++) {
    let firstAvail = x.findIndex((item) => item === "O");
    if (firstAvail == -1) {
      return "None available!";
    }
    return firstAvail;
  }
}

console.log(meeting(["X", "O", "X"])); //1
console.log(meeting(["O", "X", "X", "X", "X"])); //0
console.log(meeting(["X", "X", "X", "X", "X"])); //none
