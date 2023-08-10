function friend(friends) {
  let newArray = [];
  for (const name of friends) {
  	if (name.length === 4) {
    newArray.push(name)
    }
  }
  return newArray;
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
