function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 1; i <= nFloors; i++) {
		let spaces = " ".repeat(nFloors - i);
    let asterisk = "*".repeat(2 * i - 1);
    let floor = spaces + asterisk + spaces;
    tower.push(floor);
  }
  return tower
}

console.log(towerBuilder(1)) // *
console.log(towerBuilder(4)) // *, ***, *****, *******
console.log(towerBuilder(5)) // *, ***, *****, *******, *********, ***********